module.exports.noticias = (app, request, response)=> {
    
    const connection = app.config.dbConnection()
    const noticiasModel = new app.app.models.NoticiasDAO(connection)

    noticiasModel.getNoticias((error, result)=>{
        response.render("noticias/noticias", {noticias : result})
    } )
}

module.exports.noticia = (app, request, response)=> {
    
    const connection = app.config.dbConnection()
    const noticiaModel = new app.app.models.NoticiasDAO(connection)
    
    const id = request.query

    noticiaModel.getNoticia(id, (error, result)=>{
        response.render("noticias/noticia", {noticia : result})
    })
}