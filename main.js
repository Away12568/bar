const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const box = document.querySelector(".box")
// const text = document.querySelector("h1")

function add() {

    if (input.value != "") {

        const newEL = document.createElement("p")

        newEL.innerText = input.value

        box.appendChild(newEL)

        input.value = ""

        newEL.addEventListener("click", () => {
            newEL.remove()
        })
    } else {
        alert("заполни ченить")
    }

}

btn.addEventListener("click", add)

input.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        add()
    }
})
