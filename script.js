const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
"ff0000",
"ff0000",
"ff0000",
"#ff9999",
"#ff8080",
"#ff6666",
"#ff4d4d",
"#ff3333",
"#ff1a1a",
"#ff0000",
"#e60000",
"#cc0000",
"#b30000",
"#990000",
"#800000",
"#660000",
"#4d0000",
"#660000",
"#660000",
"#660000",
"#660000",
"#660000",
"#660000",
"#660000",
"#660000",
"#660000",
"#660000",
"#660000",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
