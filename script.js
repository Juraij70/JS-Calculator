const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("U must write sm");
    }
    else{
        // a li element is created and stored in li names variable
        let li = document.createElement("li");
        // li's value will be the value of the entered in input box
        li.innerHTML = inputBox.value;
        // make that li appear below the listContainer, i.e. below the HTML ul
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    // makes the inputfield empty after adding task
    inputBox.value = '';
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false)


