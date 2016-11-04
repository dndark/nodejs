const os = require('os')
const fs = require('fs')
const _  = require('lodash')
const yargs = require("yargs").argv;

const notes = require("./note")

console.log("loading app.js")

var command = yargs._[0].toLowerCase()

if (command === "add"){
    var note = notes.addnote(yargs.title , yargs.content)
    if (note){
        notes.printNote(note);
    }else{
        console.log(`note ${yargs.title} is already exist`);
    }
}
else if (command === "list") {
    var note = notes.list()
    note.forEach(function(element) {
        notes.printNote(element)
    });
}
else if (command === "read") {
    var note = notes.read(yargs.title);
    (note.length > 0 ) ? notes.printNote(note[0]) : console.log(`${yargs.title} not find`);
}
else if (command === "remove") {
    var notes_remove = notes.remove(yargs.title)
    var message = notes_remove ? `${yargs.title} is removed` : `title not find`;
    console.log(message);
}else {
    console.log("command not recognize")
}
