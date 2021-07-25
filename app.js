'use strict'
let globArr=[];
let total =0;
let Books = function(name,price){

    this.name=name;
    this.price=price;
    this.pages=this.randomNum();
    globArr.push(this);
}
Books.prototype.randomNum = function(){

   return Math.floor(Math.random()*501)
}

// console.log(Books.prototype.randomNum());

let formElement = document.getElementById('main-form');
let tableElement = document.getElementById('table');
let buttonElement = document.getElementById('button');

function headerRender(){

    let headerTr = document.createElement('tr');
    tableElement.appendChild(headerTr);

    let nameTh = document.createElement('th');
    headerTr.append(nameTh);
    nameTh.textContent = 'Name'
    let pageTh = document.createElement('th')
    headerTr.appendChild(pageTh);
    pageTh.textContent= 'Books Pages'
    let priceTh = document.createElement('th')
    headerTr.appendChild(priceTh);
    priceTh.textContent = 'Price'



}
headerRender();


Books.prototype.tableRender = function(){

    for (let i = 0; i < globArr.length; i++) {
    
        
    

let booksTr = document.createElement('tr');
tableElement.appendChild(booksTr);

let nameCell = document.createElement('td');
booksTr.appendChild(nameCell);
nameCell.textContent= globArr[i].name;

let pageCell = document.createElement('td');
booksTr.appendChild(pageCell);
pageCell.textContent = globArr[i].pages;

let priceCell = document.createElement('td');
booksTr.appendChild(priceCell);
priceCell.textContent = globArr[i].price;

total+= parseInt(globArr[i].price)
console.log(total);



}
}


formElement.addEventListener('submit',handleClick)

function handleClick(event){
    event.preventDefault();
let subName = document.getElementById('book-name-input').value;
let subPrice = document.getElementById('price-list').value;

new Books (subName,subPrice);

tableElement.textContent='';
// totalElement.textContent='';
headerRender();
// Books.prototype.totalRender();
Books.prototype.tableRender();





localStorage.setItem('books',JSON.stringify(globArr));
formElement.reset();

}

let data = localStorage.getItem('books');
console.log(data);

let parsedData = JSON.parse(data);
console.log(parsedData);
if (parsedData) {
    


for (let i = 0; i < parsedData.length; i++) {

    globArr.push(parsedData[i])
}
}
Books.prototype.tableRender();


Books.prototype.totalRender  = function () {

    let leftElement=document.getElementById('right');
    let totalElement = document.createElement('p');
    leftElement.appendChild(totalElement);
    totalElement.textContent= 'Total = '+total;

   

    
}
// Books.prototype.totalRender();
