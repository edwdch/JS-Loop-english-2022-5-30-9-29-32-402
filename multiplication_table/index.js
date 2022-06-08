for (let i = 1; i <= 9; i++) {
  let outputList = [];
  for (let j = 1; j <= i; j++) {
    outputList.push(`${i}*${j}=${i * j}`);
  }
  console.log(outputList.join(" "));
}
