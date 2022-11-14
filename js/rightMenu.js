let kk = {};

kk.showRightMenu = function(isTrue, x=0, y=0){
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top',x+'px').css('left',y+'px');

    if(isTrue){
        $rightMenu.show();
    }else{
        $rightMenu.hide();
    }
}

let rmWidth = $('#rightMenu').width();
let rmHeight = $('#rightMenu').height();
window.oncontextmenu = function(event){
    let pageX = event.clientX + 10;	//加10是为了防止显示时鼠标遮在菜单上
    let pageY = event.clientY;
    
    // 鼠标默认显示在鼠标右下方，当鼠标靠右或考下时，将菜单显示在鼠标左方\上方
    if(pageX + rmWidth > window.innerWidth){
        pageX -= rmWidth;
    }
    if(pageY + rmHeight > window.innerHeight){
        pageY -= rmHeight;
    }
    
    kk.showRightMenu(true, pageY, pageX);
    $('#rightmenu-mask').attr('style','display: flex');
    return false;
};

function RemoveRightMenu(){
    kk.showRightMenu(false);
    $('#rightmenu-mask').attr('style','display: none');
}

$('#menu-backward').on('click',function(){window.history.back();});
$('#menu-forward').on('click',function(){window.history.forward();});
$('#menu-refresh').on('click',function(){window.location.reload();});

kk.switchDarkMode = function(){
    RemoveRightMenu();
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        activateDarkMode()
        saveToLocal.set('theme', 'dark', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    } else {
        activateLightMode()
        saveToLocal.set('theme', 'light', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
};

$('#menu-darkmode').on('click',kk.switchDarkMode);

$('#menu-home').on('click',function(){window.location.href = window.location.origin;});


//音乐灵动岛
const metingJs = document.querySelector("#nav-music meting-js");
//判断是否是音乐
if (metingJs.contains(event.target)) {
} else {
}