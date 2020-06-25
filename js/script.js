// let time = 2000;
let currentImageIndex = 0;
let imagem = document.querySelectorAll(".image-banner img");
let before = document.querySelector(".before-after .before");
let after = document.querySelector(".before-after .after");
//pego a coleção de imagens

let max = imagem.length; //limite de imagens
before.addEventListener("click", beforeImage);
after.addEventListener("click", nextImage);

function nextImage() {
  imagem[currentImageIndex].classList.remove("selected");
  currentImageIndex = currentImageIndex + 1;
  //adicionar uma classe na proxima imagem

  if (currentImageIndex >= max) {
    currentImageIndex = 0;
  }
  imagem[currentImageIndex].classList.add("selected");
}
function beforeImage() {
  imagem[currentImageIndex].classList.remove("selected");
  currentImageIndex = currentImageIndex - 1;

  //adicionar uma classe na proxima imagem
  if (currentImageIndex < 0) {
    currentImageIndex = max - 1;
  }
  imagem[currentImageIndex].classList.add("selected");
}

let cards = document.querySelectorAll(".mais-vendidos-card");
for (let card of cards) {
  card.addEventListener("mouseover", function () {
    let dados = card.getElementsByClassName("comprar");
    dados[0].classList.add("active");
  });
  card.addEventListener("mouseout", function () {
    let dados = card.getElementsByClassName("comprar");
    dados[0].classList.remove("active");
  });
}

let cabecalhos = document.querySelector(".mais-vendidos .cabecalho");
let cabeca = cabecalhos.getElementsByTagName("p");
let comprimento = cabecalhos.getElementsByTagName("p").length;
for (let i = 0; i < comprimento; i++) {
  cabeca[i].addEventListener("click", function () {
    cabeca[i].classList.add("selected");
    if (
      cabeca[i].nextElementSibling != null &&
      cabeca[i].nextElementSibling.classList == "selected"
    ) {
      cabeca[i].nextElementSibling.classList.remove("selected");
    } else {
      cabeca[i - 1].classList.remove("selected");
    }
  });
}
