function animeData(req, res){
    fetch(`https://kitsu.io/api/edge/trending/anime`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
      res.json(data)
    })
 .catch(err => {
        console.log(err);       
    });}

 
    module.exports = {
   
        animeData,
    }