$(function(){

    // 签名
    console.log('%c\n'+
                '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n'+
                '@@@@@@@@@@@@@@@*.@.     @@@@@@@@@@@@@@@@@@@@@@@@@@@@**@@@@@@@*@@@@@@@@@@@@@@\n'+
                '@@@@@@@@@@@@@.  @@@@@. @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ .@@@@@@  @@@@@@@@@@@@@@\n'+
                '@@@@@@@@@@@@*   .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@. @@@@@@@ *@@@@@@@@@@@@@@\n'+
                '@@@@@@@@@@@@@      .*@@@@@@@* .*   *@@@*  @. .@@.    @  .    @. .@@@@@@@@@@@\n'+
                '@@@@@@@@@@@@@@*.      .*@@@  .@@@ .@@@   @@@   *@@@  @**@@@  @@*@@@@@@@@@@@@\n'+
                '@@@@@@@@@@@@@@@@@@*.     @.  @@@@@@@@.  *@@@@   @@*  @@@@@@  *@@@@@@@@@@@@@@\n'+
                '@@@@@@@@@@@@@ .@@@@@@*   .   *@@@@@@@.  @@@@@  .@@*  @*@@@@  .@*@@@@@@@@@@@@\n'+
                '@@@@@@@@@@@*    .@@@@@   @*   .***  @@   @@@  *@@@*    *@@@    .@@@@@@@@@@@@\n'+
                '@@@@@@@@@@@@@*     *. .@@@@@*.   .*@@@@. .@.*@@@@@@ .*@@@@@..*@@@@@@@@@@@@@@\n'+
                '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n',
                'color:#ff3355');

    // 播放器
    setTimeout(function(){
        if($('#musicContainer').css('display') !== "none"){
            if(!$('#musicContent').find('iframe').length){
                $('#musicContent').append('<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="http://music.163.com/outchain/player?type=0&id=317921676&auto=0&height=430"></iframe>');
            }
        }
    },7000);
    $('#musicSwitch').on('click',function(){
        $(this).hasClass('active')?$(this).removeClass('active'):$(this).addClass('active');
        if(!$('#musicContent').find('iframe').length){
            $('#musicContent').append('<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="http://music.163.com/outchain/player?type=0&id=317921676&auto=0&height=430"></iframe>');
        }
    });

    // 图片延迟加载
    $("img.lazy").unveil(1000);
    $('.post-listing').scroll(function(){
        $(window).trigger('scroll');
    });

    // 返回按钮
    $('a','.back-home').on('click',function(){
        if(window.history.length > 1){
            window.history.back();
        }else{
            window.location.href = 'http://www.chengfeilong.com';
        }
    });
});
