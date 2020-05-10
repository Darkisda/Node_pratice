module.exports = (app)=>{
    app.get('/formulario_inclusao_noticia', (request, response)=> {
        app.app.controllers.admin.formulario_inclusao_noticia(app, request, response)
    })

    app.post('/noticias/salvar', (request, response)=> {
        app.app.controllers.admin.noticias_salvar(app, request, response)
    })
}