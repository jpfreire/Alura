import { NegociacaoController } from './controllers/NegociacaoController';
const controller = new NegociacaoController();
$(".form").submit((evento) => controller.adiciona(evento));
