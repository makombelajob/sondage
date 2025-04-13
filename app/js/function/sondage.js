
const sondageForm = document.querySelector("#sondage form");

const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");

yesBtn.disabled = true;
noBtn.disabled = true;
setTimeout(() => {
   yesBtn.disabled = false;
   noBtn.disabled = false;
}, 2000);

yesBtn.addEventListener("click", function(e){
    e.preventDefault();
    const dataAnswer = this.dataset.value;
    localStorage.setItem("answer1",dataAnswer);

});
noBtn.addEventListener("click", function(e){
    e.preventDefault();
    const dataAnswer = this.dataset.value;
    localStorage.setItem("answer1",dataAnswer);

});

sondageForm.addEventListener("submit", function(e){
   e.preventDefault();

});

