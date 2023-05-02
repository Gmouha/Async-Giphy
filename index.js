require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.nldvceH1HQMsYL0ZBMbMxhTHKlvTyeV7)
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en`

async function getImage(query){
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=nldvceH1HQMsYL0ZBMbMxhTHKlvTyeV7&q=dog&limit=25&offset=0&rating=g&lang=en")
    const data = await response.json()
}
