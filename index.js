
let titleCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll('.card');


for (let index = 0; index < cards.length; index++) {
    const card = cards[index];

    card.addEventListener('click', function () {
        console.log("clicked");

        //get the title

        const title = card.querySelector('h3').innerText;
        //here i am getting thr location and then getting the inner text and splitting it to remove the $ sign and [1] to access the 1st index element 
        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        //used parsefloat to convert the sting to float 
        // console.log(price);
        const titleContainer = document.getElementById('title-container');

        const p = document.createElement('p');
        p.innerText = titleCount + '.' + title;
        titleCount++;
        titleContainer.appendChild(p);

        //Calculating price

        totalPrice += price;
        //injecting the total price at the designated location
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);

    })
}

const btn = document.getElementById('apply-btn');

btn.addEventListener('click', function () {

    // get the value from the input field

    const couponElement = document.getElementById('input-field').value;

    const couponCode = couponElement.split(' ').join('').toUpperCase();

    
    if(totalPrice>=200)
    {
        if(couponCode === 'SELL200')
        {
            //discount calculation
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);

            // final calculation with discount
            const restTotal = document.getElementById('total');

            restTotal.innerText = totalPrice - discountAmount.toFixed(2);

            document.getElementById('input-field').value = "";
        }
        else
        {
            alert('invalid couponCode');
            document.getElementById('input-field').value = "";
        }
    }
    else
    {
        alert('Ato vikari kan vai tui');
        document.getElementById('input-field').value = "";
    }

})


