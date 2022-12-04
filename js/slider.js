bd.addEventListener('click', function(){
    const slider = document.getElementById('slider');
    slider.style.transform = 'translateX(0)';
    bd.style.backgroundColor = '  '
})
bw.addEventListener('click', function(){
    const slider = document.getElementById('slider');
    slider.style.transform = 'translateX(-100%)'
})
bm.addEventListener('click', function(){
    const slider = document.getElementById('slider');
    slider.style.transform = 'translateX(+100%)'
})