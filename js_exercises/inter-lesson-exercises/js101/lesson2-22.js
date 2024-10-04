{//Question 1
//Output: 10
//Because when myFunc is called, global (outer) scope variable num is reassigned to 10
}
{//Question 2
//Output: 5 then 10
//Because when myFunc is called, outerscope variable num is first logged, and then it is reassigned. myFunc is popped from the call stack
//Then the code resumes from line 8 and then to line 9
}
{//Question 3
//Output: 5
//Because although myFunc has a variable with the same name as outer scope variable, 'num', it is shadowed once it gets declared within myFunc
//So the num that gets logged is not the num declared within myFunc, but the global num which was never re-assigned and remained the same
}
{//Question 4
//Output: Reference error
//Because the declaration of num, even if it is declared a line below the console.log, hoists it to the top of the function
}
{//Question 5
//Output: 5
//Because num is a parameter in myFunc, it shadows the global variable 'num'. So global num never gets reassigned
//When a variable is shadowed, access to the global variable is blocked. A new variable 'num' is created and destroyed upon function completion
}
{//Question 6
//Output: 3
//Because global num is accessed and reassigned until it reaches 3 before being logged
}
{//Question 7
//Output: Nothing
//Because an infinite loop is created. The num referenced by the while loop is declared globally
//Whereas the num incremented only exists within the block and is constantly created and destroyed during the infinite iteration
}