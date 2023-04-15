class User {
  name: string;
  private age: number = 1;
  gender: "男" | "女";
  constructor(name: string, gender: "男" | "女" = "男") {
    this.name = name;
    this.gender = gender;
  }
}
const u = new User("abc");
console.log(u.gender = '女');
