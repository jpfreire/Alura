import { Imprimivel } from "../models/Imprimivel";

export function imprime(...arq:Imprimivel[]):void{
    arq.forEach(element => {
        element.paraTexto()
    });
}