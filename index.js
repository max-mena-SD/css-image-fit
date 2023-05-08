const images = [
  "bar-Chicago.jpg",
  "bruchetta.jpg",
  "entrance-Chicago.jpg",
  "gourmet_dish_1.jpg",
  "greeksalad.jpg",
  "lemondessert.jpg",
];

const container = document.getElementById("contenedor");

images.forEach((image) => {
  let imgDiv = document.createElement("div");
  imgDiv.className = "imagen";
  imgDiv.id = "imagen-" + images.indexOf(image);
  let imgImg = document.createElement("img");
  imgImg.src = "./images/" + image;
  imgDiv.appendChild(imgImg);
  container.appendChild(imgDiv);
});
