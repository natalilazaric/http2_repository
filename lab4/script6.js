const imagesContainer6 = document.getElementById("images6");
const totalImages6 = 420;

for (let i=361; i<= totalImages6; i++){
    const img = document.createElement("img");
    img.src = `images/image_${i}.png`;
    img.alt = `Slika ${i}`;
    imagesContainer6.appendChild(img); 
}