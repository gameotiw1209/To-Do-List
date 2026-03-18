const inputBox =document.getElementById("input-box");
const listContainer=document.getElementById("list-container");


inputBox.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        addtask();
    }
});


// this function part help us to create our task and that task gets added to the html list container and after perfroming 
// it get edited as per the css edit we gave it 


function addtask(){
    if(inputBox.value ===''){
        alert ("You must write something!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}
// here we are using this part for removing and giving a check for each task 


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
}
    else if(e.target.tagName === "SPAN") {
             e.target.parentElement.remove();
             saveData();
}
}, false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();  