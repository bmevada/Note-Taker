const util = require('util');
const fs = require('fs');
const uuidv = require('uuid');

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
    getNotes({
        return this.read().then((notes) => {
            let parsedNotes;

            // Otherwise, if there are no notes - send back an empty array
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes = [];
        });
    });
};

module.exports = new Store();

class Store {
    read() {
        return
    }
    getNotes()
}

