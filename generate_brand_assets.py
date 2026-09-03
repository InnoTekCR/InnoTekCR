"""
Genera los assets de marca (favicon PNG y og-image) para INNOTEK.
No usa fotografías ni datos falsos: solo geometría vectorial (nodos y
conexiones inspirados en el isotipo) renderizada por código.

Uso: python3 scripts/generate_brand_assets.py
Requiere: Pillow (pip install pillow)
"""

from PIL import Image, ImageDraw, ImageFont
import math
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
FONT_BOLD = "/mnt/skills/examples/canvas-design/canvas-fonts/BricolageGrotesque-Bold.ttf"
FONT_REG = "/mnt/skills/examples/canvas-design/canvas-fonts/BricolageGrotesque-Regular.ttf"

INK = (5, 9, 20, 255)
INK_800 = (16, 26, 56, 255)
BRAND = (91, 141, 255, 255)
BRAND_LIGHT = (139, 179, 255, 255)
SIGNAL = (45, 212, 191, 255)
WHITE = (248, 250, 255, 255)


def draw_network_mark(draw, cx, cy, scale=1.0, line_w=None, node_glow=True):
    """Dibuja el isotipo: nodo central superior/inferior conectado a 4 nodos, tipo hexágono tecnológico."""
    pts = {
        "top": (cx, cy - 120 * scale),
        "left_up": (cx - 104 * scale, cy - 52 * scale),
        "right_up": (cx + 104 * scale, cy - 52 * scale),
        "left_down": (cx - 104 * scale, cy + 52 * scale),
        "right_down": (cx + 104 * scale, cy + 52 * scale),
        "bottom": (cx, cy + 120 * scale),
    }
    edges = [
        ("top", "left_up"), ("top", "right_up"),
        ("left_up", "left_down"), ("right_up", "right_down"),
        ("left_down", "bottom"), ("right_down", "bottom"),
        ("left_up", "right_up"), ("left_down", "right_down"),
    ]
    lw = line_w or max(2, int(4 * scale))
    for a, b in edges:
        draw.line([pts[a], pts[b]], fill=(91, 141, 255, 140), width=lw)

    node_r_big = 15 * scale
    node_r_small = 12 * scale
    for key in ("top", "bottom"):
        x, y = pts[key]
        if node_glow:
            glow_r = node_r_big * 2.2
            draw.ellipse([x - glow_r, y - glow_r, x + glow_r, y + glow_r], fill=(45, 212, 191, 40))
        draw.ellipse([x - node_r_big, y - node_r_big, x + node_r_big, y + node_r_big], fill=SIGNAL)
    for key in ("left_up", "right_up", "left_down", "right_down"):
        x, y = pts[key]
        if node_glow:
            glow_r = node_r_small * 2.2
            draw.ellipse([x - glow_r, y - glow_r, x + glow_r, y + glow_r], fill=(91, 141, 255, 35))
        draw.ellipse([x - node_r_small, y - node_r_small, x + node_r_small, y + node_r_small], fill=BRAND_LIGHT)


def make_favicon(size, path):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    radius = int(size * 0.20)
    draw.rounded_rectangle([0, 0, size, size], radius=radius, fill=INK)
    scale = size / 260
    draw_network_mark(draw, size / 2, size / 2, scale=scale, node_glow=(size >= 96))
    img.save(path)


def make_og_image(path):
    w, h = 1200, 630
    img = Image.new("RGBA", (w, h), INK)
    draw = ImageDraw.Draw(img)

    # Degradado radial sutil superior-izquierda (azul tecnológico)
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    cx, cy, max_r = 230, 160, 620
    steps = 140
    for i in range(steps, 0, -1):
        r = max_r * i / steps
        alpha = int(46 * (1 - i / steps) ** 1.6)
        gdraw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(53, 102, 247, alpha))
    img = Image.alpha_composite(img, glow)
    draw = ImageDraw.Draw(img)

    # Grid sutil
    grid = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(grid)
    step = 40
    for x in range(0, w, step):
        gdraw.line([(x, 0), (x, h)], fill=(255, 255, 255, 8), width=1)
    for y in range(0, h, step):
        gdraw.line([(0, y), (w, y)], fill=(255, 255, 255, 8), width=1)
    img = Image.alpha_composite(img, grid)
    draw = ImageDraw.Draw(img)

    # Marca de red a la derecha
    draw_network_mark(draw, 960, 315, scale=1.35)

    # Texto
    try:
        f_word = ImageFont.truetype(FONT_BOLD, 88)
        f_tag = ImageFont.truetype(FONT_REG, 30)
    except Exception:
        f_word = ImageFont.load_default()
        f_tag = ImageFont.load_default()

    draw.text((90, 230), "INNOTEK", font=f_word, fill=WHITE)
    draw.text(
        (94, 330),
        "Soluciones digitales para personas,",
        font=f_tag,
        fill=(197, 210, 240, 255),
    )
    draw.text(
        (94, 372),
        "emprendimientos y pymes en Costa Rica",
        font=f_tag,
        fill=(197, 210, 240, 255),
    )

    # Línea de acento
    draw.rectangle([94, 210, 174, 214], fill=SIGNAL)

    img.convert("RGB").save(path, quality=92)


if __name__ == "__main__":
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    make_favicon(180, os.path.join(PUBLIC_DIR, "apple-touch-icon.png"))
    make_favicon(512, os.path.join(PUBLIC_DIR, "favicon-512.png"))
    make_favicon(32, os.path.join(PUBLIC_DIR, "favicon-32.png"))
    make_og_image(os.path.join(PUBLIC_DIR, "og-image.png"))
    print("Assets generados en /public")
