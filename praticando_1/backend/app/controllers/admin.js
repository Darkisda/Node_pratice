module.exports.formulario_inclusao_noticia = (app, request, response)=> {
    response.render("admin/form_add_noticia", {validacao:{}, noticia:{}})
}

module.exports.noticias_salvar = (app, request, response)=> {
    const noticia = request.body
        
    request.assert('titulo','Titulo Obrigatório').notEmpty()
    request.assert('resumo','Resumo Obrigatório').notEmpty()
    request.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100)
    request.assert('autor','Autor Obrigatório').notEmpty()
    request.assert('noticia','Noticia Obrigatória').notEmpty()
    request.assert('data_noticia','Data Obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'})

    const errors = request.validationErrors()

    console.log(errors)

    if(errors) {
        response.render("admin/form_add_noticia", {validacao : errors, noticia: noticia})
        return
    }

    const connection = app.config.dbConnection()
    const noticiasModel = new app.app.models.NoticiasDAO(connection)


    noticiasModel.salvarNoticia(noticia, (error, result)=>{
        response.redirect('/noticias')
    } )
}