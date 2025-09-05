const express = require('express');
const UserModel = require('../src/models/user.model');


const app = express();

// Middleware para parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Middleware para debug
app.use((req, res, next) => {
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Content-Type:', req.get('Content-Type'));
    console.log('Body:', req.body);
    next();
});

// Middleware para CORS (se necessário)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/views/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.render('index', { users });
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

app.get('/user', async (req, res) => {
    try {
        const user = await UserModel.find({});

        res.status(200).send((user));
    } catch (error) {
       res.status(500).json({ error: error.message });
    }
});

app.get('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
            res.status(500).json({ error: error.message });
    }
});

app.post('/user', async (req, res) => {
   try {
       const user = await UserModel.create(req.body);
       res.status(201).json(user);
   } catch (error) {
       res.status(500).json({ error: error.message });
    }
});

// PATCH - Atualizar usuário por ID
app.patch('/user/:id', async (req, res) => {
    console.log('=== PATCH REQUEST ===');
    console.log('ID:', req.params.id);
    console.log('Body:', req.body);
    
    try {
        const id = req.params.id;
        
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: 'No data provided for update' });
        }
        
        const user = await UserModel.findByIdAndUpdate(
            id, 
            req.body, 
            { 
                new: true,
                runValidators: true 
            }
        );
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        console.log('Usuário atualizado com sucesso:', user);
        res.status(200).json(user);
    } catch (error) {
        console.error('Erro na atualização:', error);
        res.status(500).json({ error: error.message });
    }
});

// DELETE - Deletar usuário por ID
app.delete('/user/:id', async (req, res) => {
    console.log('=== DELETE REQUEST ===');
    console.log('ID:', req.params.id);
    
    try {
        const id = req.params.id;
        
        const user = await UserModel.findByIdAndDelete(id);
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        console.log('Usuário deletado com sucesso:', user);
        res.status(200).json({ 
            message: 'User deleted successfully', 
            deletedUser: user 
        });
    } catch (error) {
        console.error('Erro na exclusão:', error);
        res.status(500).json({ error: error.message });
    }
});

const port = 8080;
app.listen(port, () => {
    console.log(`Servidor rodando com Express na porta ${port}`);
});