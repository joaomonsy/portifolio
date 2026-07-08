

const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let slideAtual = 0;

function mostrarSlide(index) {
    slides.forEach(slide => slide.classList.remove("ativo"));
    slides[index].classList.add("ativo");
}

if (slides.length > 0) {
    mostrarSlide(slideAtual);

    next.addEventListener("click", () => {
        slideAtual = (slideAtual + 1) % slides.length;
        mostrarSlide(slideAtual);
    });

    prev.addEventListener("click", () => {
        slideAtual = (slideAtual - 1 + slides.length) % slides.length;
        mostrarSlide(slideAtual);
    });
}


function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const mensagem = document.getElementById("mensagem");
    const telefone = "55991999999"; // Altere para o seu número

    const texto = `Olá, me chamo ${nome.value}, ${mensagem.value}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, "_blank");
}