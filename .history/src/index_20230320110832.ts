
interface hasNameProperty {
  name: string
}

type hasNumberProperty = {
  age: number
}


function nameToUpperCase<T extends hasNameProperty, G extends hasNumberProperty>(obj: T, age: G): T | G {
  obj.name = obj.name
    .split(" ")
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join(" ");
  console.log(age);
  return obj;
}


const o = {
  name: "kevin yuan",
};
const age = {
  age: 19
}
const newO = nameToUpperCase(o, age);

console.log(newO);
