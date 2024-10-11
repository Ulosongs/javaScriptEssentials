let books = [];

function addBook(index) {
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const bookDescript= document.getElementById("bookDescription").value;
    const pages = document.getElementById("pagesNumber").value;

    if (bookName && authorName && bookDescript && !isNaN(pages)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescript,
            pagesNumber: pages
        };

        if (index == undefined){
            books.push(book);
        } else {
            books.splice(index,1,book)
            button.innerHTML = "Add Book"
            button.setAttribute("onclick", "addBook()");
        }
        

        showbooks();

        clearInputs();

    } else {
        alert("Please fill all the fields")
    }
}

function showbooks() {
    let display = document.getElementById("books");

    display.innerHTML = books.map((book, index) => 
        `<h1>#Book: ${index+1}</h1>
        <p><strong>Book Name:</strong>${book.name}</p>
        <p><strong>Author Name:</strong>${book.authorName}</p>
        <p><strong>Book Description:</strong>${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong>${book.pagesNumber} mins</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">delete</button>`
    ).join("");
}

function clearInputs() {
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("bookDescription").value = "";
    document.getElementById("pagesNumber").value = "";
}

function deleteBook(index) {
    books.splice(index,1);

    showbooks();
}

function editbook(index) {
    let button = document.getElementById("button");

    button.innerHTML = "Complete edit"
    button.setAttribute("onclick", `addBook(${index})`);

    document.getElementById("bookName").value = books[index].name;
    document.getElementById("authorName").value = books[index].authorName;
    document.getElementById("bookDescription").value = books[index].bookDescription;
    document.getElementById("pagesNumber").value = books[index].pagesNumber;
}