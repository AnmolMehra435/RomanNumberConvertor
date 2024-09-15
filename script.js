const output = document.querySelector(".output");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const result = document.querySelector(".output p")


const mainObj = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"]
]
  
function romanize(num){
  let roman = "";
  if(num === 0){
    return ""
  }
    for(let i = 0; i < mainObj.length; i++){
      if(num >= mainObj[i][0]){
        roman = mainObj[i][1];
        let value =  roman + romanize(num - mainObj[i][0]);
        return value
      }
    
    }
        
}


btn.onclick = () => {

if(input.value === "0" || input.value === ""){
  result.innerText = "Please enter a valid number"
  output.style.display = "block";
}else if(input.value < 0){
  result.innerText = "Please enter a number greater than or equal to 1"
   output.style.display = "block";
}else if(input.value >= 4000){
  result.innerText = "Please enter a number less than or equal to 3999"
   output.style.display = "block";
}else {
    let value = romanize(input.value);
    result.innerText = value;
    output.style.display = "block";   
}

}
