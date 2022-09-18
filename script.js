let total = document.getElementById('total_count');
let likes = document.getElementById('like_number');
let dislikes = document.getElementById('dislike_number');
let count = document.getElementsByClassName('count')[0];
let like_btn = document.getElementsByClassName('like')[0];
let dislike_btn = document.getElementsByClassName('dislike')[0];


like_btn.addEventListener('click',function(){
    let total_num = total.innerText;
    total.innerText = ++total_num;
    likes.innerText = ++ likes.innerText;
    count.style.display = 'block';
})


dislike_btn.addEventListener('click',function(){
    total.innerText = ++total.innerText;
    dislikes.innerText = ++dislikes.innerText;
    count.style.display = 'block';
})


