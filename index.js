// here be your javascript
//**Create a recursive function that will take a positive integer parameter n and return the factorial of n.**

function factorial(n){
  if(n === 0){
  return 1
  }
    if (n >= 1){
      return(n) * factorial(n-1);
	};
};