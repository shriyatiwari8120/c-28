class Chain {
    constructor(b1, p2){
        var props = {
            bodyA: b1,
            pointB: p2,
            length: 15,
            stiffness: 0.08
        }
        this.rope = Matter.Constraint.create(props);
        World.add(world, this.rope);
    }

    display() {
        if (this.rope.bodyA) {
            var posA = this.rope.bodyA.position;
            var posB = this.rope.pointB
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }

    fly() {
        this.rope.bodyA = null;
    }
}