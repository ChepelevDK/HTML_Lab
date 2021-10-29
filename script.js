window.onload = function initRemoveButtons() {
    var myList = document.getElementsByTagName("li");

    for (var i = 0; i < myList.length; i++) {
        var span = document.createElement("span");
        var btn = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(btn);
        myList[i].appendChild(span);
    }

    var close = document.getElementsByClassName("close");

    for (var i = 0; i < close.length; i++){
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function addToList() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Надо что-то написать!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("input").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    var close = document.getElementsByClassName("close");

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}