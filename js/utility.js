// function scrollDown(element){
//     const scroll = document.getElementById(element);
//     window.scrollTo(scroll);
// }
// const seatPlan = document.querySelectorAll('#seat-plan a');
// console.log(seatPlan);
// for(const seat of seatPlan){
//     seat.addEventListener('click', function(){
//         console.log('Clicked');
//     })
// }
function getTextValueElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value =   parseInt(elementValueText);
    return value;
}
function setTextElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function disabled(elementId) {
    document.getElementById(elementId).disabled = true;

}

function enabled(elementId) {
    document.getElementById(elementId).disabled = false;
}

// function enableBtn(elementId){
//     const btn = document.getElementById(id);
//     btn.removeAttribute('disabled');
// }