/**
 * Definitions:
 * 1. Stack: A list that grows and shrinks dynamically
 * (It's like an array using push and pop)
 * 
 * 2. Stack and register: language that uses a stack
 * of values (list of values)
 * 
 * Each operation operates on a register which can
 * be thought of as the current value
 * 
 * [1, 2, 3] <--stack
 * 
 * To grow stack use 'push'
 * To shrink use 'pop'
 * 
 * Register is not part of the stack
 * 
 * stack: [1, 2, 3]
 * Register: 4
 * 
 * Push register into stack --> [1, 2, 3, 4]
 * 
 * An operation that requires two values
 * pops the top item from the stack, operates
 * on the popped value and register value
 * then stores the value back in the register
 * 
 * Stack: [1, 2, 3]
 * Register: 4
 * 
 * Multiply (takes 2 values) 4 * (Stack.pop --> 3)
 * 
 * Register: 12
 * Stack: [1, 2]
 * 
 * MULT (takes register * Stack.pop)
 * 
 * Register: 24
 * Stack: [1]
 */
/**
 * I: String of commands
 * O: Number if 'PRINT' is called, else nothing
 * 
 * Explicits:
 * 1. All programs will be in a single string argument
 * 2. Initialize stack and register to [] and 0 respectively
 * 3. Operations that require 2 values operate on the register
 * and the most recent value (popped value) on the stack.
 * The result is saved on the register, the stack is mutated
 * 4. Only integers will be passed
 * 
 * Implicits:
 * 1. Operations/Programs are delineated by a space
 * 2. Number values are not operations/programs
 * 
 * CQ:
 * 1. Does PUSH/POP remove a value from register?
 * 
 * ('5 PUSH 3 MULT PRINT')
 * .split(' ')
 * ['5', 'PUSH', '3', 'MULT', 'PRINT']
 * 5 is a string number
 * 5 goes to register
 * register = 5;
 * 
 * PUSH, pushes register to stack
 * stack.push(register)
 * 
 * 3 is a string number
 * 3 goes to register
 * register = 3;
 * 
 * MULT
 * 
 * MULT takes register and pops a value from stack
 * register (3) * stack.pop (5) = 15
 * 
 * Value is saved to register
 * 
 * register = 15
 * 
 * PRINT --Prints register
 * 
 * 15
 */

/**
 * Data structures:
 * String of text with spaces 'x y z'
 * Number strings within that string which represent integers we'll be converting
 * Alphabetical strings representing commands
 * 
 * Algorithm:
 * 1. Split command string by space into an array of integers/commands
 * 2. Evaluate in order, each item
 * 3. If item === Number string, re-assign register
 * 4. If item !== Number string, process command
 * 
 * 4 expanded
 * 1. commands object initialized with all command functions
 * 
 * commands['PUSH'] --> () => stack.push(register)
 * commands['MULT'] --> () => register = register * stack.pop()
 * commands['PRINT'] --> () => console.log(register);
 */

/**
n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
 */

function minilang(commandString) {
  let stack = [];
  let register = 0;
  let operationalCommands = ['ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER'];
  const commands = {
    n: (num) => register = num,
    PUSH: () => stack.push(register),
    ADD: () => register+= stack.pop(),
    SUB: () => register-= stack.pop(),
    MULT: () => register*= stack.pop(),
    DIV: () => register = Math.round(register / stack.pop()),
    REMAINDER: () => register = Math.round(register % stack.pop()),
    POP: () => register = stack.pop(),
    PRINT: () => console.log(register),
  }

  commandString.split(' ').forEach(command => {
    if (operationalCommands.includes(command) && stack.length === 0) {
      return console.error('Operation performed when stack is empty')
    }
    if (Number(command) % 1 === 0) {
      commands['n'](Number(command));
    } else if (!(Object.keys(commands).includes(command))) {
      return console.error('Invalid command')
    } else {
      commands[command]();
    }
  })

}

minilang('PRINT');
// 0

minilang('MULT');
// Should throw stack empty error

minilang('POOP');
// Should throw stack empty error

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)