const form = document.querySelector(".main form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const text = form.querySelector("input").value
    if (text) {
        createTask(text)
        form.querySelector("input").value = ""
        form.querySelector("input").focus()
    }
})

function createTask(text) {
    const template = document.querySelector(".template")
    const newTask = template.cloneNode(true)
    newTask.classList.remove("hide")
    newTask.classList.remove("template")
    newTask.querySelector("p").innerHTML = text
    const list = document.querySelector(".task-list")

    list.appendChild(newTask)

    newTask.querySelector(".done-btn").addEventListener("click", function () {
        done_function(this)
    })

    newTask.querySelector(".delete-btn").addEventListener("click", function () {
        delete_function(this)
    })

}



function done_function(btn) {
    const task = btn.closest("li")
    task.classList.toggle("done")
}

function delete_function(btn) {
    const task = btn.closest("li")
    task.classList.add("delete")
    setTimeout(() => {
        task.remove(true)
        console.log(document.querySelector("ul"))
    }, 1100)
}
