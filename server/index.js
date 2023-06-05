const express = require ("express")
const cors = require ("cors")

const app = express()

const port = 9000

app.use(cors())

let task = [
    {
        tache: "tache1",
        stat: false
    },
    {
        tache: "tache2",
        statut: true
    }
]

app.listen(port, ()=>{console.log(`je suis Mr ${port}`)})
app.get("/", (req,res)=>{res.send('DIMANCHE')})


app.get("/home", (req,res)=>{
    res.send(task)
})

app.get("/addTask/titre/:titre", (req,res)=>{
    const titre = req.params.titre
    task.push({titre: titre, statut:false})
    res.send(task)
})

app.get("/FilterTask", (req,res)=>{
    const statu = req.query.state === "true" ? true : false
    console.log(typeof statu)
    const list = [...task.filter(item => item.statut === statu)]
    res.send(list)
})

//  
app.delete("/Supprimer/:titre", (req,res)=>{
    const supprimer = req.params.titre
    task = [...task.filter(item => item.tache !== supprimer)]
    res.send(task)
})

//l'element est un objet envoyer depuis le front dans body
app.post("/ajouter", (req,res)=>{
    const ajouter = req.body
    console.log(req.body)
    task.push(ajouter)
    res.send(task)
})