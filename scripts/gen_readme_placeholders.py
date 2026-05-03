"""Genera PNGs señalización para el README (opcional; reemplazar por capturas reales)."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "img" / "readme"


def make_png(name: str, bg: str, fg: str, label: str) -> None:
  w, h = 1120, 630
  im = Image.new("RGB", (w, h), bg)
  d = ImageDraw.Draw(im)
  try:
    title = ImageFont.truetype("arial.ttf", 48)
    sub = ImageFont.truetype("arial.ttf", 26)
  except OSError:
    title = sub = ImageFont.load_default()
  d.text((40, h // 2 - 42), label, fill=fg, font=title)
  d.text(
    (40, h // 2 + 20),
    "(Reemplazar con captura real del sitio publicado)",
    fill=fg,
    font=sub,
  )
  OUT.mkdir(parents=True, exist_ok=True)
  im.save(OUT / name, "PNG")


if __name__ == "__main__":
  make_png(
    "captura-portada.png",
    "#0f1419",
    "#3dd9a5",
    "Portada — CarpinchoLab",
  )
  make_png(
    "captura-bitacora.png",
    "#1a222d",
    "#e8eef5",
    "Bitácora — CarpinchoLab",
  )
  make_png(
    "captura-perfil.png",
    "#232d3a",
    "#9aaebf",
    "Perfil individual — CarpinchoLab",
  )
  print("Escrito en", OUT)
