from fastapi import FastAPI
from igme.interfaces.whatsapp.whatsapp_response import whatsapp_router

app = FastAPI()
app.include_router(whatsapp_router)