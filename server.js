const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const characters = {
    'spider man':{
        'alias':'Peter Parker',
        'origin':'NYC',
        'age':19,
        'abilities':'webs,strength,crawling',
        'hero': true
    },
    'wolverine':{
        'alias':'Logan',
        'origin':'Canada',
        'age':'unknown',
        'abilities':'claws,regeneration,adamantium skeleton',
        'hero': true
    },
    'magneto':{
        'alias':'Max Eisenhardt',
        'origin':'Germany',
        'age':'unknown',
        'abilities':'Magnetism manipulation',
        'hero': false
    },
    'unknown':{
        'alias':'unknown',
        'origin':'unknown',
        'age':'unknown',
        'abilities':'unknown',
        'hero': 'unknown'
    }
}
//set up get for html file (smurf for backend) 
app.get('/', (request,response) =>{
    response.sendFile(__dirname + '/index.html')
})


//set up get for JSON to return file back
app.get('/api/:name', (request,response)=>{
    const characterName = request.params.name.toLowerCase()
    if( characters[characterName] ){
        response.json(characters[characterName])
    }else {
        response.json(characters['unknown'])
    }
    // response.json(characters)
})


//set up listen
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`this server is runnin on port ${PORT}. Betta go catch it`)
})