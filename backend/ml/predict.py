import yfinance as yf
import numpy as np
import joblib
from backend.ml.train import train
import os

from tensorflow.keras.models import load_model


def predict(name):
    model_path = (
    f"backend/ml/models/{name}_model.keras"
    )
    scaler_path = (
    f"backend/ml/scalers/{name}_scaler.pkl"
    )
    print(model_path)
    if (not os.path.exists(model_path) or not os.path.exists(scaler_path)):
        train(name)
    
    model = load_model(model_path)
    scaler = joblib.load(scaler_path)
    

    data = yf.download(
        name,
        period = "90d"
    )

    close_prices = data["Close"].values.reshape(-1,1)
    current_price = close_prices[-1][0]
    last_60days = close_prices[-60:]

    # print(last_60days)

    scaled_prices = scaler.transform(last_60days)

    x_test = np.array([scaled_prices])

    prediction = model.predict(x_test)

    prediction_price = scaler.inverse_transform(prediction)[0][0]

    # print(
    #     f"Predicted next price: ${prediction_price[0][0]:.2f}"
    # )
    change_percent = (
        (prediction_price - current_price)
        / current_price
    ) * 100

    return {
        "ticker": name,
        "current_price": round(
            float(current_price), 2
        ),
        "predicted_price": round(
            float(prediction_price), 2
        ),
        "change_percent": round(
            float(change_percent), 2
        )
    }

