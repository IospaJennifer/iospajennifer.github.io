let circle1;
let circle2;
let circle3;
let a = 0;
function setup() {
  createCanvas(1000,1000);
  ellipseMode(CENTER);
  angleMode(DEGREES)
  circle3={
  x: 500,
  y: 500,
  // size:(random(200,300)),
  size:(300),
  color:{
  r:(59),
  g:(62),
  b:(66)

  }
  };


 circle2={
  x: 500,
  y: 500,
  // size:(random(100,200)),
  size:(200),
  color:{
  r:(96),
  g:(99),
  b:(102)

  }
};
  circle1={
  x: 500,
  y: 500,
  // size:(random(0,100)),
  size:(100),
  color:{
  r:(113),
  g:(118),
  b:(124)
  }


};

}

function draw() {
  // translate(size/2);
  // rotate(a)
	translate(0, 0);
	rotate(a);
  fill(circle3.color.r,circle3.color.b,circle3.color.g);
  circle(circle3.x,circle3.y, circle3.size);
  fill(circle2.color.r,circle2.color.b,circle2.color.g);
  circle(circle2.x,circle2.y, circle2.size);
  fill(circle1.color.r,circle1.color.b,circle1.color.g);
  circle(circle1.x,circle1.y, circle1.size);
  a= a +1;



}
function findsong(){

let url="https://open.spotify.com/search/results/" + document.querySelector("#box").value;
window.open(url);


}




