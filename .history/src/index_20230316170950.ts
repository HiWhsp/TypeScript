
interface hasNameProperty {
  name: string
}


function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
  obj.name = obj.name
    .split(" ")
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join(" ");
  return obj;
}


const o = {
  name: "kevin yuan",
  age: 19,
};
const newO = nameToUpperCase(o);

console.log(newO);
