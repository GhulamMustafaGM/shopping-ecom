const app = require('./app')

app.listen(process.env.PORT, () => {
    console.log(`server started on PORT: ${process.env.PORT}`)
})