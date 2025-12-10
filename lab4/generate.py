from PIL import Image
import os

folder = "images"
os.makedirs(folder, exist_ok=True)

start = 401
end = 501

for i in range(start, end):
    img = Image.new('RGB', (150, 150), color=(i*3 % 255, i*5 % 255, i*7 % 255))
    img.save(os.path.join(folder, f"image_{i}.png"))
