export function imprime(...arq:Impressao[]):void{
    arq.forEach(element => {
        element.paraTexto()
    });
}

interface Impressao {
    paraTexto():void
}