const express = require("express")
const app = express();
const mainRoutes = require("./routes/mainRoutes")
const methodOverride = require("method-override")


app.use(express.static("public"))
const { appendFile } = require("fs")
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride("_method"))
app.set("view engine", "ejs")
app.set("views", "./src/views")


app.listen(3000, ()=>{
 console.log("HOLA")   
})

app.use("/", mainRoutes)
app.use((req, res, next) => {
    res.status(404).render("not-found")
    next()
})