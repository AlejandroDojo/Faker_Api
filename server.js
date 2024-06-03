const express = require("express");
const app = express();
const port = 8000;
const data = require('./data.js');


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Nuevo usuario

app.get("/api/users/new", (req, res) => {
    let user = new data.Usuario();

    res.status(200).json({
        id: user._id,
        nombre: user.firstName,
        apellido: user.lastName,
        email: user.email,
        password: user.password,
        telefono: user.telefono
    });
});

// Nueva empresa
app.get("/api/companies/new", (req, res) => {
    let comp = new data.Empresa();

    res.status(200).json({
        id: comp._id,
        nombre: comp.name,
        calle: comp.location.street,
        ciudad: comp.location.city,
        estado: comp.location.state,
        zipCode: comp.location.zipCode,
        pais: comp.location.country
    });
});

app.get("/api/users/company", (req, res) => {
    let user = new data.Usuario();
    let comp = new data.Empresa();

    res.status(200).json({
        User: {
            id: user._id,
            nombre: user.firstName,
            apellido: user.lastName,
            email: user.email,
            password: user.password,
            telefono: user.telefono
        }, 
        Company : {
            id: comp._id,
            nombre: comp.name,
            calle: comp.location.street,
            ciudad: comp.location.city,
            estado: comp.location.state,
            zipCode: comp.location.zipCode,
            pais: comp.location.country
        }
    });
});
app.listen( port, () => console.log(`Listening on port: ${port}`) );