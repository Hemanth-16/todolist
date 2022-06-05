let addToDoButton=document.getElementById('addtolist');
let toDoContainer=document.getElementById('todocontainer');
let inputText=document.getElementById('inputtext');

addToDoButton.addEventListener('click' ,function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputText.value;
    toDoContainer.appendChild(paragraph);
    inputText.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through"
    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
})