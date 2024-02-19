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
// function setBackgroundColor(setId){
//     const backgroundColor = document.getElementById(setId);
//     backgroundColor.classList.add('bg-green-500');
// }
// function removeBackgroundColor(setId){
//     const backgroundColor = document.getElementById(setId);
//     backgroundColor.classList.remove('bg-ash');
// }
// function setInnerText(id, value) {
//     document.getElementById(id).innerText = value;
// }

function disabled(id) {
    document.getElementById(id).disabled = true;

}

function enable(id) {
    document.getElementById(id).disabled = false;
}

// function enableBtn(id){
//     const btn = document.getElementById(id);
//     btn.removeAttribute('disabled');
// }