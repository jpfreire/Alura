function processaToken(token) {
    return token.replace(/2/g, 'X');
}
const tokenProcessado = processaToken('1234');
