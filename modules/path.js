const path = require('path');

//Basename - retorna o nome do arquivo
console.log(path.basename(__filename));

//Dirname - retorna o nome do diretório
console.log(path.dirname(__filename));

//Extname - retorna a extensão do arquivo
console.log(path.extname(__filename));

//Criar um objeto path
console.log(path.parse(__filename));

//Juntar caminhos
console.log(path.join(__dirname, 'test', 'test.html'));
