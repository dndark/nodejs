console.log("loading note");
const os = require('os');
const fs = require('fs');


var fetchNote = () => {
    try{
        var noteString = fs.readFileSync('notes-data.json')
        return  JSON.parse(noteString);
    }catch(e){
        return [];
    };
};

var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}


var addnote = (title, content) => {
    var notes = fetchNote();
    var note = {title, content};

    var duplicate = notes.filter((note) => note.title === title);
    if (duplicate.length === 0) {
        notes.push(note);
        saveNote(notes);
        return note;
    }
}

var printNote = (element) => {
    console.log(`title is ${element.title}`);
    console.log("----");
    console.log(`contents is ${element.content}`);
    console.log("------")
}

var list = () => {
    return fetchNote();
};

var read = (title) => {
    var notes = fetchNote();
    var filternote = notes.filter((note) => note.title === title);
    return filternote;
};

var remove = (title) => {
    var notes = fetchNote();
    var filternote = notes.filter((note) => note.title !== title);
    saveNote(filternote);
    return filternote.length !== notes.length;
};
module.exports = {
    addnote,
    list,
    read,
    remove,
    printNote

};
