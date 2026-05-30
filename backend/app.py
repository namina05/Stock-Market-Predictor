from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.ml.predict import predict
from fastapi.staticfiles import StaticFiles

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
    return(predict(ticker.upper()))


app.mount(
    "/",
    StaticFiles(
        directory="frontend/dist",
        html=True
    ),
    name="frontend"
)