const arr = [ 
{
    zawod : " Mechaniak",
    lat: 5
},
{
    zawod: "inżynier",
    lat: 4
}
]

let count = 0

arr.forEach(item => count += item.lat) // count += item.lat to to samo co count = count + item.lat

console.log(count)


const countReduce = arr.reduce((total, item, index, orginalaTablica )=> {
    console.log(total, item, index , orginalaTablica)
    return total + item.lat
}, 7)

console.log(countReduce)

// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

export const zliczanie = (par) => {
    let count = 0

    par.forEach(item => count += item.lat) 
    return count
}