//1 Fecha Actual
let date = new Date();
aler
t( date );
// 2 La hora en tu zona horaria actual
alert( date.getMonth());

// 3 la hora respecto de la zona horaria UTC+0 (Hora de Londres sin horario de verano)
alert( date.getFullYear());
const array = [
  { id: 1, fecha: "2022-10-22"},
  { id: 2, fecha: "2021-1-16"},
  { id: 3, fecha: "2022-5-18"}
];

const filtered = array.filter(function(element){
  console.log( element.fecha === fecha.getFullYear());
});