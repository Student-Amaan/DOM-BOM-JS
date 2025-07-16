//example 1

let hold = document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent =
      "the paragraph is changed beautifully let me know how I can help You";
  });

//example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let hold = document.getElementById("citiesList");
    hold.firstElementChild.classList.add("highlight");
  });

//   example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "pink";
  coffeeType.style.padding = "5px";
});

// example 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let NewItem = document.createElement("li");
  NewItem.textContent = "Eggs";
  document.getElementById("shoppinglist").appendChild(NewItem);
});

// example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

//   Example 6

document.getElementById("clickMeButton").addEventListener("mouseover",function () {
    alert("AmanCodonic")
});

// Example 7

document.getElementById("teaList").addEventListener("click", function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected: " + event.target.textContent)
    }
});

// Example 8

document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `feedback is : ${feedback}`;
    
});

// example 9

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domStatus").textContent = "DOM fully loaded";
})

// example 10

document.getElementById("toggleHighlight").addEventListener("click",function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
});
