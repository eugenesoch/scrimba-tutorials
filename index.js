let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let all = 0
let allAll = 0

function increment() {
    count += 1
    countEl.textContent = count
    all = count

}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    allAll = +allAll + +all
    totalEl.textContent = allAll
    count = 0
    countEl.textContent = 0
    totalEl.textContent + all
    
}

