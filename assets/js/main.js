// adding extra price

function clicked(clickId, displayBtn) {
    document.getElementById(clickId).addEventListener('click', function() {

        const extraPrice = addExtraBtn(displayBtn);

        // check and set extra price

        if(clickId == 'memory_8' || clickId == 'delivery' ||clickId == 'storage_2'){
            extraPrice.innerText = 0;
        }
        else if(clickId == 'memory_16'){
            extraPrice.innerText = 180;
        }
        else if(clickId == 'storage_5'){
            extraPrice.innerText = 100;
        }
        else if(clickId == 'storage_1'){
            extraPrice.innerText = 180;
        }
        else if(clickId == 'delivery_fast'){
            extraPrice.innerText = 20;
        }

        // for total price

        totalPrice();
    })
}

// grabbing text id

function addExtraBtn(displayBtn) {
    const extraPrice = document.getElementById(displayBtn);
    return extraPrice;
}


// calculate total price

function totalPrice() {
    
    const memoryPrice = parseInt(document.getElementById('memory_price').innerText);
    const storagePrice = parseInt(document.getElementById('storage_price').innerText);
    const deliveryPrice = parseInt(document.getElementById('delivery_price').innerText);

    const total = 1299 + storagePrice + memoryPrice + deliveryPrice;

    document.getElementById('total_price').innerText = total;
    document.getElementById('promo_total').innerText = total;
}


// promo for discout

function promo(){
    document.getElementById('apply').addEventListener('click', function(){

        const promoInput = document.getElementById('promo');
        const promoTotal = document.getElementById('promo_total').innerText;
        if(promoInput.value == 'stevekaku'){
            let promoPrice = promoTotal * .8;
            document.getElementById('promo_total').innerText = promoPrice;
        }
        promoInput.value = '';
    })
}


// calling functions

clicked('memory_8', 'memory_price');
clicked('memory_16', 'memory_price');
clicked('storage_2', 'storage_price');
clicked('storage_5', 'storage_price');
clicked('storage_1', 'storage_price');
clicked('delivery', 'delivery_price');
clicked('delivery_fast', 'delivery_price');
promo();