{//Question 1
//It will output Hello twice
//This is because myWord is passed by value, a copy of myWord is assigned to the parameter 'word' which is then logged
//The word parameter is then reassigned to an uppercase version of itself but is then destroyed once the function ends
//Then myWord is logged again
//myWord and the parameter 'word' both point to different spots in memory, so despite having the same value, they are not pointing to the same thing
}

{//Question 2
//It will output Hello then HELLO
//myWord is assigned 'Hello' --> it is passed to changeMyWord as an argument --> The function logs myWord then makes it uppercase then returns the uppercase value -->
//The function call is evaluted to the uppercase value and reassigns myWord to match --> myWord is logged again
}

{//Question 3
//It will output Hello, Hello, HELLO
//myWord is assigned 'Hello', which is then passed as an argument to changeMyWord --> The parameter 'word' which has a copy of myWord's value 'Hello' is logged -->
//The parameter is reassigned to upper case and then returned --> myOtherWord is assigned the evaluation of that function aka the uppercase value -->
//myWord is logged --> myOtherWord is logged
//3 separate memory locations were logged during these events
}
{//Question 4
//The myWords array is logged as it was initialized, then it is logged again with index 0 equal to 'Hi'
//myWords array is passed to changeMyWords function through the Pass by reference strategy --> The words parameter is equal to the memory reference -->
//The array is logged, then mutated as index 0 of the array is reassigned to 'Hi' --> The mutated array is logged again
}
{//Question 5
//myWords array is logged twice in the initialized form with no change
//Initial array myWords is passed by reference to changeMyWords and logged --> words parameter is reassigned to a new array
//myWords array is logged again
}