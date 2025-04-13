const answersStore = localStorage.getItem("answer2") ?? "";
const sondageForm = document.querySelector("#sondage2 form");

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
    location.href = "sondage2.html";
});
noBtn.addEventListener("click", function(e){
    e.preventDefault();
    const dataAnswer = this.dataset.value;
    localStorage.setItem("answer1",dataAnswer);
    location.href = "sondage2.html";
});

sondageForm.addEventListener("submit", function(e){
    e.preventDefault();
    location.href = "sondage2.html";
});

