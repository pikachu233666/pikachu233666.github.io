if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(i[b])return;let d={};const f=e=>a(e,b),s={module:{uri:b},exports:d,require:f};i[b]=Promise.all(c.map((e=>s[e]||f(e)))).then((e=>(r(...e),d)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"330d3089cd36b18128990491ed531caf"},{url:"about/index.html",revision:"3d9e990e6864bf6f523aa6b98944c9c6"},{url:"archives/2022/08/index.html",revision:"5ca204328c87e39f3e836f048f4f6caf"},{url:"archives/2022/10/index.html",revision:"079388a8a418b9b5a15a24e1e408c194"},{url:"archives/2022/11/index.html",revision:"fc9c80dd7720f486a9abe6be2c5c2e2c"},{url:"archives/2022/index.html",revision:"8bf9651e78b710a7e6dc42594ebd20cb"},{url:"archives/2022/page/2/index.html",revision:"8d99b59348df14360d532284e77e48f5"},{url:"archives/index.html",revision:"42817d52d4e2bf41215b819a7109abcf"},{url:"archives/page/2/index.html",revision:"53e037ba7893506f3a1c66a44e099956"},{url:"articles/1d2825e1/index.html",revision:"1e3469c45f79b379355a04d65d67445d"},{url:"articles/2ff462c4/index.html",revision:"e0404c8f00fe26269d80f0e532ec2460"},{url:"articles/41a96602/index.html",revision:"40acfcba657a2c68b3a67c2bc380fada"},{url:"articles/6d25e45/index.html",revision:"c06912cf4bdf9f81e820375835f652ba"},{url:"articles/7a43fd18/index.html",revision:"1f32e89faa70f61ec2daad70e37b2082"},{url:"articles/96b9d504/index.html",revision:"fcdf563221ee230737ae2558543253ec"},{url:"articles/a15f21c3/index.html",revision:"cf1cfc17a2ad4a79d5e7f8ceaf6edbe4"},{url:"articles/acddc89f/index.html",revision:"55953c6707e60c5ab2047d1f72782fc5"},{url:"articles/b75672c/index.html",revision:"df8370ffa3dec086dd72a600d96ec361"},{url:"articles/b8d13f57/index.html",revision:"9fb31f1d4d156949008a8c75a92cf6d4"},{url:"articles/c3dfb6a9/index.html",revision:"a812334e875de1f3859a048694164878"},{url:"articles/ce2bff93/index.html",revision:"c2d35f42b28e444e4594510f8c774726"},{url:"articles/d8b154c3/index.html",revision:"bec3340e3d3224101ebc6e7f0e1053c2"},{url:"bangumis/index.html",revision:"1a1d082faa5dbf25d3810f6fb422ab5e"},{url:"bilibili/CJY-chen.jpg",revision:"1b8e53505f58496344edfde8d2dbaff6"},{url:"bilibili/index.html",revision:"19e730440bf81aec15646c8cdf136fa5"},{url:"bilibili/xyyd.jpg",revision:"694cb591b27f8ba8c14270eae3a359b4"},{url:"birthday/BirthdayCake.html",revision:"1a3a4755a04df4fd9ef0a850caf96649"},{url:"birthday/css/birthdayCake.css",revision:"2c2745526e6d30bac0dc5fdf2a2c83fd"},{url:"birthday/css/index.css",revision:"0d6aa89791bd2e86a86be591c09ba837"},{url:"birthday/css/jquery.fullPage.css",revision:"6235f7143fa9e298d9ecbcc8769fb913"},{url:"birthday/img/HappyBirthday.png",revision:"03fc2be87e79e0dedccb8a9fc5bb93c5"},{url:"birthday/index.html",revision:"51debeb650aafba7d8bd2ea59941e5f6"},{url:"birthday/js/diy.js",revision:"d5a1014eda4cf1a3666d8f5dd618ce68"},{url:"birthday/js/happy.js",revision:"f5411505240cbb34c5a8e045f5fbece5"},{url:"birthday/js/jquery-2.1.1.min.js",revision:"e22f82a5194d1f03ecb712baad2df66c"},{url:"birthday/js/jquery.fullPage.js",revision:"ecfa63ea1291a6af897e7e53d93a6d90"},{url:"birthday/js/jquery.fullPage.min.js",revision:"edb44ce23c9215575b7ac5b474b7dd33"},{url:"birthday/js/verification.js",revision:"9f415e8d22b4cf97f607df8ba5c41a8c"},{url:"categories/CS自学笔记/index.html",revision:"d3eaca2676f88d61ea5f36c1cc28fd10"},{url:"categories/CS自学笔记/工具/index.html",revision:"5bb25f8b0740a1e3b0dc31d929ddf5d6"},{url:"categories/CTFWriteUp/index.html",revision:"884bc79f0be2d540721c3cec50865534"},{url:"categories/Hexo博客/index.html",revision:"79f3c6983c92f2909ead3b83f009fcf0"},{url:"categories/IELTS/index.html",revision:"00608ff45cc1ab64aadba2012389b3c1"},{url:"categories/index.html",revision:"4bc9ca956aad7734cf8672c9984a947c"},{url:"categories/实用教程/index.html",revision:"027bbe3c6313a7bd270aad67e948f668"},{url:"categories/日记杂谈/index.html",revision:"c2229363efd7bea412ad7242bb1565a1"},{url:"CDN/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"CDN/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"CDN/Meting2.min.js",revision:"a31b741e06dbba12cc3f1592cda2623c"},{url:"charts/index.html",revision:"34ea149bb70ef6932e97080bade1da61"},{url:"comments/index.html",revision:"610ea331f78a9a013b4a671086969290"},{url:"cover/20220825-1.jpg",revision:"9fa5206cef02f0c41deffdf5100fd1e3"},{url:"cover/20220825-1.webp",revision:"a0be63421205a435ae150aa567f58f3b"},{url:"cover/20221011-1.png",revision:"1f4b8406c425eb7f21a00411f771977c"},{url:"cover/20221011-1.webp",revision:"1f3bf99d5d2f950fe29d795bd29165c0"},{url:"cover/20221021-1.png",revision:"a4e8cfdb41a3d611137689a6125154bf"},{url:"cover/20221021-1.webp",revision:"7d0b132fa0972d180377f324417ee15a"},{url:"cover/20221021-2.png",revision:"ba0a2c579f14b37c2c8a411172e7f286"},{url:"cover/20221021-2.webp",revision:"dbf95dbf2b83d43806f95a5c491d34b5"},{url:"cover/20221029-1.jpg",revision:"59d0f8e0610e4498c8998eb55951d3f6"},{url:"cover/20221029-1.webp",revision:"3c22ad0b0fb279527a7d8dc79741441e"},{url:"cover/20221104-1.jpg",revision:"dcda1a73aeca1d49d95274031baa84bc"},{url:"cover/20221104-1.webp",revision:"b94c22b729a6944b1ec024543fc06f2b"},{url:"cover/20221107-1.png",revision:"a4de3b108938179d9bf8ec3fe54439c2"},{url:"cover/20221107-1.webp",revision:"652a02c8dccedf6e601a120f650e9f39"},{url:"cover/20221109-1.jpg",revision:"dd2e32022005f7170d6f53322eb55558"},{url:"cover/20221109-1.webp",revision:"f2910d1b0d9192d36443ec00984f1836"},{url:"cover/20221110-1.jpg",revision:"dcadf8ebff6a0e894ca44ec1a5a9f996"},{url:"cover/20221110-1.webp",revision:"bc45e51c27332048af953c7d11463d22"},{url:"cover/20221111-1.jpg",revision:"ee32e3aa44ed960d1ae2924c8db6d52e"},{url:"cover/20221111-1.webp",revision:"522483398c4e831b6ff91dcae191f89a"},{url:"cover/20221111-2.jpg",revision:"29ae8121bec3719f39a17b73c35b9b8e"},{url:"cover/20221111-2.webp",revision:"93dc3b94ca97e2466966f3855ef69932"},{url:"cover/20221112-1.jpg",revision:"e06ffb74eafb2e5b8b9b9185ed33c672"},{url:"cover/20221112-1.webp",revision:"eaf8fa9dc5d1dd139fb32161fb9e3d59"},{url:"cover/20221113-1.jpg",revision:"2419da6cea39667fba1f5e21302b6fce"},{url:"cover/20221113-1.webp",revision:"982f45e9a00792bc0ae5e4e286cb27ac"},{url:"css/custom.css",revision:"91003dfbcebf0be42ed9b550e56e8d93"},{url:"css/index.css",revision:"3e9ff1178f1cc4a1e3782766ba7bbb9c"},{url:"css/rightMenu.css",revision:"89af7d0ab63cdf87bc55267384ce3c8b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"film/DITF.jpg",revision:"866f014f34c9b1f4574be63f30459643"},{url:"film/DJR.jpg",revision:"dd61d714558e444c12c53884a738bb65"},{url:"film/EK.jpg",revision:"ebc55fb3076c15ecb7d4da7aea845ff2"},{url:"film/GDYG.jpg",revision:"6f2e98ce0e89488091aba999bcf0376f"},{url:"film/index.html",revision:"9ee20b9e15d5e33c11156cf8f43d5cd8"},{url:"film/IS.jpg",revision:"91410ce25feee104466d53d1666c3b1f"},{url:"film/QZGS.jpg",revision:"8d36a5f9a0a6a87b951610a433a7cf4e"},{url:"film/ROH.jpg",revision:"01764fc5731380b807dc7edfa159baa9"},{url:"film/SAO2.jpg",revision:"daa8094aa5ffc76ce4e1c03869bd2cad"},{url:"film/SJ2.jpg",revision:"08632e29af364a87ba759050f5836f45"},{url:"image/20221107-1.png",revision:"b27d69dd2e8665afc5a02790859e4c29"},{url:"image/20221107-1.webp",revision:"7468ff1ad39d7446aa4c399c79d256d7"},{url:"image/20221107-2.png",revision:"667688a040f2b1ca1b77db9a1191bdb5"},{url:"image/20221107-2.webp",revision:"325cb03d13a35244b831117089ac4ffc"},{url:"image/20221109-1.jpg",revision:"1142b3e7191b3a56f0c18e29c14366e2"},{url:"image/20221109-1.webp",revision:"05acbb1724f8dc0811d2dd851489c9a5"},{url:"image/20221109-2.jpg",revision:"4b8dd27f9c17d499580f2272839dd56a"},{url:"image/20221109-2.webp",revision:"919d403b41f6c19387607d145205826d"},{url:"image/20221111-1.jpg",revision:"f3df5e12c60ec1f97290336dc02716a6"},{url:"image/20221111-1.webp",revision:"5e0d71fbcfc3b3eec97ba6678c02babf"},{url:"image/20221111-2.jpg",revision:"42ee59e09de1f0954f416449a0fa400c"},{url:"image/20221111-2.webp",revision:"3646db45cb11b501e7b93470d7c5a941"},{url:"image/20221111-3.jpg",revision:"c972427fa3dd10f2d6e1b8d648fd885a"},{url:"image/20221111-3.webp",revision:"1dbd50497b75ebc8aa4013b0f00a8edf"},{url:"image/20221111-4.jpg",revision:"e21007ec3388b611d2cc1f0cdab74866"},{url:"image/20221111-4.webp",revision:"2d29041fd5634aaa18896dd3c6649b0b"},{url:"image/20221112-1.jpg",revision:"03278b6bb16a0a651cd683b7a431ea39"},{url:"image/20221112-1.webp",revision:"733aafe36afb49349b6e63caed870159"},{url:"image/20221112-10.jpg",revision:"a2a9a9cd3728b6d15886f05c285f8b17"},{url:"image/20221112-10.webp",revision:"92f3646d8a0ad5752627309dc368c1be"},{url:"image/20221112-11.jpg",revision:"c453e7bfadd8abf482dc21a10fc8d215"},{url:"image/20221112-11.webp",revision:"b998afbfeaefebb1b1ff8e5719ffe8b6"},{url:"image/20221112-12.jpg",revision:"e0b4195bf59caa5d094a9a7688fb7ceb"},{url:"image/20221112-12.webp",revision:"fc6cc83a6f30b5826db5bf99aa8ffbab"},{url:"image/20221112-13.jpg",revision:"118e9d4de96dd702a0897259b75fe35c"},{url:"image/20221112-13.webp",revision:"74779c442d75567be4243895d04b7c88"},{url:"image/20221112-14.jpg",revision:"feeb657271651d00f0a3ec24a93c2a66"},{url:"image/20221112-14.webp",revision:"bbd7a490bc506c96cf0b93f9f235cd0e"},{url:"image/20221112-15.jpg",revision:"5556393a7bf598fe70667b8aef24edca"},{url:"image/20221112-15.webp",revision:"5e39df59768ae77630f79577d1df4ec4"},{url:"image/20221112-16.jpg",revision:"a89d1fcc8d0888d853a9616f911ecf3c"},{url:"image/20221112-16.webp",revision:"4548f18293564326e19bbb7bd7fc42ab"},{url:"image/20221112-17.jpg",revision:"8794722e26680e45dfb60dcfd46a8ad7"},{url:"image/20221112-17.webp",revision:"095071efb1c3e3edf662c7dd4babd287"},{url:"image/20221112-18.jpg",revision:"7b69ff000971045b061f3ca8caa2b35c"},{url:"image/20221112-18.webp",revision:"bf68b83e31c5f608b340528fea882ef8"},{url:"image/20221112-19.jpg",revision:"1abd3d19f1fec54702cf069f13420df1"},{url:"image/20221112-19.webp",revision:"191678baf5511ab8159d0f9621562ecb"},{url:"image/20221112-2.jpg",revision:"3a5909ba538537654d3a8b629ba23555"},{url:"image/20221112-2.webp",revision:"b7c48bd42d45a326cb4fe4fbb8e80fd8"},{url:"image/20221112-20.jpg",revision:"38091cbe3c1cca35cbfb37a9419136d4"},{url:"image/20221112-20.webp",revision:"24f442bdfd610599de3b73152d962cbe"},{url:"image/20221112-21.jpg",revision:"c9fd111b27e268e2b9ca9485644a6b73"},{url:"image/20221112-21.webp",revision:"37138f97c5c1482a53e95db8f231cb25"},{url:"image/20221112-22.jpg",revision:"ae273ca9d2cc13e6468f6e42bb9c94b0"},{url:"image/20221112-22.webp",revision:"6973692f1551f0bf3e6b31348d7a1887"},{url:"image/20221112-23.jpg",revision:"4cd3de38163d3b1f072be17f71769d12"},{url:"image/20221112-23.webp",revision:"aca0dd87d2f159bdcce6cdcec6bc2a8b"},{url:"image/20221112-24.jpg",revision:"837daea4db9e78223f6ce1d318615d2f"},{url:"image/20221112-24.webp",revision:"7b274ef4d608b52268c9058e0b34b6bc"},{url:"image/20221112-25.jpg",revision:"60d849e56b8e045e4805886580cc4f90"},{url:"image/20221112-25.webp",revision:"1f36614121f16aa20c93b20f72b83d8c"},{url:"image/20221112-26.jpg",revision:"c2db356357d1d34cfc8225b370be1d6a"},{url:"image/20221112-26.webp",revision:"343333942b1addae252665f7e1fed26c"},{url:"image/20221112-3.jpg",revision:"121c68a5f1ff32fca5093043076b8e7b"},{url:"image/20221112-3.webp",revision:"622e7076c67a92995686b760bb492e9c"},{url:"image/20221112-4.jpg",revision:"7f12d5fc92b5bc2eb3d4af1ff9bbdbb2"},{url:"image/20221112-4.webp",revision:"f1aab65c002b112b0172b203186e3245"},{url:"image/20221112-5.jpg",revision:"cdd9e750ea309809a23d4fd3fee53c31"},{url:"image/20221112-5.webp",revision:"03c1ded55e24a9a62ecf031a2af194c3"},{url:"image/20221112-6.jpg",revision:"6777ebe88c371c7ecc4c2bc9327c771c"},{url:"image/20221112-6.webp",revision:"d04700a8a8e49f4c63d3a12a72f73428"},{url:"image/20221112-7.jpg",revision:"7b22cd33430c54d1859cdc6250ed3fc7"},{url:"image/20221112-7.webp",revision:"c58621679fe868f305fb32c2a8f790c6"},{url:"image/20221112-8.jpg",revision:"f2c4ed49cdbaf2832cb3b9cd40c35894"},{url:"image/20221112-8.webp",revision:"51fbf76aa54c333bc8bc54b98af72164"},{url:"image/20221112-9.jpg",revision:"7de8506c2ebbc196b8f541d61eeb43d5"},{url:"image/20221112-9.webp",revision:"f1ef547c78009f653f869c912665452c"},{url:"image/20221113-1.jpg",revision:"7a94e7f7fb78cd7f9c5f0f14377594ba"},{url:"image/20221113-1.webp",revision:"0a076bc40aa44974367ddfa3cf75add6"},{url:"image/20221113-10.jpg",revision:"8237e07bd1cc15cb638b74d0090486ba"},{url:"image/20221113-10.webp",revision:"ec07e89d62aac967772339193f48935b"},{url:"image/20221113-11.jpg",revision:"fde3d9b38aa063553aa8c4d3f9894b93"},{url:"image/20221113-11.webp",revision:"27047bf01a42c30f73e6a082a3081fb2"},{url:"image/20221113-2.jpg",revision:"98a184dcdea29c02c59579ccfd1968c5"},{url:"image/20221113-2.webp",revision:"0a0dc5c261d7832e1a384dbcebdc55fd"},{url:"image/20221113-3.jpg",revision:"c87134ec39ea3f6fe78d7c3d5f5faca9"},{url:"image/20221113-3.webp",revision:"55100ca566be9f63c934ad4ebb9d0f33"},{url:"image/20221113-4.jpg",revision:"79746e23733364fef6934fd05505480a"},{url:"image/20221113-4.webp",revision:"4b67c40962c00d776c2e47b497d84d81"},{url:"image/20221113-5.jpg",revision:"291eb968896b591a90467ff0a3086a2d"},{url:"image/20221113-5.webp",revision:"1e3388cd5902e0488cbb4ca6b9ab020a"},{url:"image/20221113-6.jpg",revision:"1e77c50b0dac1c9a06cca44adc546698"},{url:"image/20221113-6.webp",revision:"65aaa41a39626ef6d46b3a9f7ca5256b"},{url:"image/20221113-7.jpg",revision:"6504a02d735dbd65f99ce55b83e1de77"},{url:"image/20221113-7.webp",revision:"bdd0ae34655975fa46a0753c0f7cbcb5"},{url:"image/20221113-8.jpg",revision:"53c925311b980d272f4f2894b3104e98"},{url:"image/20221113-8.webp",revision:"d6ba2af746d6e44336fef7cd60ab5671"},{url:"image/20221113-9.jpg",revision:"5033cd1053b45bb5cf36fdebcf808534"},{url:"image/20221113-9.webp",revision:"6a6b3db3206e8717d129e662024c9934"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/about/chart.webp",revision:"48754a36093e26b22f0a2e1d4aed3566"},{url:"img/about/ESFJ-A.svg",revision:"fcc716f3b79d0caa8e6f19fa09ffbc0c"},{url:"img/about/ESFJ.jpg",revision:"75fd273756ce10563917acc0b4eda2eb"},{url:"img/about/hollowknight-loading.png",revision:"c4d07c6532d364875a04e6a746c363d8"},{url:"img/about/hollowknight.jpg",revision:"62d158382f4980fb9ef6d0d0d6392744"},{url:"img/about/hollowknight.webp",revision:"21ef5dccf9b3c017ecb6203b7edc955f"},{url:"img/about/kano.webp",revision:"6a6bf255b8c2df37b2aa18bab0cbee14"},{url:"img/about/life.png",revision:"e552836db61db59e4382e6052c99c5a7"},{url:"img/about/map-dark.png",revision:"5c84a39b385872a39c5a39cc7e066463"},{url:"img/about/map.png",revision:"aa80e02f3605871e4c15ce979dbdd187"},{url:"img/about/puellamagica.png",revision:"54b69fa7cd24931f8089cd03027007a2"},{url:"img/about/technology.webp",revision:"077162aebb2c4ab4e8ed1633fd4e865f"},{url:"img/Avatar.gif",revision:"823210b7620ba49e7474519fa08244c1"},{url:"img/background.jpg",revision:"4ba11bd7f56ba929601a4a524dcdce8d"},{url:"img/background.webp",revision:"629f58e89f6bcf422d8dadaca672f515"},{url:"img/categories/categories1.png",revision:"06031837e731214f799ac814db0ebb96"},{url:"img/categories/categories2.jpg",revision:"3f2ae671ee54e2118158814318e30c54"},{url:"img/categories/categories3.jpg",revision:"b72196bf8993a15875184a0064ee03ab"},{url:"img/categories/categories4.jpg",revision:"603022192dc5c2b538db3f1ab3252d27"},{url:"img/categories/categories5.jpg",revision:"3dd44e5fcb8dd86f84cb753ba2473a45"},{url:"img/categories/categories6.webp",revision:"e34a37e7b9d3261172e127bffb6ae192"},{url:"img/categories/categories7.png",revision:"9e80e290ce6ff2a3a0cfdc717c0b099e"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/home-bg.jpg",revision:"d9fedea54c852592c668f7545404670d"},{url:"img/home-bg.webp",revision:"4f38e32625af3bf6137c5818dc33fad4"},{url:"img/page404.png",revision:"9a9fc3cd1709411c84950441ba054cff"},{url:"img/rss/BlogFinder.png",revision:"adffeac019eb0906759d456870e43ab3"},{url:"img/siteicon/android-chrome-144x144.png",revision:"199ce1367b815e34b6803ecd69b9bb03"},{url:"img/siteicon/android-chrome-192x192.png",revision:"2d0ee5e522e3c0927abb0c633ad60fde"},{url:"img/siteicon/android-chrome-256x256.png",revision:"4af4617e23dfb6b39ee00fe610ae129b"},{url:"img/siteicon/android-chrome-36x36.png",revision:"9e2da6abdb6d17182247b276a9d09747"},{url:"img/siteicon/android-chrome-384x384.png",revision:"2a1038aca2383bbfa8011e6059c83ccd"},{url:"img/siteicon/android-chrome-48x48.png",revision:"72cf800e13e8a957b540ca539dbd0da4"},{url:"img/siteicon/android-chrome-512x512.png",revision:"7c79e8f8a7b15de5236999af86cca9da"},{url:"img/siteicon/android-chrome-72x72.png",revision:"26f274318435b67570446cd101a06775"},{url:"img/siteicon/android-chrome-96x96.png",revision:"da800425f597ae3208705c610e85cf82"},{url:"img/siteicon/apple-touch-icon-120x120.png",revision:"1045e512b3b77fad5e08d8c9b84a787a"},{url:"img/siteicon/apple-touch-icon-152x152.png",revision:"f4a6d2adb5b3340b9494967161a7eae8"},{url:"img/siteicon/apple-touch-icon-180x180.png",revision:"36532250c4910a337f0c11795b46bea0"},{url:"img/siteicon/apple-touch-icon-60x60.png",revision:"b2d28c7872cb67516d3ae15543235cf8"},{url:"img/siteicon/apple-touch-icon-76x76.png",revision:"174f23aebb366371d47a324c0214eed9"},{url:"img/siteicon/apple-touch-icon.png",revision:"36532250c4910a337f0c11795b46bea0"},{url:"img/siteicon/favicon-16x16.png",revision:"8fe98219fd46970522f01b2a94b1cf6a"},{url:"img/siteicon/favicon-32x32.png",revision:"277c0de9209a49da7f154307e1cb4562"},{url:"img/siteicon/mstile-150x150.png",revision:"9bbbcaafb606e34b2d2373ae1cb52dfe"},{url:"img/siteicon/README.html",revision:"796c1fba9f1148af6e73d3b1bd4a064d"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"6bd6c2607bdda21d50d68ded2b426e29"},{url:"img/siteshoot.jpg",revision:"fac7346ec9d7ed80aecba057f28091c2"},{url:"img/wechat.jpg",revision:"3b475b1b51c2a0a957f00cccb4934c69"},{url:"index.html",revision:"087c8c2bfa3e996203d88d0db80cc9e8"},{url:"js/bandev.js",revision:"902bf30fea0184d521cb0290a98b7bdb"},{url:"js/console.js",revision:"f0313c517039a40a9bf0235593fb1792"},{url:"js/countup.js",revision:"ac5341fdcb5757d947af5b44539ce708"},{url:"js/emoji.js",revision:"36b59b593d09fcd5d2b727a5787cd3a0"},{url:"js/greyscale.js",revision:"3337622648819ebb05d17f96617f9a37"},{url:"js/main.js",revision:"339631b973f6bac262bcf768078c1ac8"},{url:"js/music.js",revision:"e5a74935b875bbf994fa66563ed6c2ec"},{url:"js/oldweb.js",revision:"4b86d780fa6495d835648f168b241b06"},{url:"js/rightMenu.js",revision:"472d23bb77bab90d98622e291047e36f"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"58cb9443474ea5d84a1c4ac806c8b4b7"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"15dac12139c61c0c9441cf7cc32f3379"},{url:"music/index.html",revision:"e2ab02474548294f642e39f259b87e05"},{url:"page/2/index.html",revision:"74681196345faf4dc4f5bdee047796aa"},{url:"portal/css/h.9c69ed6c.css",revision:"5b9d62c906342ed42d46b0cd33d13bdb"},{url:"portal/css/nekotora.99cf6f8c.css",revision:"6061a9571d6031ab8513e41edd7c15b3"},{url:"portal/css/style.css",revision:"e18e8798ee04cbc8182c9d9803e5c59b"},{url:"portal/fonts/nekotora.4ea5ebe6.woff2",revision:"a848ec0371063474b5f3c88841c02592"},{url:"portal/image/avatar.png",revision:"823210b7620ba49e7474519fa08244c1"},{url:"portal/index.html",revision:"9fccb40f251283e184350f708fd78e64"},{url:"portal/js/page.3a0791a3.js",revision:"9ca74757f35cb98ccdb5793338800bd9"},{url:"random.js",revision:"7929151c99d05c7997db9f11770fced9"},{url:"tags/AI绘画/index.html",revision:"5ee029db134a9aec3939684fccf76a7c"},{url:"tags/Butterfly/index.html",revision:"ebc805d7d8d4346edf7e0bab97d7fe2a"},{url:"tags/CS/index.html",revision:"9bc08c620ff09ddecb411c4d69a8e449"},{url:"tags/CS自学指南/index.html",revision:"77634ea4f229fa77e767f414aaeb3f5c"},{url:"tags/CTF/index.html",revision:"e903b9912e43bce02691885c7ff82d8a"},{url:"tags/hackergame/index.html",revision:"a1b7a202e1ba2045dc4c0e01d9e34499"},{url:"tags/Hexo/index.html",revision:"927f3905784b6841d227ff88f9291825"},{url:"tags/IELTS/index.html",revision:"6816bc8894b669363334fe1001fbe06b"},{url:"tags/index.html",revision:"436844ac96cdc4d572917adbfce7e392"},{url:"tags/Part2口语题库/index.html",revision:"b98fa0ba4f754421e8e8978088833105"},{url:"tags/Speaking/index.html",revision:"d7e2eefa0b3f7056974e6157a3c145e7"},{url:"tags/web/index.html",revision:"339387946b3374b43b66261521e5e14a"},{url:"tags/工具/index.html",revision:"034c954a390ebc65cbf918d6c18dc7e7"},{url:"tags/日记/index.html",revision:"416b36b1f19896d9d976adce653dad38"},{url:"tags/机器学习/index.html",revision:"02f2e55aa37c46106652aaa2d8f61fd8"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
