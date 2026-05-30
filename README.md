# 📈 Stock Market Predictor

An AI-powered stock forecasting platform that uses Long Short-Term Memory (LSTM) neural networks to analyze historical stock prices and predict future market movements.

Built with **React**, **FastAPI**, **TensorFlow**, and **Yahoo Finance**, the application dynamically trains and stores models for any valid stock ticker entered by the user.

---

## 🚀 Features

* Dynamic stock ticker support
* Automatic model generation for unseen stocks
* LSTM-based time series forecasting
* FastAPI REST API backend
* Modern React frontend
* Real-time market data using Yahoo Finance
* Automatic model and scaler caching
* Percentage change prediction
* Error handling for invalid tickers
* Cyber-inspired dashboard UI

---

## 🧠 How It Works

1. User enters a stock ticker
2. Backend checks if a trained model already exists
3. If no model exists:

   * Historical stock data is downloaded
   * Data is normalized using MinMaxScaler
   * An LSTM neural network is trained
   * Model and scaler are saved locally
4. Latest market data is retrieved
5. The model predicts the next closing price
6. Results are displayed in the React dashboard

---

## ⚙️ Tech Stack

### Frontend

* React
* Vite
* CSS

### Backend

* FastAPI
* Uvicorn

### Machine Learning

* TensorFlow / Keras
* LSTM Neural Networks
* Scikit-learn
* NumPy

### Data Source

* Yahoo Finance (yfinance)

---

## 📂 Project Structure

```text
stock_predictor
│
├── backend
│   ├── app.py
│   │
│   └── ml
│       ├── train.py
│       ├── predict.py
│       ├── models/
│       └── scalers/
│
├── frontend
│   ├── src
│   ├── public
│   └── dist
│
├── ss
│   ├── home.png
│   ├── prediction.png
│   └── prediction2.png
│
└── README.md
```

---

## 🔄 Application Flow

```text
User Input
     ↓
React Frontend
     ↓
FastAPI Endpoint
     ↓
Model Exists?
     ↓
  Yes      No
   ↓        ↓
 Predict   Train Model
   ↓        ↓
   └────────┘
        ↓
Return Prediction
        ↓
Display Results
```

---

## 📸 Screenshots

### Home Screen

![Home](ss/home.png)

### Prediction Example

![Prediction](ss/prediction.png)

### Dynamic Ticker Prediction

![Prediction](ss/prediction2.png)

---

## 🎯 Current Capabilities

* Predicts future stock prices using LSTM networks
* Supports any valid Yahoo Finance ticker
* Automatically trains new models on demand
* Caches trained models for faster future predictions
* Provides current price, predicted price, and expected percentage change

---

## 🔮 Future Improvements

* Interactive stock charts
* RSI and MACD indicators
* Prediction confidence intervals
* Multiple forecasting models (LSTM, XGBoost, Random Forest)
* Historical prediction tracking
* Cloud deployment
* Portfolio analysis tools

---

## 👨‍💻 Author

Built as a full-stack machine learning project combining deep learning, financial forecasting, backend development, and modern frontend engineering.
