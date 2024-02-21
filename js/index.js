function buyNow() {
    const travel = document.getElementById('travels');
    travel.scrollIntoView({ behavior: "smooth" });
}

let seatCount = 0;
let totalPrice = 0;
let grandPrice = 0;

const seatPlan = document.getElementById('seat-plan');
const seats = seatPlan.querySelectorAll('.btn');

for (i = 0; i < seats.length; i++) {
    let allSeat = seats[i];
    allSeat.addEventListener('click', function () {

        allSeat.classList.add('pointer-events-none');
        allSeat.classList.add('bg-green');

        if (seatCount < 4) {
            const addElement = document.getElementById('list-container');
    
            const tr = document.createElement('tr');
            const tdSeat = document.createElement('td');
            tdSeat.innerText = allSeat.innerText;
            const tdClass = document.createElement('td');
            tdClass.innerText = 'Economy';
            const tdPrice = document.createElement('td');
            tdPrice.innerText = '550';

            tr.appendChild(tdSeat);
            tr.appendChild(tdClass);
            tr.appendChild(tdPrice);
            addElement.appendChild(tr);

            // const thId = getTextValueElementById('th-id');
            // console.log(typeof thId);

          
            // setTextElementById('th-id', updatedThId);

            const currentSeat = getTextValueElementById('total-seat');
            console.log(typeof currentSeat);

            const updatedSeat = currentSeat + 1;
            setTextElementById('total-seat', updatedSeat);

            const availableSeat = getTextValueElementById('available-seat');
            console.log(availableSeat);

            const leftSeat = availableSeat - 1;
            setTextElementById('available-seat', leftSeat);

            totalPrice = totalPrice + 550;
            setTextElementById('total-price', totalPrice);

            grandPrice = totalPrice;
            setTextElementById('grand-price', grandPrice);

        }
        if (seatCount < 5) {
            console.log(typeof seatCount);
            enabled('coupon-btn');
            alert('Maximum 4 tickets');
            return;
        }
        if (seatCount < 0) {
            enabled('next-btn');
        }

    })
}


const couponBtn = document.getElementById('coupon-btn');
couponBtn.addEventListener('click', function () {

    const couponCode = document.getElementById('input').value;

    if (couponCode === 'NEW15') {
        let coupon1 = (totalPrice * 15) / 100;

        grandInPrice = grandPrice - coupon1;

        setTextElementById('grand-price', grandInPrice);
        document.getElementById('input-field').classList.add('hidden');
    }
    else if (couponCode === 'Couple20') {
        const coupon2 = (totalPrice * 20) / 100;
        grandTotalPrice = grandPrice - coupon2;
        setTextElementById('grand-price', grandTotalPrice);
        document.getElementById('input-field').classList.add('hidden');
        return;
    }
    else {
        alert('Invalid Code! Please Enter a Valid Coupon Code')
    }
})

const phoneNumber = document.getElementById('phone-number');
phoneNumber.addEventListener('input', function () {
    const numberValue = parseInt(phoneNumber.value);
    if (seatCount > 0 && numberValue > -1) {
        enableBtn('next-btn');
    }

})