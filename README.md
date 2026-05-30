<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stock Market Predictor</title>
</head>
<body>

    <h1>📈 Stock Market Predictor</h1>

    <p>
        An AI-powered stock forecasting platform built using
        <strong>React</strong>,
        <strong>FastAPI</strong>,
        <strong>TensorFlow</strong>,
        and
        <strong>Yahoo Finance</strong>.
    </p>

    <hr>

    <h2>🚀 Features</h2>

    <ul>
        <li>Real-time stock data retrieval using Yahoo Finance</li>
        <li>LSTM Neural Network based stock price prediction</li>
        <li>FastAPI REST API backend</li>
        <li>Modern React frontend dashboard</li>
        <li>Dynamic stock ticker search</li>
        <li>Current price and next-day prediction display</li>
        <li>Expected percentage change calculation</li>
        <li>Cyber-inspired UI design</li>
    </ul>

    <hr>

    <h2>🧠 Machine Learning Pipeline</h2>

    <ol>
        <li>Download historical stock market data</li>
        <li>Extract closing prices</li>
        <li>Scale data using MinMaxScaler</li>
        <li>Create 60-day sliding windows</li>
        <li>Train an LSTM neural network</li>
        <li>Generate next-day stock price forecasts</li>
        <li>Convert predictions back to actual price values</li>
    </ol>

    <hr>

    <h2>⚙️ Tech Stack</h2>

    <table border="1" cellpadding="8">
        <tr>
            <th>Layer</th>
            <th>Technology</th>
        </tr>
        <tr>
            <td>Frontend</td>
            <td>React + Vite</td>
        </tr>
        <tr>
            <td>Backend</td>
            <td>FastAPI</td>
        </tr>
        <tr>
            <td>Machine Learning</td>
            <td>TensorFlow / Keras</td>
        </tr>
        <tr>
            <td>Data Processing</td>
            <td>NumPy, Scikit-learn</td>
        </tr>
        <tr>
            <td>Market Data</td>
            <td>Yahoo Finance (yfinance)</td>
        </tr>
    </table>

    <hr>

    <h2>📂 Project Structure</h2>

<pre>
STOCK_PREDICTOR
│
├── backend
│   ├── app.py
│   └── ml
│       ├── train.py
│       ├── predict.py
│       ├── models
│       └── scalers
│
├── frontend
│   ├── src
│   ├── public
│   └── dist
│
└── README.html
</pre>

    <hr>

    <h2>🔄 Application Flow</h2>

<pre>
User Inputs Stock Ticker
            ↓
React Frontend
            ↓
FastAPI Endpoint
            ↓
LSTM Prediction Engine
            ↓
Predicted Stock Price
            ↓
Results Displayed on Dashboard
</pre>

    <hr>

    <h2>📸 Current Capabilities</h2>

    <ul>
        <li>Apple (AAPL) stock forecasting</li>
        <li>Tesla (TSLA) stock forecasting</li>
        <li>Real-time prediction requests through API</li>
        <li>Interactive frontend interface</li>
    </ul>

    <hr>

    <h2>👨‍💻 Author</h2>

    <p>
        Built as a full-stack machine learning project combining
        modern web development and deep learning-based financial forecasting.
    </p>

</body>
</html>