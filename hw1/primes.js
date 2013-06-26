#!/usr/bin/env node

var fs = require('fs');

var find_primes = function(n)
{
    S = []; 
    S[1] = 0; // 1 - не простое число
    // заполняем решето единицами
    for(k=2; k<=n; k++)
        S[k]=1;
    
    var arr = [];
    var counter = 0;
    for(k=2; (k*k<=n)&&(counter<100); k++){
        // если k - простое (не вычеркнуто)
        if(S[k]==1){ 
	    counter++;
	    arr.push(k);	
            // то вычеркнем кратные k
            for(l=k*k; l<=n; l+=k){
                S[l]=0;
                }
            }
        }
    return arr;
}




var primes_string = function(arr){ 
	return arr.join(",");
};

var outfile = "primes.txt";
fs.writeFileSync(outfile, primes_string(find_primes(1000000)));
console.log("ok \n");



