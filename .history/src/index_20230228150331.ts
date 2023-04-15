class Singleton {
  static instance: any
  name: string
  age: number
  constructor(name: string, age: number) {
    if (!Singleton.instance) {
      this.name = name
      this.age = age
      Singleton.instance = this
    }
    return Singleton.instance
  }
}

console.log(new Singleton("Taobao", 18) === new Singleton("Baidu", 15)) // true