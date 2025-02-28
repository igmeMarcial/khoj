
from fastapi import APIRouter, Depends, HTTPException, Request
from starlette.authentication import requires

api_assistant = APIRouter()
@api_assistant.get("/")
# @requires(["authenticated"])
async def assistant():
    
    return {"mensaje": "Soy Igme, asistente de ventas"} ;

