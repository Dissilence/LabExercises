const axios=require('axios')
async function make_api_call(url) {
    console.log("helperAPI GET "+url)
    let response= await axios.get(url)
    let body=await response.data
    console.log(body)
    return body
}

module.exports = {make_api_call, make_api_post}