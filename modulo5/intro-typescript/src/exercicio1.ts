function checaTriangulo(a: number, b: number, c: number) : string{
  if (a !== b && b !== c && c !== a) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}

console.log(checaTriangulo(11, 9, 7))
console.log(checaTriangulo(3, 3, 3))
console.log(checaTriangulo(3, 8, 3))