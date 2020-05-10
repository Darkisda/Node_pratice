module.exports = (app)=>{
    app.get('/', (request, response)=> {
        app.app.controllers.home.index(app, request, response)
    })
}