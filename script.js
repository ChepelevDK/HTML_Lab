window.onload = function initRemoveButtons() {
    const myList = document.getElementsByTagName("li");

    for (let i = 0; i < myList.length; i++) {
        const span = document.createElement("span");
        const btn = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(btn);
        myList[i].appendChild(span);
    }

    const close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++){
        close[i].onclick = function () {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }

    const list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

function addToList() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("input").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Надо что-то написать!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("input").value = "";

    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    const close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function showAll(){
    const myList = document.getElementsByTagName("li");

    for (let i = 0; i < myList.length; i++){
        if (myList.item(i).className === 'hide'){
            myList.item(i).className = '';
        }
    }
}

function showChecked(){
    const myList = document.getElementsByTagName("li");

    for (let i = 0; i < myList.length; i++){
        if (myList.item(i).classList.value !== 'checked'){
            myList.item(i).className = 'hide';
        }
    }
}

function showUnfinished(){
    const myList = document.getElementsByTagName("li");

    for (let i = 0; i < myList.length; i++){
        if (myList.item(i).classList.value === 'checked'){
            myList.item(i).className = 'hide';
        }
    }
}