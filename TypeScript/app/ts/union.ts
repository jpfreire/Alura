// criando o alias!
type MeuToken = string |  number;

function processaToken(token: MeuToken) {

    if(typeof(token) === 'string') {

        return token.replace(/2/g,'X');
    } else {

        return token.toFixed().replace(/2/g,'X');
    }

}


const tokenProcessado1 = processaToken('1234');
const tokenProcessado2 = processaToken(1234);
