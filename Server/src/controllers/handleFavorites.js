let myFavorites = [];


function postFav(req, res) {
    const character = req.body;

    myFavorites.push(character)
    res.status(200).json(myFavorites)
}


function deleteFav(req, res) {
    const {id} = req.params;

    const filterd = myFavorites.filter(
        (character) => character.id !== Number(id)
    )
        myFavorites = filterd;
        res.status(200).json(filterd)
}

module.exports = {postFav, deleteFav};