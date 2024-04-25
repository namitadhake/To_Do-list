function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== '') {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = '';

        li.onclick = function() {
            this.classList.toggle("completed");
        };

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.onclick = function() {
            this.parentNode.remove();
        };
        li.appendChild(deleteButton);
    } else {
        alert("Please enter a task!");
    }
}
