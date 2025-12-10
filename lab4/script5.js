const imagesContainer5 = document.getElementById("images5");
const totalImages5 = 360;

for (let i=301; i<= totalImages5; i++){
    const img = document.createElement("img");
    img.src = `images/image_${i}.png`;
    img.alt = `Slika ${i}`;
    imagesContainer5.appendChild(img); 
}