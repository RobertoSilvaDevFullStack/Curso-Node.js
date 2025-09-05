const fs = require('fs');
const path = require('path');

//Criar uma pasta
const testPath = path.join(__dirname, '/test');

// Verifica se a pasta já existe
if (!fs.existsSync(testPath)) {
    fs.mkdir(testPath, {}, err => {
        if(err) throw err;
        console.log('Pasta criada com sucesso!');
    });
} else {
    console.log('Pasta já existe!');
}

//Criar um arquivo
fs.writeFile(path.join(testPath, 'test.txt'), 'Hello Node!', (error) => {
    if (error) {
        return console.log('Erro', error);
    }
    console.log('Arquivo criado com sucesso!');

    //Adicionar conteúdo ao arquivo
fs.appendFile(path.join(testPath, 'test.txt'), '\nAdicionando mais conteúdo!', (error) => {
    if (error) {
        return console.log('Erro', error);
    }
    console.log('Conteúdo adicionado com sucesso!');

    //Ler o arquivo
fs.readFile(path.join(testPath, 'test.txt'), 'utf8', (error, data) => {
    if (error) {
        return console.log('Erro', error);
    }
    console.log('Conteúdo do arquivo:', data);
    
});
});
});



