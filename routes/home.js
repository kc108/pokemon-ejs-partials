///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const axios = require("axios")

///////////////////////////////
// Router Specific Middleware
////////////////////////////////

///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", async (req, res) => {

    // make api call, fetch the data with axios
    const response = await axios("https://dummydata.netlify.app/pokedex.json")
    // for learning: this shows where the '.data' comes from
    console.log(response)
    // get specifically the hero data from the results
    const allPokemon = response.data.pokemon
    // for learning: this shows what is stored 
    console.log(allPokemon)

    // send hero data to our rendered view
    res.render("home", {
        allPokemon
    })
})

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router