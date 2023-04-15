
// class User {
//   static users: User[] = []

//   constructor(
//     public userName: string,
//     public password: string,
//     public age?: number
//   ) {
//     User.users.push(this)
//   }

//   static sayHello() {
//     console.log("登录成功！");
//   }

//   static login(params: User): User | undefined {
//     return User.users.find((item) => item.userName === params.userName && item.password === params.password)
//   }
// }

// new User('u1', '123', 19);
// new User('u2', '123', 19);
// new User('u3', '123', 19);

// const result = User.login({ userName: 'u4', password: '123' })

// if (result) {
//   User.sayHello()
// } else {
//   console.log("登录失败，账号密码不正确");
// }


/**
 * 单例模式
 * 某些类的对象 ，在系统中最多只有一个，为了避免开发者造成随意创建多个类对象的错误，使用单例模式进行强约束
 */
class Board {
  // 构造函数私有化 限制使用new关键字创建类对象
  private constructor() { }

  // 私有属性 存放唯一的类对象
  // private static _board: Board;

  // 私有属性 存放唯一的类对象 这种方式在一开始就创建了对象，如果还有其他更多的操作，不适用
  static readonly singleBoard: Board = new Board;

  // 创建类对象
  // static createBoard() {
  //   if (this._board) {
  //     return this._board
  //   }
  //   this._board = new Board();
  //   return this._board
  // }
}

const b1 = Board.singleBoard;
const b2 = Board.singleBoard;

console.log(b1 === b2);
