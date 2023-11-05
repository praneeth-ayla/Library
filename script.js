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

addBookToLibrary("Rich Dad Poor Dad", " Robert Kiyosaki ", 336, true);
addBookToLibrary("Think and Grow Rich", "Napoleon Hill", 238, false);
addBookToLibrary("Atomic Habits", "James Clear", 285, true);
addBookToLibrary(
	"The 7 Habits of Highly Effective People",
	"Stephen R. Covey",
	381,
	true
);
addBookToLibrary(
	"The Power of your subconscious mind",
	"Joseph Murphy",
	312,
	true
);

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
	cards.textContent = "";

	myLibrary.forEach((book, index) => {
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
			myLibrary[index].status = !myLibrary[index].status;
			cardAdder();
		});
		deleteDiv.addEventListener("click", () => {
			myLibrary.splice(index, 1);
			cardAdder();
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
