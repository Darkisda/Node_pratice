module.exports = (app)=>{
    app.get('/', (require, response)=> {
        response.render("home/index")
    })
}