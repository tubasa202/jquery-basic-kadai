$(function(){
    //class属性がbtn要素がクリックされたら
    $('.btn').on('click',function(){
    //inputにクリックされましたと表示させる
        $('.text-box').val("クリックしました！");
    });
});