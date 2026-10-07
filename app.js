const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');
const summary = document.querySelector('#summary');
const clearDone = document.querySelector('#clear-done');
const storageKey = 'my-task-tracker-v1';

let tasks = JSON.parse(localStorage.getItem(storageKey) || '[]');

function saveAndRender() {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
  list.replaceChildren();
  tasks.forEach((task) => {
    const row = document.createElement('li');
    row.className = task.done ? 'done' : '';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.setAttribute('aria-label', `Mark ${task.text} complete`);
    checkbox.addEventListener('change', () => {
      task.done = checkbox.checked;
      saveAndRender();
    });
    const label = document.createElement('span');
    label.textContent = task.text;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'delete';
    remove.textContent = '×';
    remove.setAttribute('aria-label', `Delete ${task.text}`);
    remove.addEventListener('click', () => {
      tasks = tasks.filter((item) => item.id !== task.id);
      saveAndRender();
    });
    row.append(checkbox, label, remove);
    list.append(row);
  });
  const open = tasks.filter((task) => !task.done).length;
  summary.textContent = tasks.length ? `${open} task${open === 1 ? '' : 's'} left` : 'No tasks yet. Add one above to get started.';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  tasks.unshift({ id: crypto.randomUUID(), text, done: false });
  input.value = '';
  saveAndRender();
  input.focus();
});

clearDone.addEventListener('click', () => {
  tasks = tasks.filter((task) => !task.done);
  saveAndRender();
});

saveAndRender();
