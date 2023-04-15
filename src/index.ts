import { Dictionary } from '../utils/Dictionary';

const dict = new Dictionary();

dict.set('a', 1);
dict.set("b", 2);
dict.set("b", 3);

dict.forEach((key, val) => {
  console.log(key + ':' + val);
})