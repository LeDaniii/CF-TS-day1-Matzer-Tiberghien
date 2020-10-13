"use strict";
// export {};

for (let i = 1; i <= 10; i++) {
  let j = i;
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

let Name = [
  "Daniel",
  "Daniel",
  "Daniel",
  "Daniel",
  "Daniel",
  "Daniel",
  "Daniel",
  "Daniel",
  "Daniel",
  "Daniel",
];

Name.forEach((value) => console.log(value));

let obj = {
  name: "Matzer",
  sayName: () => {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        console.log(`${obj.name}`);
      }
    }, 3000);
  },
};

obj.sayName();
