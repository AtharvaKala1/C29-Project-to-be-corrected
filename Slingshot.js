class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
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
            push()
            strokeWeight(7);
            stroke(247,19,19);
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-25,pointA.y,pointB.x+30,pointB.y-3);
            image(this.image3,pointA.x-30,pointA.y-10,15,30);
            pop();
    
        }
    }
    
}