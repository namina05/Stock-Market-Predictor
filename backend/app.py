
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from backend.ml.predict import predict
from fastapi.staticfiles import StaticFiles
from backend.services.chart import get_history

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

# @app.get("/")
# def home():
#     return({
#         "message":
#         "Fastapi is running"
#     })

@app.get("/predict/{ticker}")
def get_predict(ticker : str):
    try:
        return predict(ticker)

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

@app.get("/predict/{ticker}/chart")
def get_chart(ticker:str):
    try:
        return get_history(ticker)
    except ValueError as e:
        raise HTTPException(
            status_code = 400,
            detail = str(e)
        )

app.mount(
    "/",
    StaticFiles(
        directory="frontend/dist",
        html=True
    ),
    name="frontend"
)