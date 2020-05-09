module.exports = ()=>{
    
    this.getNoticias = (connection, callback)=>{
        connection.query('select * from noticias', callback)
    }

    this.getNoticia = (connection, callback)=> {
        connection.query('select * from noticias where id = 2', callback)
    }

    this.salvarNoticia = (noticia, connection, callback)=>{
        connection.query('insert into noticias set ? ', noticia, callback)
    }

    return this
}