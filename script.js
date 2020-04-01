var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
	deleteButton(li);
}

function addListAfterClick() {
	if(inputLength() > 0 )
		createListElement();
}

function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13)
		createListElement();
}

for(var i=0; i<li.length; i++) {
	/*var deletebutton = document.createElement("button");
		deletebutton.appendChild(document.createTextNode("Delete!!!"));
		li[i].appendChild(deletebutton);
		deletebutton.addEventListener("click", deleteParent);*/
		deleteButton(li[i]);
	}

	function deleteButton(li) {
		var deletebutton = document.createElement("button");
		deletebutton.appendChild(document.createTextNode("Delete!!!"));
		li.appendChild(deletebutton);
		deletebutton.addEventListener("click", deleteParent);	
	}

	function deleteParent(event) {
		event.target.parentNode.remove();
	}

	function doneItem(evet) {
		event.target.classList.toggle("done");
	}

	button.addEventListener("click", addListAfterClick);
	input.addEventListener("keypress", addListAfterKeypress);
	ul.addEventListener("click", doneItem);

/*button.addEventListener("click", function(){
	if(input.value.length > 0 ) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
	}
});

input.addEventListener("keypress", function(event){
	if(input.value.length > 0 && event.keyCode === 13) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
	}
});
*/