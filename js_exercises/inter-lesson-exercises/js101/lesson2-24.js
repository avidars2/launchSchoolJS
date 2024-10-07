{//Question 1
//It will output Hello twice
//This is because both variables serve as memory addresses, the first memory address referenced by myWord contains Hello. 
//The second memory address referenced by myOtherWord stores the value 'Hello' that myWord points to
}
{//Question 2
//It will output Goodbye then Hello
//myWord points to 'Hello' and stores it in its unique memory slot, myOtherWord stores the value of myWord in it's unique memory slot
//myWord is reassigned to a different value to store in its memory slot
//So because myOtherWord was assigned and stores the value of myWord, they print different values after myWords reassignment
}

{//Question 3
//It will output ['Hi', 'Goodbye'] twice
//Index of the array myWords memory slot references is reassigned to 'Hi'. That index is reassigned which mutates the array it is a part of
//Since both variables memory slot point to the same reference, their values are printed as the same
}

{//Question 4
//It will output ['Hi', 'Bye'] then ['Hello', 'Goodbye']
//myOtherWords points to the reference to the array that myWords originally pointed to that contains hello goodbye array
//MyWords gets re-assigned to a new reference to an array
}

{//Question 5
//It will output ['Hi', 'Goodbye'] then 'Hello'
//myWord is assigned the primtiive string stored within the array myWords memory references, which since it is primitive, stores the value in it's memory slot
//myWords array is mutated which is why it prints a different output
}

{//Question 6
//It will output ['Hi', 'Goodbye'] then 'Hello'
//myWord is assigned 'Hi', myWords reassigns index 0 of it's referenced array to myWord, then myWord is re-assigned to 'Hello'
}