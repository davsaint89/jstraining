/* 
For a given array of products with prices, writye a JS function to filter
out the premium products. Products with price abover 300 are marked as premium
Apply a 15% discount on all the non-premium products.
Create a stock of each product type.
*/

const products = [
    ['Gucci Round Bucklet Belt', 400],
    ['Gucci Round Bucklet Belt', 450],
    ['Esbeda Wallet',250],
    ['Gucci Round Bucklet Belt', 300],
    ['Smiley T-Shirt', 500],
    ['Smiley T-Shirt', 50],
    ['Smiley T-Shirt', 250],
    ['Shinie nail Paint', 100]
]

const premiumProducts = products.filter(product => product[1] > 300)
console.log(premiumProducts)

const filteredProducts = products.filter( products => products[1] <= 300)

const nonPremiumProducts = filteredProducts.map(product => [product[0], product[1] - product[1]*15/100])

console.log(nonPremiumProducts)

//reduce recibe primero el callback y luego el valor inicial
// stocks es el acumulador que se computa cuando se hace la agregacion y el otro es el current value used
//
let productStock = products.reduce(( stocks, product) => {
    let stockItem = stocks.find(stock => stock[0] == product[0])
    if(!stockItem)
        stocks.push([product[0],1])
    else
        ++stockItem[1]
    return stocks
}, [])

console.log(productStock)