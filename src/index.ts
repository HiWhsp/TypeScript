
abstract class Chess {
  protected x: number = 0
  protected y: number = 0
  abstract readonly name: string
  abstract move(targetX: number, targetY: number): boolean
}

class Horse extends Chess {
  readonly name: string = '马';
  move(targetX: number, targetY: number) {
    this.x = targetX;
    this.y = targetY
    console.log("马移动了", "x" + this.x, "y" + this.y);
    return true;
  }
}

class Pao extends Chess {
  readonly name: string = "炮"
  move(targetX: number, targetY: number) {
    this.x = targetX;
    this.y = targetY
    console.log("炮移动了", "x" + this.x, "y" + this.y);
    return true;
  }
}

class Soldier extends Chess {
  readonly name: string = "兵"
  move(targetX: number, targetY: number) {
    this.x = targetX;
    this.y = targetY
    console.log("兵移动了", "x" + this.x, "y" + this.y);
    return true;
  }
}

const H = new Horse();
const P = new Pao();
const S = new Soldier();
H.move(1, 2);
P.move(2, 3)
S.move(3, 4)


/**
 * 某个类只是个抽象的概念，比如象棋中的棋子。主要用于提取子类共有的成员，而不能直接创建它的对象。可作为抽象类
 * 在类前面加上 abstract 表示该类是个抽象类，不能new
 * 
 * 抽象成员
 * 父类中，可能知道有些成员是必须 存在的，但是不知道成员的实现和值，因此，需要一种强约束，继承该类的子类 必须实现该成员
 * protected 约束某个成员只能在父类和子类中使用，外部不能使用
 * 
 */