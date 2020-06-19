// Regular for loop
// iterate from 0 to 5
for (let i = 0; i < 6; i++) {
    console.log(i)
}

// Summing 0 to n

let sum = 0
for (let i = 0; i < 101; i++) {
    sum += i
}

console.log(sum)

let sum = 0
for (let i = 0; i < 101; i += 2) {
    sum += i
}

console.log(sum)

// or another way

let total = 0
for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        total += i
    }
}
console.log(total)

// Reverse order
const nums = [1, 2, 3, 4, 5]
const lastIndex = nums.length - 1
const newArray = []
for (let i = lastIndex; i >= 0; i--) {
    newArray.push(nums[i])
}

console.log(newArray)