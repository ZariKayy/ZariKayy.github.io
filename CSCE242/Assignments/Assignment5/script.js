function displayResult() {
    const firstName = document.getElementById("txt-first-name").value;
    const lastName = document.getElementById("txt-last-name").value;
    const productName = document.getElementById("txt-product-name").value;
    const productCount = parseInt(document.getElementById("txt-product-count").value);
    const productPrice = parseFloat(document.getElementById("txt-product-price").value).toFixed(2);
    let result = document.getElementById("results");
    let total = document.getElementById("total");

    var taxTotal =(productCount * productPrice) + (productPrice * 0.07);
    taxTotal = taxTotal.toFixed(2);

    console.log(`${firstName} ${lastName} ordered ${productCount} ${productName}`);
    result.innerHTML = (`${firstName} ${lastName} ordered ${productCount} ${productName}`);
    total.innerHTML = (` Totalling: $${taxTotal}`)

}



const btnCalculate = document.getElementById("btn-calculate");
btnCalculate.onclick = displayResult;