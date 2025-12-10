const imagesContainer4 = document.getElementById("images4");
const totalImages4 = 300;

for (let i=241; i<= totalImages4; i++){
    const img = document.createElement("img");
    img.src = `images/image_${i}.png`;
    img.alt = `Slika ${i}`;
    imagesContainer4.appendChild(img); 
}
