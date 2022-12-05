// const addBtn = document.getElementById('add');

// addBtn.addEventListener('click', () => addNew());

// function addNew(text = ''){
//     const note = document.createElement('div');
//     note.innerHTML = `
//     <div class="tools">
//         <button class="edit">edit</button>
//     </div>
//     <textarea class="${text ? "hidden" : ""}"></textarea>   
//     `
// }
const dInput = document.querySelector('#d-input');
const dForm = document.querySelector('#d-form');
const dList = document.querySelector('#d-list');

const D_TODOS_KEY = 'today list';
const d_savedTodo = localStorage.getItem(D_TODOS_KEY);
let dArr = [];

if(d_savedTodo !== null){
    const parsedTodos = JSON.parse(d_savedTodo);
    todos = parsedTodos;
    dArr = todos; //새로고침 해결부분!!!!
    parsedTodos.forEach(dPrint);
}
function dSave(){localStorage.setItem(D_TODOS_KEY, JSON.stringify(dArr));}
function dDelete(e){
    const li = event.target.parentElement;
    li.remove();
    dArr = dArr.filter(a => a.id !== parseInt(li.id));
    dSave();
}
function dPrint(n){
    const li = document.createElement('div');
    li.id = n.id;
    li.classList.add('li');
    const span = document.createElement('span');
    span.innerText = n.text;
    const btn = document.createElement('span');
    btn.classList.add('delete-btn');
    btn.innerText = 'x';
    btn.addEventListener("click", dDelete);
    li.appendChild(span);
    li.appendChild(btn);
    dList.appendChild(li);
}
function dSubmit(e){
    e.preventDefault();
    const newtodo = dInput.value;
    dInput.value = "";
    const newtodoObj = {
        text:newtodo,
        id:Date.now(),
    }
    dArr.push(newtodoObj);
    dPrint(newtodoObj);
    dSave();
}

dForm.addEventListener('submit', dSubmit);
// ----------------------------------------------
const wInput = document.querySelector('#w-input');
const wForm = document.querySelector('#w-form');
const wList = document.querySelector('#w-list');

const W_TODOS_KEY = 'week list';
const w_savedTodo = localStorage.getItem(W_TODOS_KEY);
let wArr = [];

if(w_savedTodo !== null){
    const parsedTodos = JSON.parse(w_savedTodo);
    todos = parsedTodos;
    wArr = todos; //새로고침 해결부분!!!!
    parsedTodos.forEach(wPrint);
}
function wSave(){localStorage.setItem(W_TODOS_KEY, JSON.stringify(wArr));}
function wDelete(e){
    const li = event.target.parentElement;
    li.remove();
    wArr = wArr.filter(a => a.id !== parseInt(li.id));
    wSave();
}
function wPrint(n){
    const li = document.createElement('div');
    li.id = n.id;
    li.classList.add('li');
    const span = document.createElement('span');
    span.innerText = n.text;
    const btn = document.createElement('span');
    btn.classList.add('delete-btn');
    btn.innerText = 'x';
    btn.addEventListener("click", wDelete);
    li.appendChild(span);
    li.appendChild(btn);
    wList.appendChild(li);
}
function wSubmit(e){
    e.preventDefault();
    const newtodo = wInput.value;
    wInput.value = "";
    const newtodoObj = {
        text:newtodo,
        id:Date.now(),
    }
    wArr.push(newtodoObj);
    wPrint(newtodoObj);
    wSave();
}

wForm.addEventListener('submit', wSubmit);
// ----------------------------------------------
const mInput = document.querySelector('#m-input');
const mForm = document.querySelector('#m-form');
const mList = document.querySelector('#m-list');

const M_TODOS_KEY = 'month list';
const m_savedTodo = localStorage.getItem(M_TODOS_KEY);
let mArr = [];

if(m_savedTodo !== null){
    const parsedTodos = JSON.parse(m_savedTodo);
    todos = parsedTodos;
    mArr = todos; //새로고침 해결부분!!!!
    parsedTodos.forEach(mPrint);
}
function mSave(){localStorage.setItem(M_TODOS_KEY, JSON.stringify(mArr));}
function mDelete(e){
    const li = event.target.parentElement;
    li.remove();
    mArr = mArr.filter(a => a.id !== parseInt(li.id));
    mSave();
}
function mPrint(n){
    const li = document.createElement('div');
    li.id = n.id;
    li.classList.add('li');
    const span = document.createElement('span');
    span.innerText = n.text;
    const btn = document.createElement('span');
    btn.classList.add('delete-btn');
    btn.innerText = 'x';
    btn.addEventListener("click", mDelete);
    li.appendChild(span);
    li.appendChild(btn);
    mList.appendChild(li);
}
function mSubmit(e){
    e.preventDefault();
    const newtodo = mInput.value;
    mInput.value = "";
    const newtodoObj = {
        text:newtodo,
        id:Date.now(),
    }
    mArr.push(newtodoObj);
    mPrint(newtodoObj);
    mSave();
}

mForm.addEventListener('submit', mSubmit);