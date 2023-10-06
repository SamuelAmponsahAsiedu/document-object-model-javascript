// method to access the html elements inside JavaScript
const para = document.getElementById('para');
const heading = document.getElementsByClassName('heading1');
const allPara  = document.getElementsByTagName('p');
const cardHeading = document.querySelector('.card .heading1')
const cardsHeading = document.querySelectorAll('.card .heading1')

// for (let i=0; i<card.length; i++){
//     console.log(card[i].getElementsByClassName('heading1'));
// }



console.log(para);
console.log(heading[0]);
console.log(heading);
console.log(allPara);
console.log(cardHeading);

//properties

// para.innerHTML = "this is my first paragraph in JavaScript";
//or because it contains only text you can use
para.innerText = " this is my firat paragraph in JavaScript";

//program to show and hide a card
// make show and hider card program

const button =document.getElementById('showHideButton');
const container = document.getElementsByClassName('container')[0];

// button.addEventListener('click', () =>{
//     if(container.style.display == 'block'){
//         container.style.display = 'none';
//         button.innerText = 'Show Card';
//         button.style.backgroundColor = 'green';
//     }else{
//         container.style.display = 'block';
//         button.innerText = 'Hide Card';
//         button.style.backgroundColor = 'aquamarine';
//     }
//     // console.log('button clicked');
// })

// OR

function showHideCard(){
    if(container.style.display == 'block'){
        container.style.display = 'none';
        button.innerText = 'Show Card';
        button.style.backgroundColor = 'green';
    }else{
        container.style.display = 'block';
        button.innerText = 'Hide Card';
        button.style.backgroundColor = 'aquamarine';
    }
}

button.addEventListener('click', () => showHideCard());

//Create a counter program

const spanNumber = document.getElementsByTagName('span')[0];
const incrementButton = document.getElementById('increment');
const setZero = document.getElementById('setZero');
const decrementButton = document.getElementById('decrement');
let num = 0;

incrementButton.addEventListener('click', () => {
    num++;
    spanNumber.innerText = num;
})

decrementButton.addEventListener('click', () => {
    num--;
    spanNumber.innerText = num;
})

setZero.addEventListener('click', () => {
    num = 0;
    spanNumber.innerText = num;
})


