const express = require('express');
const next = require('next');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const bodyParser = require('body-parser');
const app =  next({dev})
const handle = app.getRequestHandler();

app.prepare().then(()=>{

    const server = express()
    server.use(bodyParser.json())


    server.get('/api/shows', (req, res) => { 
        return res.end("hello next")
    })

    server.get('/contact', (req, res) => {
        return app.render(req, res, 'contact')
      })

    server.get('*', (req, res) => {
        return handle(req, res)
      })

    server.listen(PORT, err => {
        if(err) throw err;
        console.log(`Ready on ${PORT}`);
    });
})
.catch(ex=>{
    console.error(ex.stack);
});
