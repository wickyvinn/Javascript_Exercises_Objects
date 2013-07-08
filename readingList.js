// Reading List

var library = [ 
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        alreadyRead: true
    },
    {
        title: 'The Grapes of Wrath',
        author: 'John Steinbeck',
        alreadyRead: true
    },
    {
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        alreadyRead: false
    }
];

for (var i = 0; i < library.length; i++) {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].alreadyRead) {
        console.log("You already read " + book);
    } else {
        console.log("You still need to read " + book);
    }
    
}