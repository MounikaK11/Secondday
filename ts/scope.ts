let num=20;
let getUser=function(){
	let name='jhonny';
	return name;
} 
console.log(getUser());

let sum=function(){
	let num=20;
	return function subNum(){
	return num+10;
	}
}
 console.log(sum());
 