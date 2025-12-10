const imagesContainer = document.getElementById("images");
const totalImages = 60;

for (let i=1; i<= totalImages; i++){
    const img = document.createElement("img");
    img.src = `images/image_${i}.png`;
    img.alt = `Slika ${i}`;
    imagesContainer.appendChild(img); 
}
