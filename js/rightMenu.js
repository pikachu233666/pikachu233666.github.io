function setMask(){//设置遮罩层
    if(document.getElementsByClassName("gabrielMask")[0]!=undefined){
        return document.getElementsByClassName("gabrielMask")[0];
    }
    mask = document.createElement('div');
    mask.className = "gabrielMask";
    mask.style.width = window.innerWidth + 'px';
    mask.style.height = window.innerHeight + 'px';
    mask.style.background = '#fff';
    mask.style.opacity = '.0';
    mask.style.position = 'fixed';
    mask.style.top = '0';
    mask.style.left = '0';
    mask.style.zIndex = 998;
    document.body.appendChild(mask);
    document.getElementById("rightMenu").style.zIndex=19198;
    return mask;
}

function insertAtCursor(myField, myValue) {

    //IE 浏览器
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
        sel.select();
    }

    //FireFox、Chrome等
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;

        // 保存滚动条
        var restoreTop = myField.scrollTop;
        myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);

        if (restoreTop > 0) {
            myField.scrollTop = restoreTop;
        }

        myField.focus();
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
    } else {
        myField.value += myValue;
        myField.focus();
    }
}
let gabriel = {};
gabriel.showRightMenu = function (isTrue, x = 0, y = 0) {
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top', x + 'px').css('left', y + 'px');

    if (isTrue) {
        $rightMenu.show();
    } else {
        $rightMenu.hide();
    }
}
gabriel.switchDarkMode = function () {
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
gabriel.copyWordsLink = function () {
    let url = window.location.href
    let txa = document.createElement("textarea");
    txa.value = url;
    document.body.appendChild(txa)
    txa.select();
    document.execCommand("Copy");
    document.body.removeChild(txa);
    Snackbar.show({
        text: '链接复制成功！快去分享吧！',
        pos: 'top-right',
        showAction: false
    });
}
gabriel.switchReadMode = function () {
    const $body = document.body
    $body.classList.add('read-mode')
    const newEle = document.createElement('button')
    newEle.type = 'button'
    newEle.className = 'fas fa-sign-out-alt exit-readmode'
    $body.appendChild(newEle)

    function clickFn() {
        $body.classList.remove('read-mode')
        newEle.remove()
        newEle.removeEventListener('click', clickFn)
    }

    newEle.addEventListener('click', clickFn)
}

//复制选中文字
gabriel.copySelect = function () {
    document.execCommand('Copy', false, null);
    //这里可以写点东西提示一下 已复制
}

//回到顶部
gabriel.scrollToTop = function () {
    document.getElementsByClassName("menus_items")[1].setAttribute("style","");
    document.getElementById("name-container").setAttribute("style","display:none");
    btf.scrollToDest(0, 500);
}
document.body.addEventListener('touchmove', function(e){
    
}, { passive: false });
function popupMenu() {
    //window.oncontextmenu=function(){return false;}
    window.oncontextmenu = function (event) {
        if(event.ctrlKey)return true;
        
        $('.rightMenu-group.hide').hide();
        if (document.getSelection().toString()) {
            $('#menu-text').show();
        }
        if (document.getElementById('post')) {
            $('#menu-post').show();
        } else {
            if (document.getElementById('page')) {
                $('#menu-post').show();
            }
        }
        var el = window.document.body;
        el = event.target;
        var a=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
        if (a.test(window.getSelection().toString())&&el.tagName!="A"){
            $('#menu-too').show()
        }
        if (el.tagName == 'A') {
            $('#menu-to').show()
            gabriel.open = function () {
                if(el.href.indexOf("http://")==-1&&el.href.indexOf("https://")==-1||el.href.indexOf("yisous.xyz")!=-1){
                    pjax.loadUrl(el.href)
                }
                else{
                    location.href = el.href
                }
            }
            gabriel.openWithNewTab = function () {
                window.open(el.href);
                // window.location.reload();
            }
            gabriel.copyLink = function () {
                let url = el.href
                let txa = document.createElement("textarea");
                txa.value = url;
                document.body.appendChild(txa)
                txa.select();
                document.execCommand("Copy");
                document.body.removeChild(txa);
            }
        }
        if (el.tagName == 'IMG') {
            $('#menu-img').show()
            gabriel.openWithNewTab = function () {
                window.open(el.src);
                // window.location.reload();
            }
            gabriel.click = function () {
                el.click()
            }
            gabriel.copyLink = function () {
                let url = el.src
                let txa = document.createElement("textarea");
                txa.value = url;
                document.body.appendChild(txa)
                txa.select();
                document.execCommand("Copy");
                document.body.removeChild(txa);
            }
            gabriel.saveAs=function(){
                var a = document.createElement('a');
                var url = el.src;
                var filename = url.split("/")[-1];
                a.href = url;
                a.download = filename;
                a.click();
                window.URL.revokeObjectURL(url);
            }
        } else if (el.tagName == "TEXTAREA" || el.tagName == "INPUT") {
            $('#menu-paste').show();
            // gabriel.paste=function(){
            //     input.addEventListener('paste', async event => {
            //         event.preventDefault();
            //         const text = await navigator.clipboard.readText();
            //         el.value+=text;
            //       });
            // }
            gabriel.paste = function () {
                navigator.pegabrielissions
                    .query({
                        name: 'clipboard-read'
                    })
                    .then(result => {
                        if (result.state == 'granted' || result.state == 'prompt') {
                            //读取剪贴板
                            navigator.clipboard.readText().then(text => {
                                console.log(text)
                                insertAtCursor(el, text)
                            })
                        } else {
                            Snackbar.show({
                                text: '请允许读取剪贴板！',
                                pos: 'top-center',
                                showAction: false,
                            })
                        }
                    })
            }
        }
        let pageX = event.clientX + 10;
        let pageY = event.clientY;
        let gabrielWidth = $('#rightMenu').width();
        let gabrielHeight = $('#rightMenu').height();
        if (pageX + gabrielWidth > window.innerWidth) {
            pageX -= gabrielWidth + 10;
        }
        if (pageY + gabrielHeight > window.innerHeight) {
            pageY -= pageY + gabrielHeight - window.innerHeight;
        }
        mask=setMask();
        window.onscroll=()=>{
            gabriel.showRightMenu(false);
            window.onscroll=()=>{}
            document.body.removeChild(mask);
        }
        $(".rightMenu-item").click(()=>{
            document.body.removeChild(mask);
        })
        $(window).resize(()=>{
            gabriel.showRightMenu(false);
            document.body.removeChild(mask);
        })
        mask.onclick=()=>{
            document.body.removeChild(mask);
        }
        gabriel.showRightMenu(true, pageY, pageX);
        return false;
    };

    window.addEventListener('click', function () {
        gabriel.showRightMenu(false);
    });
}
if (!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    popupMenu()
}
const box = document.documentElement

function addLongtabListener(target, callback) {
    let timer = 0 // 初始化timer

    target.ontouchstart = () => {
        timer = 0 // 重置timer
        timer = setTimeout(() => {
            callback();
            timer = 0
        }, 380) // 超时器能成功执行，说明是长按
    }

    target.ontouchmove = () => {
        clearTimeout(timer) // 如果来到这里，说明是滑动
        timer = 0
    }

    target.ontouchend = () => { // 到这里如果timer有值，说明此触摸时间不足380ms，是点击
        if (timer) {
            clearTimeout(timer)
        }
    }
}

addLongtabListener(box, popupMenu)




/*音乐*/
var gabriel_musicPlaying = false;
var gabriel_musicFirst = false;
var navMusicEl = document.getElementById("nav-music");

//切换音乐播放状态
gabriel.musicToggle = function (changePaly = true) {
  if (!gabriel_musicFirst) {
    musicBindEvent();
    gabriel_musicFirst = true;
  }
  let msgPlay = '<i class="fa-solid fa-play"></i><span>播放音乐</span>'; // 此處可以更改為你想要顯示的文字
  let msgPause = '<i class="fa-solid fa-pause"></i><span>暂停音乐</span>'; // 同上，但兩處均不建議更改
  if (gabriel_musicPlaying) {
    navMusicEl.classList.remove("playing");
    // 修改右键菜单文案为播放
    // document.getElementById("menu-music-toggle").innerHTML = msgPlay;
    document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停";
    // document.querySelector("#consoleMusic").classList.remove("on");
    gabriel_musicPlaying = false;
    navMusicEl.classList.remove("stretch");
  } else {
    navMusicEl.classList.add("playing");
    // 修改右键菜单文案为暂停
    // document.getElementById("menu-music-toggle").innerHTML = msgPause;
    // document.querySelector("#consoleMusic").classList.add("on");
    gabriel_musicPlaying = true;
    navMusicEl.classList.add("stretch");
  }
  if (changePaly) document.querySelector("#nav-music meting-js").aplayer.toggle();
}
// 音乐伸缩
gabriel.musicTelescopic = function () {
  if (navMusicEl.classList.contains("stretch")) {
    navMusicEl.classList.remove("stretch");
  } else {
    navMusicEl.classList.add("stretch");
  }
}

//音乐上一曲
gabriel.musicSkipBack = function () {
  document.querySelector("#nav-music meting-js").aplayer.skipBack();
}

//音乐下一曲
gabriel.musicSkipForward = function () {
  document.querySelector("#nav-music meting-js").aplayer.skipForward();
}

//获取音乐中的名称
gabriel.musicGetName = function () {
  var x = $(".aplayer-title");
  var arr = [];
  for (var i = x.length - 1; i >= 0; i--) {
    arr[i] = x[i].innerText;
  }
  return arr[0];
}

/*

function addRightMenuClickEvent() {
  // 添加点击事件
  $("#menu-backward").on("click", function () {
    window.history.back();
    gabriel.hideRightMenu();
  });
  $("#menu-forward").on("click", function () {
    window.history.forward();
    gabriel.hideRightMenu();
  });
  $("#menu-refresh").on("click", function () {
    window.location.reload();
  });
  $("#menu-top").on("click", function () {
    btf.scrollToDest(0, 500);
    gabriel.hideRightMenu();
  });
  $(".menu-link").on("click", gabriel.hideRightMenu);
  $("#menu-darkmode").on("click", gabriel.switchDarkMode);
  $("#menu-home").on("click", function () {
    window.location.href = window.location.origin;
  });
  $("#menu-randomPost").on("click", function () {
    toRandomPost();
  });
  $("#menu-commentBarrage").on("click", gabriel.switchCommentBarrage);
  $("#rightmenu-mask").on("click", gabriel.hideRightMenu);
  $("#rightmenu-mask").contextmenu(function () {
    gabriel.hideRightMenu();
    return false;
  });
  $("#menu-translate").on("click", function () {
    gabriel.hideRightMenu();
    translateInitialization();
  });
  $("#menu-copy").on("click", gabriel.copyPageUrl);
  $("#menu-pastetext").on("click", gabriel.pasteText);
  $("#menu-copytext").on("click", function () {
    gabriel.rightmenuCopyText(selectTextNow);
    btf.snackbarShow("复制成功，复制和转载请标注本文地址");
  });
  $("#menu-commenttext").on("click", function () {
    gabriel.rightMenuCommentText(selectTextNow);
  });
  $("#menu-newwindow").on("click", function () {
    window.open(domhref);
    gabriel.hideRightMenu();
  });
  $("#menu-copylink").on("click", gabriel.copyLink);
  $("#menu-downloadimg").on("click", function () {
    gabriel.downloadImage(domImgSrc, "gabriel");
  });
  $("#menu-newwindowimg").on("click", function () {
    window.open(domImgSrc);
    gabriel.hideRightMenu();
  });
  $("#menu-copyimg").on("click", function () {
    gabriel.writeClipImg(domImgSrc);
  });
  $("#menu-searchBaidu").on("click", gabriel.searchBaidu);
  //音乐
  $("#menu-music-toggle").on("click", gabriel.musicToggle);
  $("#menu-music-back").on("click", gabriel.musicSkipBack);
  $("#menu-music-forward").on("click", gabriel.musicSkipForward);
  $("#menu-music-copyMusicName").on("click", function () {
    gabriel.rightmenuCopyText(gabriel.musicGetName());
    btf.snackbarShow("复制歌曲名称成功", false, 3000);
  });
}


addRightMenuClickEvent();
*/