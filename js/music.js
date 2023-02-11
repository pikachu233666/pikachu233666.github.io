// 音乐绑定事件
function musicBindEvent() {
    document.querySelector("#nav-music .aplayer-music").addEventListener("click", function () {
      gabriel.musicTelescopic();
    });
    document.querySelector("#nav-music .aplayer-button").addEventListener("click", function () {
      gabriel.musicToggle(false);
    });
  }




  
  var gabrielmusicpage = {
    // 音乐节目切换背景
    changeMusicBg: function (isChangeBg = true) {
      if (window.location.pathname != "/music/") {
        return;
      }
      const anMusicBg = document.getElementById("an_music_bg")
  
      if (isChangeBg) {
        // player listswitch 会进入此处
        const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
        anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
      } else {
        // 第一次进入，绑定事件，改背景
        let timer = setInterval(()=>{
          const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
          // 确保player加载完成
          console.info(anMusicBg);
          if (musiccover) {
            clearInterval(timer)
            anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
            // 绑定事件
            gabrielmusicpage.addEventListenerChangeMusicBg();
            
            // 暂停nav的音乐
            if (document.querySelector("#nav-music meting-js").aplayer && !document.querySelector("#nav-music meting-js").aplayer.audio.paused){
              gabrielmusicpage.musicToggle()
            }
          }
        }, 100)
      }
    },
    addEventListenerChangeMusicBg: function () {
      const anMusicPage = document.getElementById("anMusic-page");
      const aplayerIconMenu = anMusicPage.querySelector(".aplayer-info .aplayer-time .aplayer-icon-menu");
  
      anMusicPage.querySelector("meting-js").aplayer.on('loadeddata', function () {
        gabrielmusicpage.changeMusicBg();
        console.info('player loadeddata');
      });
  
      aplayerIconMenu.addEventListener("click", function () {
        document.getElementById('menu-mask').style.display = "block";
        document.getElementById('menu-mask').style.animation = "0.5s ease 0s 1 normal none running to_show";
      })
  
      document.getElementById('menu-mask').addEventListener("click", function () {
        if (window.location.pathname != "/music/") return;
        anMusicPage.querySelector('.aplayer-list').classList.remove("aplayer-list-hide");
      })
    },
  }
  
  // 调用
  gabrielmusicpage.changeMusicBg(false);
  