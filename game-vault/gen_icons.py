from pathlib import Path
from PIL import Image, ImageDraw

out_dir = Path("public/icons")
out_dir.mkdir(parents=True, exist_ok=True)

for tamanho, nome in [(192, "icon-192.png"), (512, "icon-512.png")]:
    img = Image.new("RGB", (tamanho, tamanho), "#0f172a")
    draw = ImageDraw.Draw(img)
    margem = tamanho // 8
    borda = max(4, tamanho // 20)
    draw.ellipse([margem, margem, tamanho - margem, tamanho - margem], outline="#34d399", width=borda)
    draw.ellipse([tamanho // 3, tamanho // 3, tamanho - tamanho // 3, tamanho - tamanho // 3], fill="#f8fafc", outline="#0f172a", width=max(2, tamanho // 80))
    img.save(out_dir / nome)
    print("gerado:", nome)

apple = out_dir / "icon-192.png"
apple_target = out_dir / "apple-touch-icon.png"
apple_target.write_bytes(apple.read_bytes())
print("gerado:", apple_target.name)
