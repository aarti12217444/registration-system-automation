const form=document.getElementById("regForm");
const btn=document.getElementById("btn");

form.addEventListener("input",check);

function check(){
  let ok =
    fname.value &&
    lname.value &&
    email.value.includes("@") &&
    phone.value.length>=10 &&
    pass.value &&
    pass.value===cpass.value &&
    document.querySelector('input[name="gender"]:checked') &&
    terms.checked;

  btn.disabled=!ok;
}

form.addEventListener("submit",e=>{
  e.preventDefault();
  msg.innerText="Registration Successful!";
  form.reset();
  btn.disabled=true;
});