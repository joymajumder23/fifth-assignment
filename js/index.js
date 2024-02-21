function buyNow() {
    const travel = document.getElementById('travels');
    travel.scrollIntoView({ behavior: "smooth" });
}

let totalPrice = 0;
let grandPrice = 0;
let seatsCount = 0;

const seatPlan = document.getElementById('seat-plan');
const seats = seatPlan.querySelectorAll('.btn');

for (i = 0; i < seats.length; i++) {
    let allSeat = seats[i];
    allSeat.addEventListener('click', function () {
        
        allSeat.classList.add('pointer-events-none');
        
        let seatsTotal = document.getElementById('total-seat');
            const intSeat = seatsTotal.innerText;
            
            const seatsCount = parseInt(intSeat);
            console.log(seatsCount);
            
            if (seatsCount >= 4) {
                // console.log(typeof seatsCount);
                // console.log(seatsCount);
                enabled('coupon-btn');
                alert('Maximum 4 tickets');
                return; 
            }
            // if (seatsCount > 0) {
            //     console.log( seatsCount);
            //     enabled('next-btn');
            // }

           
        allSeat.classList.add('bg-green');

        if (seatsCount < 4) {
            
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

// const phoneNumber = document.getElementById('phone-number');
// phoneNumber.addEventListener('input', function () {
//     const numberValue = parseInt(phoneNumber.value);
//     if (seatsCount > 0 && numberValue > -1) {
//         console.log(numberValue);
//         enabled('next-btn');
//     }

// })

document.getElementById('phone-number').addEventListener('keyup', function(event){
    const inputText = event.target.value;
    const nextBtn = document.getElementById('next-btn');
    if(inputText.length === 11){
        nextBtn.removeAttribute('disabled');
    }
    else{
        nextBtn.setAttribute('disabled', true);
    }
})