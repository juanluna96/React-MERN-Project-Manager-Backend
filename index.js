const express = require('express');
const cors = require('cors');

const conectarDB = require('./config/db');

// Crear el servidor

const app = express();

// Conectar a la bd
conectarDB();

// Habilitar cors
app.use(cors({ credentials: true, origin: true }));

//habilitar cors
app.options("*", cors());

// Habilitar express.json
app.use(express.json({ extended: true }));

//PUERTO DE LA APP
const port = process.env.PORT || 4000;


// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));


// Definir la pagina principal
app.get('/', (req, res) => {
    res.send('Hola mundo')
})

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})