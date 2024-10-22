
// Start header
let toggleBtn =document.getElementById('toggle_btn');
let toggleBtnIcon =document.getElementById('toggle_btn_Icon');
let dropDownMenu =document.getElementById('dropdown_menu');


toggleBtn.onclick =function() {
  dropDownMenu.classList.toggle('open')
  const isOpen =dropDownMenu.classList.contains('open')
  toggleBtnIcon.classList =isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}
// ENd header

const inputs= document.querySelectorAll(".contact-input");

inputs.forEach(ipt =>{
  ipt.addEventListener("focus", ()  =>{
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("not-empty");
  });
  ipt.addEventListener("blur", ()  =>{
    if(ipt.value == ""){
      ipt.parentNode.classList.remove("not-empty");
    }
    ipt.parentNode.classList.remove("focus");
  });
});


const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});




