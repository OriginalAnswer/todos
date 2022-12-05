bd.addEventListener('click', function(){
    const slider = document.getElementById('slider');
    slider.style.transform = 'translateX(0)';
    // mdw.style.backgroundColor = 'gray';
})
bw.addEventListener('click', function(){
    const slider = document.getElementById('slider');
    slider.style.transform = 'translateX(-100%)';
})
bm.addEventListener('click', function(){
    const slider = document.getElementById('slider');
    slider.style.transform = 'translateX(+100%)';
})