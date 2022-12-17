
const controllers = {
    index : (req, res)=>{
        res.render("index")
    },
    contactus: (req,res)=>{
        res.render("contact")
    },
    ourmision: (req,res)=>{
        res.render("mision")
    },
    whoweare :(req, res)=>{
        res.render("quienessomos")
    },
    ourservice: (req,res)=>{
        res.render("nuestroservicio")
    }
}
module.exports = controllers
