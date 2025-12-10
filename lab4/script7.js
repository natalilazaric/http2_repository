const imagesContainer7 = document.getElementById("images7");
const totalImages7 = 500;

for (let i=421; i<= totalImages7; i++){
    const img = document.createElement("img");
    img.src = `images/image_${i}.png`;
    img.alt = `Slika ${i}`;
    imagesContainer7.appendChild(img); 
}