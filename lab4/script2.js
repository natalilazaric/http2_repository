const imagesContainer2 = document.getElementById("images2");
const totalImages2 = 180;

for (let i=121; i<= totalImages2; i++){
    const img = document.createElement("img");
    img.src = `images/image_${i}.png`;
    img.alt = `Slika ${i}`;
    imagesContainer2.appendChild(img); 
}
