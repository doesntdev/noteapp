const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
	describe: 'Title of note.',
	alias: 't',
	demand: true
};
const bodyOptions = {
	describe: 'The body of your note.',
	alias: 'b',
	demand: true
}

const argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title: titleOptions
	})
	.command('remove', 'Remove a note', {
		title: titleOptions
		})
	.help()
	.argv;

const notes = require('./notes.js');

var command = argv._[0];

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note Created');
		notes.logNote(note);
	} else {
		console.log('Note Title Taken')
	}
}	else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));
}	else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log('note found');
		notes.logNote(note);
	} else {
		console.log('note not found');
	}
}	else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note Not Found';
	console.log(message);
}	else {
	console.log('Command not recognized.');
}