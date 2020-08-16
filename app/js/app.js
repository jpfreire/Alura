const controller = new NegociacaoController();
document
    .querySelector(".form")
    .addEventListener('submit', (evento) => controller.adiciona(evento));
