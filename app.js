// Item total Price Update function 
function updatePrice(displayId, givenPrice, currentQuantity) {
    const perUnitPrice = givenPrice;
    const displayPrice = document.getElementById(displayId);
    const totalPrice = perUnitPrice * currentQuantity;
    displayPrice.innerText = totalPrice;
}

// Item total Price Update with respect to Item quantity function
function updatingPriceWithQuantity(givenId, isIncreasing) {
    const previousQuantity = document.getElementById(givenId);
    const previousQuantityInNum = parseInt(previousQuantity.getAttribute('value'));


    if (isIncreasing == true) {
        const currentQuantity = previousQuantityInNum + 1;
        previousQuantity.setAttribute('value', currentQuantity);
        // updating price
        if (givenId == 'quantity-input-phone') {
            const perUnitPrice = 1219;
            updatePrice('phone-total-price', perUnitPrice, currentQuantity);
        }

        else if (givenId == 'quantity-input-case') {
            const perUnitPrice = 59;
            updatePrice('case-total-price', perUnitPrice, currentQuantity);
        }
    }

    else {
        const currentQuantity = previousQuantityInNum - 1;
        if (currentQuantity > 0) {
            previousQuantity.setAttribute('value', currentQuantity);
            if (givenId == 'quantity-input-phone') {
                const perUnitPrice = 1219;
                updatePrice('phone-total-price', perUnitPrice, currentQuantity);
            }

            else if (givenId == 'quantity-input-case') {
                const perUnitPrice = 59;
                updatePrice('case-total-price', perUnitPrice, currentQuantity);
            }
        }

    }
}

// For Plus buttons
document.getElementById('plus-btn-phone').addEventListener('click', function () {
    updatingPriceWithQuantity('quantity-input-phone', true);
})

document.getElementById('plus-btn-case').addEventListener('click', function () {
    updatingPriceWithQuantity('quantity-input-case', true);
})

// For minus buttons

document.getElementById('minus-btn-phone').addEventListener('click', function () {
    updatingPriceWithQuantity('quantity-input-phone', false);
})

document.getElementById('minus-btn-case').addEventListener('click', function () {
    updatingPriceWithQuantity('quantity-input-case', false);
})