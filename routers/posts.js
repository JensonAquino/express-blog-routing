const express = require("express")
const router = express.Router();
const posts = require("../data")


//index - operzione dove leggiamo tutti i dati = read
router.get("/", (req, res) => {  
    const result = {
        post: posts,
        totale: posts.length
    }
    res.json(result);
});

//show - operzione di lettura dei dettagli di un solo elemento = read
//:id e una sintassi variabbile es: posts/2
router.get("/:id", (req, res) => {
    const postsID = req.params.id;//richiesta per il n.ID
    res.json("qui prelevo i dettagli di un singolo post " + "numero " + postsID)
})

//create - operzione che crea un nuovo elemento nei dati
router.post("/", (req, res) => {
    res.send("qui aggiungo un nuovo post")
});

//update - operzione che crea un nuovo elemento nei dati(sovrascrive i dati)
router.put("/:id", (req, res) => {
    const postsID = req.params.id;//richiesta per il n.ID
    res.send("qui aggiorno tutti i dati di un post con id " + "numero " + postsID)
})
//modify
router.patch("/:id", (req, res) => {
    const postsID = req.params.id;//richiesta per il n.ID
    res.send("qui aggiorno solo alcuni dati di un post " + "numero " + postsID)
})

//destroy 
router.delete("/:id", (req, res) => {
    const postsID = req.params.id;//richiesta per il n.ID
    res.send("qui cancello il post " + "numero " + postsID)
})

module.exports = router