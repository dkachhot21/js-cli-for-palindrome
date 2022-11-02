function check_palindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = str[i]; //forward character
    let y = str[j - i]; //backward character
    if (x != y) {
      // return false if string not match
      return false;
    }
  }
  /// return true if string is palindrome
  return true;
}

//function that print output is string is palindrome
function is_palindrome(str) {
  // variable that is true if string is palindrome
  let ans = check_palindrome(str);
  //condition checking ans is true or not
  if (ans == true) {
    console.log("passed string is palindrome ");
  } else {
    console.log("passed string not a palindrome");
  }
}
//take input from terminal
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Enter string : ", (name) => {
  let test = name;
  is_palindrome(test);
  readline.close();
});

console.log(process.argv[2]);
is_palindrome(process.argv[2]);
