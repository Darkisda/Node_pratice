module.exports = (app)=>{

    app.get('/noticias', (require, response)=>{

        const connection = app.config.dbConnection()
        const noticiasModel = app.app.models.noticiasModel

        noticiasModel.getNoticias(connection, (error, result)=>{
            response.render("noticias/noticias", {noticias : result})
        } )

    })
}