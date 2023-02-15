
//      1 
//    1 2 1 
//   1 2 3 2 1 
// 1 2 3 4 3 2 1






let n = 4; 
let output = ''; 
for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= n - i; j++) {
    row += '  ';
  }
  for (let j = 1; j <= i; j++) {
    row += j + ' ';
  }
  for (let j = i - 1; j >= 1; j--) {
    row += j + ' ';
  }
  output += row + '\n';
}
console.log(output);