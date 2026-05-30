import numpy as np
import yfinance as yf
import joblib

from sklearn.preprocessing import MinMaxScaler

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense,Dropout,LSTM
from tensorflow.keras.callbacks import EarlyStopping

print("DOWNLOADING STOCK MARKET DATA")

data = yf.download(
    "TSLA",
    start="2020-01-01",
    end="2026-01-01"
)

close_prices = data['Close'].values.reshape(-1,1)

scaler = MinMaxScaler(feature_range=(0,1))
scaled_data = scaler.fit_transform(close_prices)

joblib.dump(scaler, "backend/ml/TSLA_scaler.pkl")

x_train = []
y_train = []

for i in range(60,len(scaled_data)):
    x_train.append(scaled_data[i-60:i,0])
    y_train.append(scaled_data[i,0])

x_train = np.array(x_train)
y_train = np.array(y_train)

model = Sequential()

model.add(
    LSTM(
        input_shape = (60,1),
        units = 50,
        return_sequences = True
    )
)

model.add(Dropout(0.2))

model.add(
    LSTM(
        input_shape = (60,1),
        units = 50,
        return_sequences = False
    )
)

model.add(Dropout(0.2))

model.add(Dense(25))

model.add(Dense(1))

print("COMPILING")

model.compile(
    optimizer = "adam",
    loss = "mean_squared_error"
)

early_stop = EarlyStopping(
    monitor = "val_loss",
    patience = 3,
    restore_best_weights = True
)

print("TRAINING MODEL")

model.fit(
    x_train,
    y_train,
    epochs = 50,
    batch_size = 32,
    validation_split = 0.2,
    callbacks = [early_stop]
)

print("SAVING")

model.save("backend/ml/tsla_model.keras")

print("completed")
