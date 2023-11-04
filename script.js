const modal = document.getElementById("modal");
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("closeBtn");
const bookForm = document.getElementById("form");

const myLibrary = [];

function Book(name, author, pages, status) {
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.status = status;
}

function addBookToLibrary(name, author, pages, status) {
	const book = new Book(name, author, pages, status);
	myLibrary.push(book);
}

addBookToLibrary("fdj", "dfsjl", 302, true);
addBookToLibrary("ad", "dsfjl", 3090, false);

addBtn.addEventListener("click", () => {
	modal.showModal();
});

closeBtn.addEventListener("click", () => {
	modal.close();
});

bookForm.addEventListener("submit", function () {
	const bookName = document.getElementById("book").value;
	const authorName = document.getElementById("authorName").value;
	const pages = document.getElementById("pages").value;
	const status = document.getElementById("status").checked;

	addBookToLibrary(bookName, authorName, pages, status);
	bookForm.reset();
});
