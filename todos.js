var newdiv = document.createElement

var apple = document.getElementById('apple');

apple.addEventListener('keydown', function(event) {
  if (event.keyCode===13) {
    var newDiv = document.createElement('div');
newDiv.innerHTML=document.getElementById('apple').value;
    newDiv.className = 'listitem';
    newDiv.addEventListener('click', function(event){newDiv.className = 'done';});
    var targetElement = document.getElementById('todolist');
    targetElement.appendChild(newDiv);
  }
});