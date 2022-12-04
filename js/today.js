function thisd(){
    const date = new Date();
    const d = String(date.getDate());
    bd.innerText = `${d}일`;
}
thisd();