let x;//criando variavel x
let y;//criando variavel y

function setup() {
  createCanvas(400, 400);
  x = random(400);// sorteando numero ate 400
  x = int(x);// transformando p/ numero inteiro
  y = random(400);
  y = int(y);
  
}

function draw() {
  background("pink");// fundo da tela pink
  x = x + random(-2, 2);
  y = y + random(-2, 2);
  x = constrain (x,0,400)
  y = constrain (y,0,400)
    let distanciaX;//cateto
    let distanciaY;//cateto
    let distancia;//hipotenusa
    distanciaX = mouseX - x;
    distanciaY = mouseY - y;
    distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);  
   circle(mouseX, mouseY, distancia);// circulo com coordenadas aleatorias // e diametro 10
   if(distancia < 120) {    
   fill("purple")  
   circle(mouseX, mouseY, distancia); }
  if(distancia < 5) {
    text("Encontrei!", 200, 200);// se posiçao x do mouse for igual a x //entao mostrara o o texto "encontrei"
  fill("red")
  circle(mouseX, mouseY, distancia);
  noLoop();
  
  }
}