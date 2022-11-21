// If an li element is clicked, toggle the class "done" on the <li>
// If a delete link is clicked, delete the li element / remove from the DOM


function addUlListener (e){
  var tagName = e.target.tagName.toLowerCase();
  if (tagName === 'li')
    e.target.classList.toggle('done');
  if (tagName === 'span')
    e.target.parentNode.classList.toggle('done');
  if (tagName === 'a' && e.target.className === 'delete') 
    e.target.parentNode.remove(); 

}

document.querySelector('ul.today-list').addEventListener('click', (e) => {
  addUlListener(e);
});

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

document.querySelector('a.add-item').addEventListener('click', (e) => {
  addListItem(e);
});

const addListItem = function (e) {
  e.preventDefault();
 // debugger;
  const text = document.getElementsByTagName('input')[0].value;// use this text to create a new <li>
  let newLi = document.createElement('li');
  let span = document.createElement('span');
  span.textContent = text;
  let anchor = document.createElement('a');
  anchor.setAttribute('class', 'delete');
  anchor.textContent = 'Delete';
  newLi.appendChild(span);
  newLi.appendChild(anchor);

  // //extra credit here:  
  // debugger;
  // let upButton =  document.createElement('button');
  // upButton.setAttribute('class','up');
  // upButton.textContent = 'up';
  // upButton.addEventListener('click', (e) => {
  //   debugger;
  //   var li = e.target.closest('li');
  //   let ulList = document.querySelector("ul.today-list");
  //   let liCount = ulList.getElementsByTagName("li").length;
  //   if (liCount > 1){
  //     //var ulNodesnodes = Array.from( ulList.children );
  //     var index = ulList.indexOf( li );

  //     let removedNode = li.remove(); 
  //     ulList.insertBefore(removedNode, document.getElementsByTagName('li')[index -1]);
  //   }
  // });  
  // newLi.appendChild(upButton);
  

  // let downButton = document.createElement('button')
  // downButton.setAttribute('class','down');
  // downButton.textContent = 'down';
  // upButton.addEventListener('click', (e) => {

  // });  
  // newLi.appendChild(downButton);

  newLi.addEventListener('click', (e) => {
    addUlListener(e);
  });  

  let list = document.querySelector('ul.today-list');
  list.append(newLi);  
};
