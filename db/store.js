const util = require('util');
const fs = require('fs');
// const uuidv1 = require('uuid/v1');
// const { v1: uuidv1 } = require('uuid')
const {v4:uuidv4} = require( 'uuid');


// Read and Write File
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Read, Write and Get Notes
class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }
    // If there are notes
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;

            // Otherwise, if there are no notes - send back an empty array
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        });
    }

    addNote(note) {
        const {title, text} =note;
        const newNote= {title, text, id: uuidv4()};
        return this.getNotes()
        .then((notes) =>[...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote)
    }

    removeNote(id) {
        return this.getNotes()
        .filter(n => n !== id)
        // .then((notes) =>[...notes, newNote])
        // .then((updatedNotes) => this.write(updatedNotes))
        // .then(() => res)
    }
    
    
}

module.exports = new Store();

// class Store {
//     read() {
//         return
//     }
//     getNotes()
// }

