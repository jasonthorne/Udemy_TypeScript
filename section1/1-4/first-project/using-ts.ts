const button = document.querySelector("button");
// ! says we know that type will alway match. we then cast it to HTMLInputElement obj
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1:number, num2:number):number {
  return this.num1 + this.num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value)); //plus converts string to number 
});
