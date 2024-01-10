const http = require('http');

//Esto ye lo que nos trae los datos
const data = require('./data');

const server = http.createServer((req, res) => {

    //Esto indica que es un HTML
    res.writeHead(200, { 'Content-Type': 'text/html' }); 

    const html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.title}</title>
        </head>
        <body>
            <h1>${data.title}</h1>
            <h2>${data.subtitle}</h2>
            <p>${data.description}</p>

            <img src ="https://media.tenor.com/2l4-h42qnmcAAAAi/toothless-dancing-toothless.gif" alt="Desdentao bailando">
            <p>Mira Desdentao que bien baila con la música de ciudad Fayenza de pokemon blanco y negro</p>
            <audio controls autoplay>
                <source src="https://dl.vgmdownloads.com/soundtracks/pokemon-black-and-white-super-music-collection/xaulleweqx/2-02.%20Driftveil%20City.mp3" type="audio/mpeg">
            </audio>
        </body>
        </html>
    `;

    //Hay que enviar la respuesta HTML
    res.end(html)

});

server.listen(0, () => {
    console.log(
        `Server listening on port http://localhost:${server.address().port}`
    );
});