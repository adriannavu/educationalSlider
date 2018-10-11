// upload ireland map
// function: if user hovers, get color. if color = xyz, display xyz tooltip.
var ireland = document.getElementById('ireland');

ireland.addEventListener('mouseenter', function() {
  console.log('Ireland hovered over');
  console.log(ireland.style.fillColor);
});