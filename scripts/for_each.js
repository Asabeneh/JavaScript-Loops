const numbers = [1, 2, 3, 4, 5]
numbers.forEach((number, i) => {
    console.log(number, i)
})

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
countries.forEach((country, i, arr) => {
    console.log(i, country.toUpperCase())
})