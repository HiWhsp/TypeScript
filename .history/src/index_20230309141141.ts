class User {
  private _age: number = 0
  constructor(public name: string) {

  }

  setAge(value: number) {
    if (value < 0) {
      this._age = 0
    } else if (value > 100) {
      this._age = 100
    } else {
      this._age = value
    }
  }

  getAge() {
    return Math.floor(this._age);
  }
}

const user = new User('lock');
console.log(user.name);
console.log(user.getAge());
user.setAge(10.5)
