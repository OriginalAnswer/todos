bm.addEventListener('click', function(){
    const slider = document.getElementById('slider');
    slider.style.transform = 'translateX(+100%)';
    bm.style.backgroundColor = 'rgb(219, 219, 219)';
    bd.style.backgroundColor = 'rgb(245,245,245)';
    bw.style.backgroundColor = '';
})
bd.addEventListener('click', function(){
    const slider = document.getElementById('slider');
    slider.style.transform = 'translateX(0)';
    bm.style.backgroundColor = '';
    bd.style.backgroundColor = 'rgb(219, 219, 219)';
    bw.style.backgroundColor = '';
})
bw.addEventListener('click', function(){
    const slider = document.getElementById('slider');
    slider.style.transform = 'translateX(-100%)';
    bm.style.backgroundColor = '';
    bd.style.backgroundColor = 'rgb(245,245,245)';
    bw.style.backgroundColor = 'rgb(219, 219, 219)';
})