const express = require('express')
const app = express()
const PORT = 8000

const roommates = {
    'savi':{
    'age': 34,
    'birthName':'Saviour Dagadu',
    'birthLocation': 'Accra, Ghana'
    },
    'lawerh':{
        'age': 37,
        'birthName':'Enoch Lawerh Akafo',
        'birthLocation': 'Ada, Ghana'
        },
    'babylon':{
    'age': 36,
    'birthName':'Godwin Asante',
    'birthLocation': 'Moree, Ghana'
    },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:roommatesName', (request,response)=>{
    const roommatesNames = request.params.roommatesName.toLowerCase()
    if(roommates[roommatesNames]){
        response.json(roommates[roommatesNames])
    }else{
        response.json(roommates['babylon'] )
    }
    
    //response.json(roommates)
})

app.listen(PORT, ()=>{
    console.log(`The sever is runing on port ${PORT}! You better go catch it!`)
})