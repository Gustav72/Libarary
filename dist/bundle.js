/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//Array for books\nlet myLibrary = [];\nlet i = 0;\nconst form = document.querySelector(\"form\");\n\nfunction Book() {\n  this.title = title;\n  this.author = author;\n  this.pages = pages;\n  this.read = read;\n}\n\nfunction switchStatus(j) {\n  let status = document.getElementById(\"finish\" + j);\n  if (status.innerText == \"yes\") {\n    status.innerText = \"no\";\n    status.style.color = \"red\";\n    myLibrary[j - 1].read = \"no\";\n  } else {\n    status.innerText = \"yes\";\n    status.style.color = \"green\";\n    myLibrary[j - 1].read = \"yes\";\n  }\n}\n\nfunction remove(row) {\n  document.getElementById(row).remove(); //delete from DOM\n  delete myLibrary[row - 1]; //delete from array\n}\n\nfunction addBookToLibrary() {\n  i++;\n\n  form.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n  });\n\n  let newBook = new Book();\n  let title = document.getElementById(\"title\").value;\n  let author = document.getElementById(\"author\").value;\n  let pages = document.getElementById(\"pages\").value;\n  let read = document.querySelector('input[name=\"read\"]:checked').value;\n\n  if (title == \"\" || author == \"\" || pages == \"\" || read == \"\") return;\n\n  newBook.title = title;\n  newBook.author = author;\n  newBook.pages = pages;\n  newBook.read = read;\n\n  myLibrary.push(newBook);\n\n  const table = document.querySelector(\"tbody\");\n\n  const row = document.createElement(\"tr\");\n\n  let cell1 = document.createElement(\"td\");\n  let cell2 = document.createElement(\"td\");\n  let cell3 = document.createElement(\"td\");\n  let cell4 = document.createElement(\"td\");\n  let cell5 = document.createElement(\"td\");\n\n  row.setAttribute(\"id\", i);\n\n  cell5.setAttribute(\"onclick\", \"remove(\" + i + \")\");\n\n  cell4.setAttribute(\"onclick\", \"switchStatus(\" + i + \")\");\n  cell4.setAttribute(\"id\", \"finish\" + i);\n\n  cell1.innerText = newBook.title;\n  cell2.innerText = newBook.author;\n  cell3.innerText = newBook.pages;\n  cell4.innerText = newBook.read;\n  cell5.innerText = \"✖\";\n\n  row.appendChild(cell1);\n  row.appendChild(cell2);\n  row.appendChild(cell3);\n  row.appendChild(cell4);\n  row.appendChild(cell5);\n\n  table.appendChild(row);\n\n  newBook.title = document.getElementById(\"title\").value;\n  newBook.author = document.getElementById(\"author\").value;\n  newBook.pages = document.getElementById(\"pages\").value;\n  newBook.read = document.getElementById(\"read\").value;\n\n  if (read == \"yes\")\n    document.getElementById(\"finish\" + i).style.color = \"green\";\n  else document.getElementById(\"finish\" + i).style.color = \"red\";\n\n  form.reset();\n\n  console.log(read);\n}\n\n//thank you for checking out my code!\n\n\n//# sourceURL=webpack://library/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;