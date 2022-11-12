interface User {
  name: string;
  age: number;
  avatar?: string;
}

export const users: User[] = [
  { name: "John Doe", age: 18 },
  { name: "Joe Dan", age: 20 },
  { name: "Steve Roger", age: 22 },
];