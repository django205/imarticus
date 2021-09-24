const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const url = `mongodb+srv://yogesh:yogesh@cluster0.h0itg.mongodb.net/imarticus?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})