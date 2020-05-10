module.exports = (app)=>{

    app.get('/noticias', (request, response)=>{
        app.app.controllers.noticias.noticias(app, request, response)
    })

    app.get('/noticia', (request, response)=>{
        app.app.controllers.noticias.noticia(app, request, response)
    })
}