function addRightMenuClickEvent(){
const metingJs = document.querySelector("#nav-music meting-js");
//判断是否是音乐
if (metingJs.contains(event.target)) {
$('#menu-music').show;
$('#rightmenu-mask').hide;
} else {
}
}


var gabriel_musicPlaying = false;
var gabriel_musicStretch = false;
var gabriel_musicFirst = false;
var gabriel = {
  //切换音乐播放状态
  musicToggle: function () {
    if (!gabriel_musicFirst) {
      musicBindEvent();
      gabriel_musicFirst = true;
    }
    let msgPlay = '<i class="fa-solid fa-play"></i><span>播放音乐</span>'; // 此處可以更改為你想要顯示的文字
    let msgPause = '<i class="fa-solid fa-pause"></i><span>暂停音乐</span>'; // 同上，但兩處均不建議更改
    if (gabriel_musicPlaying) {
      document.querySelector("#nav-music").classList.remove("playing");
      document.getElementById("menu-music-toggle").innerHTML = msgPlay;
      document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停";
      gabriel_musicPlaying = false;
      document.querySelector("#nav-music").classList.remove("stretch");
      gabriel_musicStretch = false;
    } else {
      document.querySelector("#nav-music").classList.add("playing");
      document.getElementById("menu-music-toggle").innerHTML = msgPause;
      gabriel_musicPlaying = true;
      document.querySelector("#nav-music").classList.add("stretch");
      gabriel_musicStretch = true;
    }
    document.querySelector("meting-js").aplayer.toggle();
  },
  // 音乐伸缩
  musicTelescopic: function () {
    if (gabriel_musicStretch) {
      document.querySelector("#nav-music").classList.remove("stretch");
      gabriel_musicStretch = false;
    } else {
      document.querySelector("#nav-music").classList.add("stretch");
      gabriel_musicStretch = true;
    }
  },

  //音乐上一曲
  musicSkipBack: function () {
    document.querySelector("meting-js").aplayer.skipBack();
  },

  //音乐下一曲
  musicSkipForward: function () {
    document.querySelector("meting-js").aplayer.skipForward();
  },

  //获取音乐中的名称
  musicGetName: function () {
    var x = $(".aplayer-title");
    var arr = [];
    for (var i = x.length - 1; i >= 0; i--) {
      arr[i] = x[i].innerText;
    }
    return arr[0];
  },
};

addRightMenuClickEvent();


