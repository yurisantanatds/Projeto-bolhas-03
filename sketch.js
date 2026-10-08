//Projeto POO - Bolhas -03

// Criando o array de bolhas
let bolhas = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for(let i =0;i < bolhas.length;i++){
    bolhas[i].exibir();
    bolhas[i].mover();
    bolhas[i].colidir();
  }
}

//-------Criando a função click-----
function mousePressed(){
  let r = random(10,50);
  let bolha = new Bolha(mouseX, mouseY,color(random(1,255),random(1,255),0),r);
  bolhas.push(bolha);
}