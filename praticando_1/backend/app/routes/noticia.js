module.exports = (app)=>{

    app.get('/noticia', (require, response)=>{

        const connection = app.config.dbConnection()
        const noticiaModel = app.app.models.noticiasModel

        noticiaModel.getNoticia(connection, (error, result)=>{
            response.render("noticias/noticia", {noticia : result})
        })
    })
}