$(function(){
    $('#musicSwitch').on('click',function(){
        $(this).hasClass('active')?$(this).removeClass('active'):$(this).addClass('active');
        //debugger;
        if(!$('#musicContent').find('iframe').length){
            $('#musicContent').append('<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="http://music.163.com/outchain/player?type=0&id=317921676&auto=0&height=430"></iframe>');
        }
    });
});