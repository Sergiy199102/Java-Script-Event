document.getElementById('todoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let text = document.getElementById('text').value;

    if (title && text) {
        let taskList = document.getElementById('taskList');
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${text}</p>
        <button class="delete-btn">Delete Task</button>
      `;
        taskList.appendChild(taskDiv);

        document.getElementById('title').value = '';
        document.getElementById('text').value = '';

        let deleteBtn = taskDiv.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function () {
            taskDiv.remove();
        });
    }
});
