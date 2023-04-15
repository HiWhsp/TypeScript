type A = { a: string }
type B = { b: number }
type C = A & B
// C : { a: string, b: number }
const a: C = { a: '1', b: 1 }
console.log();
