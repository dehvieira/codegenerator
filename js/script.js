let sliderElement = document.querySelector("#rangecode");
let btnElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value")
let passwordGenerated = document.querySelector("#password-generated");


let boxPassword = document.querySelector("#password");

const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%@";
const newPassword = "";

sizePassword.innerHTML = sizePassword.value;

rangecode.oninput = function(){
      sizePassword.innerHTML = this.value;
     
}

function  generatedPassword(){
      let pass = "";

      for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
            pass += charset.charAt(Math.floor(Math.random() * n))
      }       
     
      boxPassword.classList.remove('hide')
      passwordGenerated.innerHTML = pass;
}

new ClipboardJS('.btn');



