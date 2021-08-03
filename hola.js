//alert("hola")
//console.log("salud");

//console.log(typeof edad); saber que tipo de dato se ingreso

//let edad = prompt("cual es tu edad?")

/*
edad=+edad;//truco para convertir en entero
console.log(typeof edad);

for (var i = edad; i >= 0; i--) {
	console.log(i);
}

arr.forEach(item =>
{
console.log(item);
});

let arr = ["uno","dos","tres"]
let obj={

	"nombre":"berly",
	"edad":"20",
	"estado":"soltero",
}
function agregar(item){
arr.push(obj);
console.log(arr);
}
*/
const $btn=document.getElementById('btn');
//const $btn=document.querySelector('#btn');//forma de llamar variables de html a js
$btn.addEventListener("click",saludo);
function saludo() {
	const cos= confirm("quieres salir?")
	if (cos==true) {
		
		console.log("saliendo");
		window.close();
	}
}

/*
const $email =document.getElementById('email');
const $pass =document.getElementById('pass');
let correo
let password

$mail.addEventListener("keypress",(e)=>
{
	correo.$email.value;
	console.log(correo);
}

	);
	*/