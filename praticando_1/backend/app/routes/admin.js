module.exports = (app)=>{
    app.get('/formulario_inclusao_noticia', (require, response)=> {
        response.render("admin/form_add_noticia")
    })

    app.post('/noticias/salvar', (require, response)=> {
        const noticia = require.body
        
        const connection = app.config.dbConnection()
        const noticiasModel = app.app.models.noticiasModel


        noticiasModel.salvarNoticia(noticia, connection, (error, result)=>{
            response.redirect('/noticias')
        } )
    })
}