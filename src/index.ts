
class Tank {
  protected name: string = '123'
}

class PlayerTank extends Tank {
  x: number = 10
  y: number = 20
  like: number = 5
  name: string = '222'
}

class EnemyTank extends Tank {

}

const play: Tank = new PlayerTank();

if (play instanceof PlayerTank) {
  play.like
  play.name
}