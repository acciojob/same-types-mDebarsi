function isSameType(value1, value2) {
  //your js code here
	 const bothAreNaN = isNaN(value1) && isNaN(value2);

  if (bothAreNaN) {
    return true;
  }

  const typeOfValue1 = typeof value1;
  const typeOfValue2 = typeof value2;

  return typeOfValue1 === typeOfValue2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
