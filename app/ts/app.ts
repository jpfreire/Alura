import { NegociacaoController } from './controllers/NegociacaoController'
const controller = new NegociacaoController();
console.log('controller', controller);
//teste
$(".form").submit((evento)=>controller.adiciona(evento));
