//1

let total = 0;

function calc(){

    if(process.argv[2] === "sum") {
        for (let i = 3; i < process.argv.length; i++) {
            if(isNaN(process.argv[i])) {
                console.log(`Sorry, the argument '${process.argv[i]}' is not a number, please try again`)
                process.exit()
              } else {

                total += Number(process.argv[i])
              }
            }
            console.log(total)
        }
//2
    else if (process.argv[2] === "avg"){
        for (let i = 3; i < process.argv.length; i++) {
            if(isNaN(process.argv[i])) {
                console.log(`Sorry, the argument '${process.argv[i]}' is not a number, please try again`)
                process.exit()
              } else {
            total += Number(process.argv[i])
        }
        
    }
    console.log(total/(process.argv.length-3))
}
    
//3
    
    else if (process.argv[2] !== "sum" && process.argv[2] !== "arg" &&process.argv[2] !== "med") {
        console.log('I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)')
    }

//Bonus

    else if(process.argv[2] === "med") {

        const sorted = process.argv.slice(3).sort(function(a, b){return a-b});

        const middle = sorted.length / 2;
        const floor = Math.floor(middle);

        if (middle === floor) {
            console.log((sorted[floor - 1] + sorted[floor]) / 2) 
          }
    
          console.log(sorted[floor])
        }

 }
    


calc()

