class User {

  constructor(public name: string, private _age: number) {

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

const user = new User('lock')
