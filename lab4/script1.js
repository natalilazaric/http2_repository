const imagesContainer1 = document.getElementById("images1");
const totalImages1 = 120;

for (let i=61; i<= totalImages1; i++){
    const img = document.createElement("img");
    img.src = `images/image_${i}.png`;
    img.alt = `Slika ${i}`;
    imagesContainer1.appendChild(img); 
}
