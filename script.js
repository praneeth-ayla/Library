const modal = document.getElementById("modal");
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("closeBtn");
const bookForm = document.getElementById("form");
const cards = document.getElementById("cards");

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
addBookToLibrary("ad", "dsfjl", 3090, false);
addBookToLibrary("ad", "dsfjl", 3090, false);
addBookToLibrary("ad", "dsfjl", 3090, false);
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
	cardAdder();
});
cardAdder();

function cardAdder() {
	// cards.textContent = "";

	myLibrary.forEach((book) => {
		const newCard = document.createElement("div");
		newCard.setAttribute("id", "card");
		const bookDiv = document.createElement("div");
		bookDiv.setAttribute("id", "bookDiv");
		const authorDiv = document.createElement("div");
		authorDiv.setAttribute("id", "authorDiv");
		const pagesDiv = document.createElement("div");
		pagesDiv.setAttribute("id", "pagesDiv");
		const statusDiv = document.createElement("div");
		statusDiv.setAttribute("id", "statusDiv");

		bookDiv.textContent = book.name;
		authorDiv.textContent = book.author;
		pagesDiv.textContent = book.pages;
		statusDiv.textContent = book.status;
		newCard.appendChild(bookDiv);
		newCard.appendChild(authorDiv);
		newCard.appendChild(pagesDiv);
		newCard.appendChild(statusDiv);
		cards.appendChild(newCard);
	});
}
