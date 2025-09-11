let sum = 0;

for(val in process.argv) {
    if(Number(process.argv[val])) {
        sum += Number(process.argv[val]);
    }
}
console.log(sum);
return sum;