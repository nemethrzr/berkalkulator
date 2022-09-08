const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];



// napok feltöltése a kalendáriumba
var dt = new Date();
var month = dt.getMonth();
var year = dt.getFullYear();


document.querySelector('.selectedDate').innerHTML = monthNames[month];














console.log('hónap:'+ monthNames[month] + ' hanyadik nap az adott héten: '+dt.getDay()+' '+dt.getFullYear());
console.log(dt.toLocaleDateString());
console.log(dt.toLocaleTimeString());
console.log(dt.toLocaleString());

console.log(dt.getDate());
console.log(dt.getDate());








var d = new Date(year, month, 0).getDate();












function renderCalendar(){

    

    let daysInMonth = new Date(year, month+1, 0).getDate();
    let calendar = document.querySelector('.content.calendar');
    calendar.innerHTML='';

    renderMonth();


    for(i=1;i<=daysInMonth;i++){
        calendar.innerHTML +=
        `<div class="day year${year} day${i}"><span>${i}</span></div>`;
    }
    

}

function renderMonth(){
    document.querySelector('.selectedDate').innerHTML = monthNames[month];
}



document.querySelector('.incrementDate').addEventListener('click',function(){
    month++;
    console.log(month);
    renderCalendar();
});

document.querySelector('.decrementDate').addEventListener('click',function(){
    month--;
    console.log(month);
    renderCalendar();
});

renderCalendar();