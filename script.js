//Array for books
let myLibrary = [];
let i = 0;
const form = document.querySelector("form");

function Book() {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function switchStatus(j) {
  let status = document.getElementById("finish" + j);
  if (status.innerText == "yes") {
    status.innerText = "no";
    status.style.color = "red";
    myLibrary[j - 1].read = "no";
  } else {
    status.innerText = "yes";
    status.style.color = "green";
    myLibrary[j - 1].read = "yes";
  }
}

function remove(row) {
  document.getElementById(row).remove(); //delete from DOM
  delete myLibrary[row - 1]; //delete from array
}

function addBookToLibrary() {
  i++;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  let newBook = new Book();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.querySelector('input[name="read"]:checked').value;

  if (title == "" || author == "" || pages == "" || read == "") return;

  newBook.title = title;
  newBook.author = author;
  newBook.pages = pages;
  newBook.read = read;

  myLibrary.push(newBook);

  const table = document.querySelector("tbody");

  const row = document.createElement("tr");

  let cell1 = document.createElement("td");
  let cell2 = document.createElement("td");
  let cell3 = document.createElement("td");
  let cell4 = document.createElement("td");
  let cell5 = document.createElement("td");

  row.setAttribute("id", i);

  cell5.setAttribute("onclick", "remove(" + i + ")");

  cell4.setAttribute("onclick", "switchStatus(" + i + ")");
  cell4.setAttribute("id", "finish" + i);

  cell1.innerText = newBook.title;
  cell2.innerText = newBook.author;
  cell3.innerText = newBook.pages;
  cell4.innerText = newBook.read;
  cell5.innerText = "✖";

  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  row.appendChild(cell5);

  table.appendChild(row);

  newBook.title = document.getElementById("title").value;
  newBook.author = document.getElementById("author").value;
  newBook.pages = document.getElementById("pages").value;
  newBook.read = document.getElementById("read").value;

  if (read == "yes")
    document.getElementById("finish" + i).style.color = "green";
  else document.getElementById("finish" + i).style.color = "red";

  form.reset();

  console.log(read);
}

//thank you for checking out my code!
