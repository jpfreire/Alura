System.register([], function (exports_1, context_1) {
    "use strict";
    var AZUL, VERMELHO, AMARELO;
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao(emSegundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = 'ms';
                let divisor = 1;
                if (emSegundos) {
                    unidade = 's';
                    divisor = 1000;
                }
                let label = `%c tempo de execucao para %c  ${propertyKey}`;
                console.info(target);
                console.group(label, AZUL, AMARELO);
                console.info(`parâmetros: ${JSON.stringify(args)}`);
                let t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                let t2 = performance.now();
                console.info(`rodou em ${(t2 - t1) / divisor} ${unidade}`);
                console.info(`retorno: %c ${JSON.stringify(retorno)}`, VERMELHO);
                console.groupEnd(label);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
            AZUL = 'background-color:white;color:blue';
            VERMELHO = 'background-color:white;color:red';
            AMARELO = 'background-color:yellow;color:black';
        }
    };
});
