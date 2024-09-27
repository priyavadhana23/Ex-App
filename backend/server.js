const express = require('express');
const connectDB =require('./db');


const cors = require('cors');  //it is used to acess frontend from different ports(cross orgin request)
const bodyParser =require('body-parser');
 //it is used to convert data from incoming http request to json in backend (we use parsebody  to access the data from the request bcz by default our express cant parse the data frpm the request)
 //basically converting input to machine format
const app = express();

app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());

//mongoose is used to connect mongoDB database 

connectDB;

app.get('/',(req,res,next)=>{
    res.send('WELCOME TO FITNESS APP BACKEND');
});

let exercises = [
    { id: 1, name: 'Running', type: 'Cardio', duration: 30, caloriesBurnt: 300 },
    { id: 2, name: 'Cycling', type: 'Cardio', duration: 45, caloriesBurnt: 500 },
    { id: 3, name: 'Weight Lifting', type: 'Strength', duration: 60, caloriesBurnt: 400 },
];

//getting exercises based on exercise name or type
app.get('/api/exercises', (req, res, next) => { 
    const query = req.query.query;

    if (query) {
        const filteredExercises = exercises.filter((exercise) => {
            return (
                exercise.name.toLowerCase().includes(query.toLowerCase()) ||
                exercise.type.toLowerCase().includes(query.toLowerCase())
            );
        });

        return res.json(filteredExercises);
    } else {
        res.json(exercises);
    }
});

//req.params is place where the given url is stored...and url will be basically string so while 
//checking with id in exercises it is converted in to integer so that it can be easily converted

//getting exercises based on id 
app.get('/api/exercises/:id', (req, res) => {
    const exercise = exercises.find((ex) => ex.id === parseInt(req.params.id));
    if (!exercise) {
        return res.status(404).send('EXERCISE NOT FOUND');
    } else {
        res.json(exercise);
    }
});


//adding new exercises to the list 
app.post('/api/exercises',(req,res,next)=>
{
    const newExercise = {
        id: exercises.length+1,
        name: req.body.name,
        duration: req.body.duration,
        caloriesBurnt: req.body.caloriesBurnt,
        type: req.body.type,
    };
    exercises.push(newExercise);
    res.status(201).json(newExercise);
});

//updating the exercises
app.put('/api/exercises/:id',(req,res,next)=>
{
    const exercise = exercises.find((ex) =>ex.id === parseInt(req.params.id));
    if(!exercise){
        return res.status(404).send("EXERCISE NOT FOUND");
    }

    exercise.name = req.body.name;
    exercise.duration = req.body.duration;
    exercise.caloriesBurnt = req.body.caloriesBurnt;
    exercise.type = req.body.type;
    res.json(exercise);

});

app.delete('/api/exercises/:id',(req,res)=>
{
    const exerciseIndex = exercises.findIndex((ex) => ex.id === parseInt(req.params.id));
    if(exerciseIndex === -1)return res.status(404).send('EXERCISE NOT FOUND');

    const deletedExercise=exercises.splice(exerciseIndex,1);
    res.json(deletedExercise);

});


const PORT = process.env.PORT || 5001;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});




