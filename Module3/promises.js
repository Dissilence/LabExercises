function produceSong(resolve, reject) 
{
    const artists = ['Taylor Swift', 'Beyonce', 'Drake', 'Ed Sheeran', 'Rihanna', 'The Weeknd', 'Harry Styles']
    const randomArtist = Math.floor(Math.random() * artists.length) //random number corresponding to one of the above artists

    const songs = ['Unstoppable', 'Numb Little Bug', 'About Damn Time', 'Music For a Sushi Restaurant', 'Anti-Hero', 'Glimpse of Us']
    const randomSong = Math.floor(Math.random() * songs.length) //random number corresponding to one of the above songs

    const randomOutcome = Math.round(Math.random()) //returns either 0 or 1 randomly for failure (0) or success (1)

    let successResult = artists[randomArtist] + ' has just released their newest song called ' + songs[randomSong]
    let failResult = artists[randomArtist] + ' has no new songs'

    setTimeout(() => randomOutcome ? resolve(successResult) : reject(failResult), 1000)

    //a longhand version of the above setTimeout, without arrow functions or conditional statements:
    //setTimeout(function() {
    //    if (randomOutcome == 1) resolve(successResult) //calls the resolve callback to indicate successful promise resolution, native to promise producer functions
    //    else reject(failResult) //calls the reject callback to indicate failed promise resolution, native to promise producer functions
    //}, 1000)
}

let songPromise = new Promise(produceSong)

songPromise.then(
    null,
    failMsg => console.error(`Failture #2: sorry fans, ${failMsg}`)
)
songPromise
.then(successMsg => console.log(`Success #4: ${successMsg}`))
.catch(failMsg => console.error(`Failure #4: ${failMsg}`))

songPromise
    .then(successMsg => console.log(`Success #4: ${successMsg}`))
    .catch(failMsg => console.error(`Failure #4: ${failMsg}`))
    .finally(() => console.log('Song production now finalised'))