const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => addNew());

function addNew(text = ''){
    const note = document.createElement('div');
    note.innerHTML = `
    <div class="tools">
        <button class="edit">edit</button>
    </div>
    <textarea class="${text ? "hidden" : ""}"></textarea>   
    `
}