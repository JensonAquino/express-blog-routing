const express = require("express");
const app = express()
const port = 3002;

const posts = require("./data")

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.json({
        message: "Server del mio blog"
    })
});

//index - operzione dove leggiamo tutti i dati = read
app.get("/posts", (req, res) => {  
    const result = {
        post: posts,
        totale: posts.length
    }
    res.json(result);
});

//show - operzione di lettura dei dettagli di un solo elemento = read
//:id e una sintassi variabbile es: posts/2
app.get("/posts/:id", (req, res) => {
    const postsID = req.params.id;//richiesta per il n.ID
    res.json("qui prelevo i dettagli di un singolo post " + "numero " + postsID)
})

//create - operzione che crea un nuovo elemento nei dati
app.post("/posts", (req, res) => {
    res.send("qui aggiungo un nuovo post")
});

//update - operzione che crea un nuovo elemento nei dati(sovrascrive i dati)
app.put("/posts/:id", (req, res) => {
    const postsID = req.params.id;//richiesta per il n.ID
    res.send("qui aggiorno tutti i dati di un post con id " + "numero " + postsID)
})

app.patch("/posts/:id", (req, res) => {
    const postsID = req.params.id;//richiesta per il n.ID
    res.send("qui aggiorno solo alcuni dati di un post " + "numero " + postsID)
})

//delate - cancello
app.delete("/posts/:id", (req, res) => {
    const postsID = req.params.id;//richiesta per il n.ID
    res.send("qui cancello il post " + "numero " + postsID)
})


app.listen(port, () => {
    console.log("listener on");
    
})