// Interface
interface Person {
  name: string;
  age: number;
  speak(saying: string): void;
  spend(amount: number): number;
}

const me: Person = {
  name: "Joseph",
  age: 30,
  speak(saying: string): void {
    console.log(`${saying}`);
  },
  spend(amount: number): number {
    console.log(`I spend ${amount}`);
    return amount;
  },
};

const greetPerson = (person: Person) => {
  console.log(`Hello ${person.name}`);
};
