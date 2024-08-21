const asteroidCollision = (asteroids) => {
    let output=[];
    for(let asteroid of asteroids){
let len=output.length;
let pre=output[len-1];
if(pre<0 || asteroid>0 || !len) output.push(asteroid)
else if(-asteroid== pre) output.pop();
else if(-asteroid>pre) {
    output.pop();
    asteroids.unshift(asteroid);
}
}
return output;

    };

console.log(asteroidCollision([5, 10, -5])) // [5, 10]
console.log(asteroidCollision([8, -8])) // []
console.log(asteroidCollision([10, 2, -5])) // [10]

