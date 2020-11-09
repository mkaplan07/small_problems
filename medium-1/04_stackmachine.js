// rules & examples: https://launchschool.com/exercises/026e99f0
// Futher exploration:
// • detect & report empty stack conditions
//  "trying to use a value from the stack when there are no values"
// • handle invalid tokens
// • return an error msg on errors, undefined on success

let rs = require('readline-sync');

// *  * get input
// side-effects: reads
// RETURNS
function get(msg) {
  let input = rs.question(msg);
  if (!validateProgram(input)) {
    input = get('Pls enter something legible:\n');
  }
  return input;
}

// *  * validate input
let tokens = ['PUSH', 'ADD', 'SUB', 'MULTI', 'DIV', 'MOD', 'POP', 'PRINT'];
// side-effects: none
// RETURNS
function validateProgram(str) {
  if (!str) return false;

  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i += 1) {
    if (tokens.indexOf(arr[i].toUpperCase()) === -1
      && !Number.isInteger(Number(arr[i]))) {
      return false;
    }
  }
  return true;
}

// *  * check for empty stack
let stackOps = ['ADD', 'SUB', 'MULTI', 'DIV', 'MOD', 'POP'];
// side-effects: writes
function empty(register, token) {
  console.log(`Empty stack for "${register} ${token}"`);
}

// *  * stackMachine
// side-effects: writes, calls 2 fns w/ side-effects (get, empty)
// RETURNS
function stackMachine() {
  let stack = [];
  let register = 0;

  let program = get('Enter your program:\n');

  program.split(' ').filter(el => el !== '').forEach(token => {
    if (!stack.length && stackOps.includes(token.toUpperCase())) {
      empty(register, token);
    } else {
      switch (token.toUpperCase()) {
        case 'PUSH':
          stack.push(register);
          break;
        case 'ADD':
          register += stack.pop();
          break;
        case 'SUB':
          register -= stack.pop();
          break;
        case 'MULTI':
          register *= stack.pop();
          break;
        case 'DIV':
          register = Math.floor(register / stack.pop());
          break;
        case 'MOD':
          register = Math.floor(register % stack.pop());
          break;
        case 'POP':
          register = stack.pop();
          break;
        case 'PRINT':
          console.log(`Reg ${register}.`);
          break;
        default:
          register = Number(token);
      }
    }
  });
  return register;
}

// *  * another calculation?
// side-effects: reads, writes
// RETURNS
function newCalc() {
  let ans = rs.question('Another calculation?\n');

  if (ans.slice(0, 1).toLowerCase() === 'y') {
    return true;
  } else {
    console.log('Goodbye.');
  }
}

// *  * main brain
// side-effects: calls 2 fns w/ side-effects (stackMachine & newCalc)
function master() {
  do {
    stackMachine();
  } while (newCalc());
}
master();
