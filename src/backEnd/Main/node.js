var express = require('express');
var app = express();
var mysql = require('mysql');
var cors = require('cors');
var notes= require('../notes');
var archive= require('../archive');
var trash = require('../trash');

app.use(express.json());
app.use(cors());

// configure mysql-start
const connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'FrontEnd@317',
    database:'keep'
})
// configure mysql-finish

// notes-start
app.get('/notesGet',(req,res)=>{
    notes.getValue(req,res,connect)
})

app.post('/notesAdd',(req,res)=>{
    notes.addValue(req,res,connect);
})

app.post('/notesPost',(req,res)=>{
    notes.notesPost(req,res,connect);
})

app.put('/notesColor',(req,res)=>{
    notes.colorValue(req,res,connect)
})

app.put('/notesPin',(req,res)=>{
    notes.pinValue(req,res,connect)
})

app.put('/notesEdit',(req,res)=>{
    notes.editValue(req,res,connect)
})

app.delete('/notesToArchive',(req,res)=>{
    notes.notesToArchive(req,res,connect)
})

app.delete('/notesToTrash',(req,res)=>{
    notes.notesToTrash(req,res,connect)
})
// notes-finish
// archive-start

app.get('/archiveGet',(req,res)=>{
    archive.archiveGet(req,res,connect)
})

app.post('/archivePost',(req,res)=>{
    archive.archivePost(req,res,connect)
})

app.put('/archiveColor',(req,res)=>{
    archive.archiveColor(req,res,connect)
})

app.delete('/archiveToNotes',(req,res)=>{
    archive.archiveToNotes(req,res,connect)
})

app.delete('/archiveToTrash',(req,res)=>{
    archive.archiveToTrash(req,res,connect)
})
app.put('/archiveToNotes',(req,res)=>{
    archive.archivePin(req,res,connect)
})

app.put('/archiveEdit',(req,res)=>{
    archive.archiveEdit(req,res,connect)
})
// archive-finish
// trash-start
app.get('/trashGet',(req,res)=>{
    trash.trashGet(req,res,connect);
})

app.post('/trashPost',(req,res)=>{
    trash.trashPost(req,res,connect)
})

app.put('/trashColor',(req,res)=>{
    trash.trashColor(req,res,connect)
})

app.delete('/trashToArchive',(req,res)=>{
    trash.trashToArchive(req,res,connect)
})

app.delete('/trashItem',(req,res)=>{
    trash.trashItem(req,res,connect)
})

app.put('/trashPin',(req,res)=>{
    trash.trashPin(req,res,connect)
})

app.put('/trashEdit',(req,res)=>{
    trash.trashEdit(req,res,connect)
})
// trash-finish
app.listen(3000,()=>{
    console.log('running...')
})