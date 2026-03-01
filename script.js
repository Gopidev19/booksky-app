var popupOverlay = document.querySelector(".popup_overlay");
var popbox = document.querySelector(".pop_box");
var addPopBtn = document.getElementById("add_popup");

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var title=document.getElementById("book_title_input")
var author=document.getElementById("book_author_input")
var content=document.getElementById("book_desc_input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
            <h4>${author.value}</h4>
            <p>${content.value}</p>
             <button onclick="deletebook(event)">Delete</button>
        `
        container.append(div);

    popupOverlay.style.display = "none";
    popbox.style.display = "none";
})

addPopBtn.addEventListener("click", function () {
    popupOverlay.style.display = "block";
    popbox.style.display = "block";
});

var popcancel=document.getElementById("Cancel")
popcancel.addEventListener("click",function(event){
    event.preventDefault()
    popupOverlay.style.display="none"
    popbox.style.display="none"
})

function deletebook(event) {
    event.target.parentElement.remove();
}
