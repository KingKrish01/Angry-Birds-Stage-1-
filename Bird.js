class Bird {
    constructor(x,y){
     var options={
         restitution:0.8,
         density:1.5,
         friction:1.0

     }
     this.body=Bodies.rectangle(x,y,50,50,options);
     this.width=50;
     this.height=50;
     World.add(world,this.body);
    }
    display(){
        var pos=this.body.position ;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        fill("blue");
        rect(pos.x,pos.y,this.width,this.height);
        pop ();
    }
}