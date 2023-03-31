let myLibrary = [];
let body = document.querySelector('body');
let cards= document.getElementById('cards'); 
let removeAction = document.getElementsByClassName('remove');
let readToggle = document.getElementsByClassName('read-btn');
let newCard = document.createElement("div");



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

function makeCards(){
    
    while(cards.hasChildNodes()){
        cards.removeChild(cards.firstChild);
    }

    for(let i=0;i<myLibrary.length;i++){
        let newCard = document.createElement("div");
        let removeButton = document.createElement("button");
        let readButton = document.createElement("button");
        newCard.id= "book"+[i];
        newCard.innerText = `Title: ${myLibrary[i].title} \n \n Author: ${myLibrary[i].author} \n\n Pages: ${myLibrary[i].pages} \n\n Status: ${myLibrary[i].progress}`;
        cards.append(newCard);// gets appeneded to cards div under body
        removeButton.innerHTML="Remove";
        removeButton.className='remove';
        newCard.append(removeButton);
        readButton.innerHTML="Read";
        readButton.className ='read-btn';
        newCard.append(readButton);
    }
    for (let i = 0; i<readToggle.length; i++){
        readToggle[i].addEventListener('click', changeReadStatus);
    }
    for (let i = 0; i<removeAction.length; i++){
        removeAction[i].addEventListener('click',removeBooks); 
    }
}
/*--------------------------------------- pop-up-form------------------------------------------*/ 
let newBookBtn = document.getElementById('newbook');

newBookBtn.addEventListener("click", event => {
    document.querySelector('.popup').classList.add("active")
});

document.querySelector('.popup .close-btn').addEventListener("click", event => {
    document.querySelector('.popup').classList.remove("active")
});
/*--------------------------------------Add-Book-Inputs----------------------------------------*/

let addBookBtn = document.querySelector('#submit')

addBookBtn.addEventListener("click", getInfo);


function getInfo(){
    let title = document.querySelector('#Title').value;
    let author =document.querySelector('#Author').value;
    let pages =document.querySelector('#Pages').value;
    let progress = checkBox();

    addBook(title,author,pages,progress);
    
    makeCards();

    document.querySelector('.popup').classList.remove("active");
    
    resetPrompt();  

};
/*-----------------------------------checkbox-function----------------------------------------*/

function checkBox(){
    if(document.querySelector('#status').checked == true){
        return this.document.querySelector('#status').innerText.value = "Read";
    }else if (document.querySelector('#status').checked == false){ 
        return this.document.querySelector('#status').innerText.value = "Not Read";
    }
};

/*---------------------------------------reset function----------------------------------------*/

function resetPrompt(){
    title=document.querySelector('#Title').value = '';
    author=document.querySelector('#Author').value = '';
    pages=document.querySelector('#Pages').value = '';
    progress=document.querySelector('#status').checked = false;
    
}

function changeReadStatus(){
    for(let i=0;i<readToggle.length;i++){
        if(this == readToggle[i]){
            if(myLibrary[i].progress == "Read"){
                myLibrary[i].progress = "Not Read";   
            } else if (myLibrary[i].progress == "Not Read"){
                myLibrary[i].progress = "Read";
            }
        }
    }
makeCards();
}

function removeBooks(){
    for (let i =0; i<removeAction.length;i++){
        if (this==removeAction[i]){
            myLibrary.splice(i,1);
        }
    }
makeCards();
}