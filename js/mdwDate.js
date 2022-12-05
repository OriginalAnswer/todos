function mdwBtn(){
    const date = new Date();
    const d = String(date.getDate());
    const m = String(date.getMonth()+1);
    bd.innerText = `${d}일`;
    bm.innerText = `${m}월`;
}
mdwBtn();