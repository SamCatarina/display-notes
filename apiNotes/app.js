const express = require('express')
const mongoose = require('mongoose')
const { Note } = require('./models')

const cors = require("cors");

const corsOptions = {
  origin: "http://127.0.0.1:5173",
};


const app = express()

app.use(express.json());

app.use(cors(corsOptions));



//ROTAS

app.get('/get', async (req, res) => {
    const allNotes = await Note.find();
    return res.status(200).json(allNotes)
})

app.post('/post', async (req, res) => {
    const newNote = new Note({...req.body})
    const saved = await newNote.save();
    return res.status(201).json(saved)
})

app.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const delPost = await Note.findByIdAndDelete(id);
    return res.status(200).json(delPost)
})




//initializing server
const start = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/notesdb");
        app.listen(3000, () => {console.log("server runing")});
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

start()

