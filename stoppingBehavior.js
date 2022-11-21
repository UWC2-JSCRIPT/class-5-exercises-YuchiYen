// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

const changeBehaviorOfLink = document.getElementById('more-info');
changeBehaviorOfLink.addEventListener('click', e => {
    e.preventDefault();
    alert('Here\'s some info');
});

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const makeBark = document.getElementById('dog');
makeBark.addEventListener('click', e => {
    e.stopPropagation();
    alert('Bow wow!');
});