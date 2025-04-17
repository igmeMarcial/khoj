import json
import logging
from typing import Dict, Optional, Union

from fastapi import APIRouter, HTTPException, Request
from fastapi.requests import Request
from fastapi.responses import Response
from starlette.authentication import has_required_scope, requires

from khoj.database import adapters
from khoj.database.adapters import ConversationAdapters, EntryAdapters
from khoj.routers.helpers import update_telemetry_state


api_names = APIRouter()


@api_names.get("/test")
async def test_simple(
):
    # Simular un chat model, aquí puedes reemplazar con tu lógica de negocio
    chat_model = {"id": 1, "name": "GPT-4"}

    return Response(
        status_code=200,
        content=json.dumps({"id": chat_model["id"], "chat_model": chat_model["name"]}),
        media_type="application/json"
    )