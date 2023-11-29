const modal = document.getElementById("modal");
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("closeBtn");
const bookForm = document.getElementById("form");
const cards = document.getElementById("cards");

const myLibrary = [];

class Book {
	constructor(_name, _author, _pages, _status) {
		this.name = _name;
		this.author = _author;
		this.pages = _pages;
		this.status = _status;
	}
}
class Library {
	constructor() {
		this.myLibrary = [];
	}

	addBookToLibrary(_name, _author, _pages, _status) {
		const book = new Book(_name, _author, _pages, _status);
		this.myLibrary.push(book);
	}

	renderLibrary() {
		cards.textContent = "";

		this.myLibrary.forEach((book, index) => {
			const newCard = document.createElement("div");
			newCard.setAttribute("id", "card");
			const bookDiv = document.createElement("div");
			bookDiv.setAttribute("id", "bookDiv");
			const authorDiv = document.createElement("div");
			authorDiv.setAttribute("id", "authorDiv");
			const pagesDiv = document.createElement("div");
			pagesDiv.setAttribute("id", "pagesDiv");
			const statusText = document.createElement("div");
			statusText.setAttribute("id", "statusText");
			const statusDiv = document.createElement("button");
			statusDiv.setAttribute("id", "statusDiv");
			const deleteDiv = document.createElement("button");
			deleteDiv.setAttribute("id", "deleteDiv");

			bookDiv.textContent = book.name;
			authorDiv.textContent = `By: ${book.author}`;
			pagesDiv.textContent = `Pages: ${book.pages}`;
			statusText.textContent = "Have you read the book yet?";
			statusDiv.textContent = `${book.status ? "Yes" : "No"}`;
			statusDiv.style.backgroundColor = ` ${
				book.status ? "lightblue" : "rgb(245, 176, 149)"
			}`;
			deleteDiv.textContent = "DELETE";

			statusDiv.addEventListener("click", () => {
				this.myLibrary[index].status = !this.myLibrary[index].status;
				this.renderLibrary();
			});
			deleteDiv.addEventListener("click", () => {
				this.myLibrary.splice(index, 1);
				this.renderLibrary();
			});

			newCard.appendChild(bookDiv);
			newCard.appendChild(authorDiv);
			newCard.appendChild(pagesDiv);
			newCard.appendChild(statusText);
			newCard.appendChild(statusDiv);
			newCard.appendChild(deleteDiv);
			cards.appendChild(newCard);
		});
	}
}

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

	library.addBookToLibrary(bookName, authorName, pages, status);
	bookForm.reset();
	library.renderLibrary();
});

const library = new Library();
library.addBookToLibrary("Rich Dad Poor Dad", " Robert Kiyosaki ", 336, true);
library.addBookToLibrary("Think and Grow Rich", "Napoleon Hill", 238, false);
library.addBookToLibrary("Atomic Habits", "James Clear", 285, true);
library.addBookToLibrary(
	"The 7 Habits of Highly Effective People",
	"Stephen R. Covey",
	381,
	true
);
library.addBookToLibrary(
	"The Power of your subconscious mind",
	"Joseph Murphy",
	312,
	true
);
library.renderLibrary();
