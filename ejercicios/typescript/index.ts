// Funciones
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);

function createAdder(a: number): (number) => number {
  return function(b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Smith'): string {
  return `${firstName} ${lastName}`;
}

const richard = fullName('Agente');
console.log(richard);
