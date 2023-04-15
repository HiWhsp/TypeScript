class User {
  name: string;
  age: number;
  gender: "男" | "女";
  constructor(name: string, age: number, gender: "男" | "女" = "男") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const u = new User("abc", 19);
console.log(u);
