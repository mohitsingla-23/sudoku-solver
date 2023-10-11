const PORT = 8000
const axios = require('axios').default
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(cors())
app.use(express.json())

app.post('/solve', async (req,res) => {
    
    const options = {
        method: 'POST',
        url: 'https://solve-sudoku.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
        },
        data: {
            puzzle: req.body.numbers
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.json(response.data)
    } catch (error) {
        console.error(error);
    }
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))