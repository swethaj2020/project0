const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
var itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let count = 0

function newTodo() {
  if(itemCountSpan.textContent > 0){
    count = itemCountSpan.textContent
  } else {
    count = 0
  }
  let listItem = document.createElement("li")
  let inputValue = document.getElementById("js-todo").value;
  let textSpan = document.createElement("span");
  let inputValueText = document.createTextNode(inputValue);
  textSpan.className = "todo-item-text"
  textSpan.appendChild(inputValueText);
  listItem.appendChild(textSpan);
  if (inputValue === '') {
    alert("Please enter a value");
  } else {
    list.appendChild(listItem);
    count++
    itemCountSpan.innerHTML = count
  }
  //checkbox
  uncheckedCountSpan.innerHTML = list.children.length
  document.getElementById("js-todo").value = "";
  var check_value = []
  var checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = 'item' + count;
  checkBox.value = inputValue;
  checkBox.className = 'todo-checkbox';
  listItem.insertBefore(checkBox, textSpan);
  let checkboxCount = document.getElementsByClassName("todo-checkbox");
  for (i = 0; i < checkboxCount.length; i++) {
    checkboxCount[i].onclick = function() {
      if(this.checked === true){
        uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.textContent) - 1;
      } else{
        uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.textContent) + 1;
      }
      itemCountSpan.innerHTML = list.children.length
    }
  }
  //delete button
  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "todo-delete";
  span.appendChild(txt);
  listItem.appendChild(span);
  let deleteCount = document.getElementsByClassName("todo-delete");
  for (i = 0; i < deleteCount.length; i++) {
      deleteCount[i].onclick = function() {
      deletel(this,list)
    }
  }
}

function deletel(l,list){
  let div = l.parentElement;
  list.removeChild(div);
  itemCountSpan.innerHTML = list.children.length
  if(div.children[0].checked === true){
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.textContent);
  } else{
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.textContent) - 1;
  }
}
