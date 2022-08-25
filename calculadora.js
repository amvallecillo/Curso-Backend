const moment =require ('moment')

const hoy=moment()

const nacimiento = moment("12/11/1988", "DD/MM/YYYY")

const difA= hoy.diff(nacimiento, 'years')

const difD= hoy.diff(nacimiento, "days");

console.log(difA,difD)