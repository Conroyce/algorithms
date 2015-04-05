//checks if n is prime
var primeChecker = function(n) {
  if (n < 1) return false;

  for (var i = 1; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
};

//returns all primes of a number
var findPrimes = function(n) {
  if (n < 1) return [];

  var ans = [];
  for (var i = 1; i < n; i++) {
    if (n % i === 0) ans.push(i);
  } 

  return ans;
};

//returns prime factors of a number(different than all primes of number)
var primeFactors = function(n){
  var factors = [], 
      divisor = 2;
  
  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor); 
       n= n/ divisor;
    }
    else{
      divisor++;
    }     
  }
  return factors;
}