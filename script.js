// manubar toggle 
document.getElementById("manubar").addEventListener("click", function () {
    document.getElementById("manu-items").style.top = "0";

})
document.getElementById("manubar-hidden").addEventListener("click", function () {
    document.getElementById("manu-items").style.top = "-500px";

})


// heart count 
const totalHeart = document.getElementById("heart");
const icons = document.querySelectorAll(".heart-icon");
let count = 0;
for (const icon of icons) {
    // console.log(icon)
    icon.addEventListener("click", function () {
        count++;
        totalHeart.innerText = count;
    })

}


// call button acction 
const callBtns = document.querySelectorAll(".call-btn");
for (const callBtn of callBtns) {
    callBtn.addEventListener("click", function () {
        // blance check 
        const totalCoin = document.getElementById("total-coin").innerText;
        if (totalCoin < 20) {
            return alert("insufficient Blance")
        }
        // coin reduce 
        let newTotalCoin = totalCoin - 20;
        document.getElementById("total-coin").innerText = newTotalCoin;

         // calling alert 
        let card = this.closest(".card")
        console.log(card)
        let serviceName = card.querySelector(".servic-name").innerText;
        let ServiceNumber = card.querySelector(".number").innerText;
        alert(`calling ${serviceName} ${ServiceNumber}......`)
    })

}
