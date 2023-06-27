const products = [
    ['Gucci Round Bucklet Belt', 300],
    ['Gucci Round Bucklet Belt', 300],
    ['Smiley T-Shirt', 50],
    ['Shinie nail Paint', 10]
]

/*Usando map funnnction la data original sigue intacta, esa es la diferencia de usar el for en 
vez de usar map, con form si se modifica la data original*/

const calculateDiscountedPrice = discount => products.map(
    product => [product[0], product[1]-product[1]*discount/100]
)

let discountedPrices = calculateDiscountedPrice(10)
console.log(products)
console.log(discountedPrices)



