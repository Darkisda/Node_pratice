module.exports.index = (app, request, response)=>{
    
    const connection = app.config.dbConnection()
    const noticiasModel = new app.app.models.NoticiasDAO(connection)

    noticiasModel.get5ultimasNoticias((error, result)=>{
        response.render("home/index", {noticias : result})
    })
}