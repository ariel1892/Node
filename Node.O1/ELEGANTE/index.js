const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.get('/check', (req, res) => {
    const nombre = req.query.nombre.toLowerCase();
    const resultado = nombre.charAt(0) === 'a' && nombre.charAt(nombre.length - 1) === 'a';
    res.send(resultado.toString());
});

// Iniciar servidor
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});