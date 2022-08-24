window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    const list = document.querySelector("#tasks")

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const task = input.value;

        if(!task) {
            alert("Iltimos vazifa kiritng");
            return
        }

        const itemTask = document.createElement("div")
        itemTask.classList.add("task");

        const itemTaskContent = document.createElement("div");
        itemTaskContent.classList.add("content")
        // itemTaskContent.innerText = task;

        itemTask.appendChild(itemTaskContent);

        const taskInputEl = document.createElement("input");
        taskInputEl.classList.add("add")
        taskInputEl.type = "text"
        taskInputEl.value = task;
        taskInputEl.setAttribute("readonly", "readonly")
        itemTaskContent.appendChild(taskInputEl)

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions")

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit")
        task_edit_el.innerHTML = "Tahrirlash"

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete")
        task_delete_el.innerHTML = "O'chirish"

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        itemTask.appendChild(task_actions_el)

        list.appendChild(itemTask)

        input.value = "";

        task_edit_el.addEventListener("click", () => {
            if( task_edit_el.innerText.toLowerCase() == "edit") {
                taskInputEl.removeAttribute("readonly");
                taskInputEl.focus();
                task_edit_el.innerText = "Saqlash"
            }else {
                taskInputEl.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit"
            }
        })

        task_delete_el.addEventListener("click", () => {
            list.removeChild(itemTask)
        })
    })
})