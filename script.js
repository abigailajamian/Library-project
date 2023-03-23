let myLibrary = [];

function Book(title,author,pages,progress){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.progress = progress
 }

function addBook(title,author,pages,progress){
    let bookToAdd = new Book(title,author,pages,progress);
    myLibrary.push(bookToAdd);
}


addBook("The Hobbit","J.R.R. Tolkien",295, "not");
addBook("The Hobbit","J.R.R. Tolkien",295, "not");
addBook("The Hobbit","J.R.R. Tolkien",295, "not");
//console.log(myLibrary[0].title); //outputs "The Hobbit"

let body = document.querySelector('body')
let cards= document.getElementById('cards');

function makeCards(){
    for(let i=0;i<myLibrary.length;i++){
        let newCard = document.createElement("div");
        newCard.id= "book"+[i];
        newCard.innerHTML = myLibrary[i].title +myLibrary[i].author + myLibrary[i].pages + myLibrary[i].progress;
        cards.append(newCard);
    }
}
//makeCards()

let newBookBtn = document.getElementById('newbook');
newBookBtn.addEventListener('click',()=>{
    let form = document.getElementById('data-entry');
    form.style.display = 'block';
})

document.querySelector('#newbook').addEventListener("click", event => 
    document.querySelector('.popup').classList.add("active")
);

document.querySelector('.popup .close-btn').addEventListener("click", event => 
    document.querySelector('.popup').classList.remove("active")
);