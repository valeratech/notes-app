const chalk = require('chalk')
const yargs = require('yargs')
const getNotes= require('./notes.js')

// Customize yargs version
console.log(yargs.version('1.1.0'))

// Create add command
yargs.command({
    // command:  string (or array of strings) that executes this command when given on the command line, first string may contain positional args
    command: 'add',
    // describe: string used as the description for the command in help text, use false for a hidden command
    describe: 'Add a new note',
    // builder: object declaring the options the command accepts, or a function accepting and returning a yargs instance
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of text',
            demandOption: true,
            type: 'string'
        }
    },
    // The parsed positional arguments will be populated and are passed as parameter to the handler function.
    handler: function (argv) {
        console.log(`Adding a note!`)
        console.log(`Title: ${argv.title}`)
        console.log(`Body: ${argv.body}`)
        // do something with argv
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function (argv) {
        console.log('Reading a note!')
    }
})

yargs.parse()