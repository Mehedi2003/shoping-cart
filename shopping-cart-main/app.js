    function updateProductNumber(Product, increasing,TotalitemName,Price){
    const ProductInput = document.getElementById(Product);
    let ProductInputNumber = ProductInput.value;
    if(increasing == true){
      ProductInputNumber = parseInt(ProductInputNumber) + 1;
    }
    else if(ProductInputNumber > 0){
        ProductInputNumber = parseInt(ProductInputNumber) - 1;
    }
    ProductInput.value = ProductInputNumber
    //update case total
    const ProductTotal = document.getElementById(TotalitemName);
    ProductTotal.innerText = ProductInputNumber * Price;
    //total calculate
    calculateTotal();
    }
    ///total
    function getInputValue(product) {
        const productInput = document.getElementById(product);
        const productNumber = parseInt(productInput.innerText);
        return productNumber;
    }
    // calculate
    function calculateTotal() {
        const phoneTotal = getInputValue('phoneTotal');
        const caseTotal = getInputValue('case-total');
        const subTotal = phoneTotal + caseTotal;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;
        // update on the html
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-amount').innerText = totalPrice;
    }
    


    //1st mobile increse decrese



    document.getElementById('phoneplus').addEventListener('click', function(){
        let firstprice = 1200;
        updateProductNumber('iphoneNumber', true,'phoneTotal', firstprice);
    });
    document.getElementById('phoneMinus').addEventListener('click', function(){
        let firstprice = 1200;
        updateProductNumber('iphoneNumber', false,'phoneTotal', firstprice);
    });
    // second mobile increse decrese
    document.getElementById('caseplus').addEventListener('click', function(){
        let secondprice = 50;
        updateProductNumber('caseNumber', true, 'case-total', secondprice);
    });
    document.getElementById('caseminus').addEventListener('click', function(){
        let secondprice = 50;
        updateProductNumber('caseNumber', false,'case-total', secondprice);
    })
///total buing cost calculate

