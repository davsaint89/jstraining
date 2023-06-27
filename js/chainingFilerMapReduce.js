/* 
For the given array of products with prices, writye a JS function to filter
out the non-premium products. 

Non-premium are products priced less than 300

Convert all Non-premium product types to upper case.

Calculate stock of each non-premium product type

*/

const products = [
    ['Gucci Round Bucklet Belt', 400],
    ['Gucci Round Bucklet Belt', 450],
    ['Gucci Round Bucklet Belt', 300],
    ['Smiley T-Shirt', 500],
    ['Smiley T-Shirt', 50],
    ['Shinie nail Paint', 100],
    ['Shinie nail Paint', 250],
    ['Esbeda Wallet',250]
]

const nonPremiumProducts = products.filter(product => product[1] <= 300)
// console.log(nonPremiumProducts)
    .map(product => [product[0].toUpperCase(), product[1]])
    .reduce((stocks, currentProduct)=>{
        let stockItem = stocks.find(item => item[0] == currentProduct[0])
        if(!stockItem)
            stocks.push([currentProduct[0],1])
        else
            ++stockItem[1]
        return stocks
    }
    ,[])

console.log(nonPremiumProducts)