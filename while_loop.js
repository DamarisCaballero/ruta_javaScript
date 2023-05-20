let number = 1;
while (number <= 5) {
  console.log(number);
  // The number variable is never updated: the loop condition stays true forever
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
    i++; // The i variable is updated in the loop body
  }