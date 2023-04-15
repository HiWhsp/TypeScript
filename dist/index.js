class Tank {
    constructor() {
        this.x = 1;
        this.y = 2;
    }
}
class PlayerTank extends Tank {
    constructor() {
        super(...arguments);
        this.x = 10;
        this.y = 20;
    }
}
class EnemyTank extends Tank {
}
const play = new PlayerTank();
console.log(play.x, play.y);
