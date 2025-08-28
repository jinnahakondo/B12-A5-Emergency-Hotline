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

// copy button 
const copyBtns = document.querySelectorAll(".copy-btn");
let copyCount = 0;
for (const copyBtn of copyBtns) {
    copyBtn.addEventListener("click", async function () {
        copyCount++;
        let totalCopy = document.getElementById("copy-btn");
        totalCopy.innerText = copyCount;
        // number access 
        let card = this.closest(".card");
        let ServiceNumber = card.querySelector(".number").innerText;
        await navigator.clipboard.writeText(ServiceNumber)
        alert(`${ServiceNumber} Copyed!`)
    })
}
// call button 
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

        // console.log(card)
        let serviceName = card.querySelector(".servic-name").innerText;
        let ServiceNumber = card.querySelector(".number").innerText;
        alert(`calling ${serviceName} ${ServiceNumber}......`)

        // history 
        let time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
        console.log(time)
        const div = document.createElement("div");
        div.classList.add("history-box");
        div.innerHTML = `
        <!-- left side  -->
                    <div>
                        <h4 class="service-title">${serviceName}</h4>
                        <p class="service-number">${ServiceNumber}</p>
                    </div>
                    <!-- right side time  -->
                    <div>
                        <p>${time}</p>
                    </div>
        `;
        document.getElementById("history-box").prepend(div)
    })

}

// clear history
document.getElementById("clear-btn").addEventListener("click", () => {
    let historyBox = document.getElementById("history-box");
    historyBox.innerHTML = "";
})
