class Bolha{
  constructor(x,y,s,r){
    this.x=x;
    this.y =y;
    this.s=s;
    this.r=r;
    this.xVelocidade = random(-2,6);
    this.yVelocidade = random(2,6);
  }
  exibir(){
    stroke(this.s)
    strokeWeight(random(1,5))
    noFill();
    circle(this.x,this.y,this.r);
  }
  mover(){
    this.x += this.xVelocidade;
    this.y += this.yVelocidade;
  }
  colidir(){
    if(this.x >400 || this.x<0){
      this.xVelocidade *= -1;
    }
    if(this.y > 400 || this.y<0){
      this.yVelocidade *=-1;
    }
  }
}