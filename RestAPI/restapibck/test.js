/*let current = new Date();
let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
let dateTime = cDate + ' ' + cTime;
console.log(dateTime);*/

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const day = date.getDate();
const hour =  date.getHours();
const startDate = new Date(year, month, day, hours);
const endDate = new Date(year, month + 1, 0);

console.log(startDate)