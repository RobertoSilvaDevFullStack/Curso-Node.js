# 💈 Projeto Barbearia - API REST

Uma API REST completa para gerenciamento de usuários de uma barbearia, desenvolvida com Node.js, Express e MongoDB.

## 🚀 Funcionalidades

- ✅ **CRUD Completo de Usuários**
  - Criar usuário (POST)
  - Listar todos os usuários (GET)
  - Buscar usuário por ID (GET)
  - Atualizar usuário (PATCH)
  - Deletar usuário (DELETE)

- ✅ **Interface Web com EJS**
  - Visualização de usuários cadastrados

- ✅ **Banco de dados MongoDB**
  - Conexão com MongoDB Atlas
  - Modelos com Mongoose

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **EJS** - Template engine
- **dotenv** - Gerenciamento de variáveis de ambiente
- **Nodemon** - Desenvolvimento (auto-restart)

## 📋 Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- Conta no MongoDB Atlas (ou MongoDB local)

## 🔧 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/SEU_USUARIO/projeto-barbearia.git
   cd projeto-barbearia
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   MONGODB_USER=seu_usuario
   MONGODB_PASSWORD=sua_senha_codificada
   MONGODB_HOST=seu_cluster.mongodb.net
   MONGODB_DBNAME=nome_do_banco
   ```

4. **Execute o projeto**
   ```bash
   # Desenvolvimento
   npm run start:dev
   
   # Produção
   npm start
   ```

## 🌐 Endpoints da API

### Usuários

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/user` | Criar novo usuário |
| GET | `/user` | Listar todos os usuários |
| GET | `/user/:id` | Buscar usuário por ID |
| PATCH | `/user/:id` | Atualizar usuário |
| DELETE | `/user/:id` | Deletar usuário |

### Views

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/views/users` | Interface web com lista de usuários |

## 📝 Exemplo de Uso

### Criar Usuário
```bash
POST http://localhost:8080/user
Content-Type: application/json

{
  "firstName": "João",
  "lastName": "Silva",
  "age": 30,
  "email": "joao.silva@email.com",
  "password": "minhasenha123"
}
```

### Atualizar Usuário
```bash
PATCH http://localhost:8080/user/ID_DO_USUARIO
Content-Type: application/json

{
  "email": "novo.email@email.com"
}
```

## 📁 Estrutura do Projeto

```
projeto-barbearia/
├── modules/
│   ├── express.js          # Configuração do servidor Express
│   ├── fs.js              # Operações de arquivo
│   └── http.js            # Módulo HTTP básico
├── src/
│   ├── database/
│   │   └── connect.js     # Conexão com MongoDB
│   ├── models/
│   │   └── user.model.js  # Modelo de usuário
│   └── views/
│       └── index.ejs      # Template EJS
├── .env                   # Variáveis de ambiente (não commitado)
├── .gitignore            # Arquivos ignorados pelo Git
├── index.js              # Arquivo principal
├── package.json          # Dependências e scripts
└── README.md            # Este arquivo
```

## 🚀 Deploy

### Variáveis de Ambiente para Produção
Certifique-se de configurar as seguintes variáveis no seu provedor de hospedagem:

- `MONGODB_USER`
- `MONGODB_PASSWORD`
- `MONGODB_HOST`
- `MONGODB_DBNAME`

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)

## 🆘 Suporte

Se você encontrar algum problema, por favor abra uma [issue](https://github.com/seu-usuario/projeto-barbearia/issues) ou entre em contato.

---

⭐ Não se esqueça de dar uma estrela se este projeto te ajudou!
