const addForm = document.querySelector('.add');
const list = document.querySelector('.to-dos');
const searchField = document.querySelector('.search input');

const generateTemplate = toDo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const newToDo = addForm.add.value.trim();

    if (newToDo.length) {
        generateTemplate(newToDo);
        addForm.reset();
    }
});

// delete to do's
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filteredToDos = (userSearch) => {
    Array.from(list.children)
        .filter(task => !task.textContent.toLowerCase().includes(userSearch))
        .forEach(filteredTask => {
            filteredTask.classList.add('filteredOut');
            filteredTask.classList.remove('d-flex');
        });

    Array.from(list.children)
        .filter(task => task.textContent.toLowerCase().includes(userSearch))
        .forEach(filteredTask => {
            filteredTask.classList.remove('filteredOut');
            filteredTask.classList.add('d-flex');
        });
};

// keyup event
searchField.addEventListener('keyup', () => {
    const term = searchField.value.trim().toLowerCase();
    filteredToDos(term);
});