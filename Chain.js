class Chain {
    constructor(b1, b2){
        var props = {
            bodyA: b1,
            bodyB: b2,
            length: 15,
            stiffness: 0.08
        }
        this.rope = Matter.Constraint.create(props);
        World.add(world, this.rope);
    }

    display() {
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        line(posA.x, posA.y, posB.x, posB.y);
    }
}