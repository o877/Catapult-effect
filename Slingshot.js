class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.image = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8)
            if (pointA.x<220){
                strokeWeight(3);
                line(pointA.x-20, pointA.y, pointB.x-15, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y+15);
    
                image(this.image3, pointA.x-20, pointA.y)
            }
            else{
                strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-15, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+20, pointB.y+15);

            image(this.image3, pointA.x-20, pointA.y)
            }
            
        }
        image(this.image, 250, 25)
        image(this.image2, 220, 25)

    
    }
    
}