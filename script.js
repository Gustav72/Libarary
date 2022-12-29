let myLibrary = [];

let form;

function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary() {
    form = document.querySelector('form').addEventListener('submit', 
    function(event) {
        event.preventDefault()
    });

    let newBook = new Book();
    newBook.title = document.getElementById('title').value
    newBook.author = document.getElementById('author').value
    newBook.pages = document.getElementById('pages').value
    newBook.read = document.getElementById('read').value

    const table = document.querySelector('tbody');
    const row = document.createElement('tr')

    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');
    let cell4 = document.createElement('td');
    let cell5 = document.createElement('td');


    cell1.innerText = newBook.title;
    cell2.innerText = newBook.author;
    cell3.innerText = newBook.pages;
    cell4.innerText = newBook.read;
    cell5.innerText = '✖';

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);

    table.appendChild(row);

    console.log('hi');

}