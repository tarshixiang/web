var app = angular.module('myCtroller',[])

app.controller('homeCtrl',['$scope',function($scope){
	$scope.lunbos = [
		'http://y.gtimg.cn/music/photo_new/T003R720x288M000001FZrht08r4yQ.jpg?max_age=2592000',
		'http://y.gtimg.cn/music/photo_new/T003R720x288M0000047oWRq40hTxF.jpg?max_age=2592000',
		'http://y.gtimg.cn/music/photo_new/T003R720x288M000000FcayP3gI4Yb.jpg?max_age=2592000',
		'http://y.gtimg.cn/music/photo_new/T003R720x288M00000110oJP0cJM2l.jpg?max_age=2592000',
		'http://y.gtimg.cn/music/photo_new/T003R720x288M000001yMWsw0ruyNg.jpg?max_age=2592000'
	]

	$scope.songs = [
		{
			name : '电台',
			song : [
				{ img : '//y.gtimg.cn/mediastyle/mobile/yqq_v5/img/default_pic.jpg?max_age=19830212',
					p : '跑步电台'
				},
				{ img : "http://qzonestyle.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000",
					p : '热歌'
				}
			]
		},
		{
			name : '热门歌单',
			song : [

				{
					img : 'http://p.qpic.cn/music_cover/nGIvUJ7zJn2Dbb5IezsMbiaFgb8W2qGdkhoHk2qRpib1yPPQc8rdRejw/300?n=1&max_age=2592000',
					p : '纳尼！原来这些经典曲目都是翻唱自日语歌？'
				},
				{
					img : 'http://p.qpic.cn/music_cover/2IibrwJRJaFq17fpyCfROQ8Hz7CxQWjqqNOBQ0vzaEJSiahc3gC1hBkA/300?n=1&max_age=2592000',
					p : '我不是腐女，才怪'
				},
				{
					img : 'http://p.qpic.cn/music_cover/hVUsfUFG2DV466URqw7PTzUv3mdK3gNFEgKsVPGgDyEUKOhwFmI4Qg/300?n=1&max_age=2592000',
					p : '国粤双语：看陈奕迅上演双面娇娃'
				},
				{
					img : 'http://p.qpic.cn/music_cover/z8wAFqicQ1qhImeiajkrgiaRicxnIEO7dIT6shiclWAuqBP0RCynjROz5vA/300?n=1&max_age=2592000',
					p : '听这些歌不暖心我请你吃火鸡 | 感恩节特辑'
				},
				{
					img : 'http://p.qpic.cn/music_cover/D9vDu0pt6gr4bfXpuziaTuJibW69xurZIlHINibxca3iaC6NOIPCD4Pctw/300?n=1&max_age=2592000',
					p : '美剧中的神级插曲'
				},
				{
					img : 'http://p.qpic.cn/music_cover/BmOdzdMZlr7VR7sd0wfX5jN8rLRdic6r3Oic0b8Aqy9j7iaLThlFLTm8g/300?n=1&max_age=2592000',
					p : '「不眠咖啡馆」享受一种恬淡的舒適'
				}
			]
		}
	]
}])
app.controller('rankCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
// 3=欧美
// 5=内地
// 6=港台
// 16=韩国
// 17=日本
// 18=民谣
// 19=摇滚
// 23=销量
// 26=热歌
	$scope.ranks = [
		{img: 'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_3_300_108781344.jpg?max_age=2592000',num:'1004.0万',h2:'巅峰榜·欧美', p1 : 'Versace On The Floor- Bruno Mars',p2: "Don't Wanna Know- Maroon 5/Kendrick Lamar",p3:'Traveling Light- Leonard Cohen',id:'3'
		},
		{img: 'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_5_300_109210182.jpg?max_age=2592000',num:'738.5万',h2:'巅峰榜·内地', p1 : '我的滑板鞋2016- 华晨宇',p2: "自饰者- 张碧晨",p3:'锦绣未央- 陈都灵',id:'5'
		},
		{img: 'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_6_300_109212704.jpg?max_age=2592000',num:'673.5万',h2:'巅峰榜·港台', p1 : '当我找到了你- 徐佳莹',p2: "缘分一道桥- 王力宏/谭维维",p3:'Look In My Eyes- 张曼玉',id:'6'
		},
		{img: 'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_16_300_109132423.jpg?max_age=2592000',num:'950.0万',h2:'巅峰榜·韩国', p1 : 'Paradise- 효린 (孝琳)',p2: "PLAYING WITH FIRE (불장난)- BLACKPINK",p3:'STAY- BLACKPINK',id:'16'
		},
		{img: 'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_17_300_107762026.jpg?max_age=2592000',num:'198.0万',h2:'巅峰榜·日本', p1 : '三葉のテーマ (三叶的主题音乐)- RADWIMPS (ラッドウィンプス)',p2: "夢灯籠- RADWIMPS (ラッドウィンプス)",p3:'椿的梦 序曲- 吉田潔 (Kiyoshi Yoshida)',id:'17'
		},
		{img: 'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_32_300_109188995.jpg?max_age=2592000',num:'98.0万',h2:'巅峰榜·民谣', p1 : '途中- 陈鸿宇',p2: "嘿！朋友- 安子与九妹",p3:'南海少年- 安子与九妹',id:'18'
		},
		{img: 'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_36_300_109359752.jpg?max_age=2592000',num:'67.0万',h2:'巅峰榜·摇滚', p1 : "이렇게 예뻤나 (YOU'RE SO FINE) (美好的你)-CNBLUE (씨엔블루)",p2: "Take Me Now- FTISLAND (에프티 아일랜드)",p3:"是我不够好- 李毓芬",id:'19'
		},
		{img: 'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_23_300_109275423.jpg?max_age=2592000',num:'344.1万',h2:'巅峰榜·畅销', p1 : "西门少年- 李宇春",p2: "野蛮生长- 李宇春",p3:"24K Magic- Bruno Mars",id:'23'
		},
		{img: 'http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_102636799.jpg?max_age=2592000',num:'1910.0万',h2:'巅峰榜·热歌', p1 : "演员- 薛之谦",p2: "丑八怪- 薛之谦",p3:"告白气球- 周杰伦",id:'26'
		}
	];

	$scope.song = function(id,title){
		$rootScope.title = title;
		$http.get('http://route.showapi.com/213-4?showapi_appid=26496&showapi_sign=7409e7919e674415a45e5b479bec39e6&topid='+id).success(function(data){
			if(data.showapi_res_code==0 && data){
			$rootScope.list=data.showapi_res_body.pagebean.songlist;
			if(data && data.showapi_res_body.pagebean.update_time){
				$rootScope.update = data.showapi_res_body.pagebean.update_time + '更新';
				$rootScope.Simg = data.showapi_res_body.pagebean.songlist[0].albumpic_big;
			}
			console.log(data)
			}
		})
	}
	// $rootScope.smallList = $rootScope.list.substring(0,50);
	// console.log(rootScope.smallList)
	
	
}])

app.controller('songCtrl',['$scope',"$http","$rootScope",function($scope,$http,$rootScope){

	$rootScope.oneSong = function(url,id,img,title,content){
		$rootScope.URL = url;
		$rootScope.ID = id;
		$rootScope.IMG = img;
		$rootScope.TITLE = title;
		$rootScope.CONTENT = content;
	}
}])

app.controller('oneCtrl',["$scope","$http",'$sce','$rootScope','$interval',function($scope,$http,$sce,$rootScope,$interval){
	$rootScope.vSrc = function(urls){
		return $sce.trustAsResourceUrl(urls);
	}

	$http.get('http://route.showapi.com/213-2?showapi_appid=26496&showapi_sign=7409e7919e674415a45e5b479bec39e6&musicid='+$rootScope.ID).success(function(data){
		$scope.lyric = data.showapi_res_body.lyric_txt;
	})


	var oAudio = document.getElementsByTagName('audio')[0];
	var now = document.getElementById('now');
	
	$scope.isok = true;
	$scope.move = function(){
		$scope.isok = !$scope.isok;
		console.log($scope.isok);
		if($scope.isok==false){
			oAudio.pause();
		}else{
			oAudio.play();
		}
	}
	$scope.current = '00:00';
	$scope.all = '00:00';
	$interval(function(){
		$scope.all = format(oAudio.duration);
		$scope.current = format(oAudio.currentTime);
		now.style.width = ( (oAudio.currentTime/oAudio.duration ) * 2.2 ) + 'rem';
	},1000);
	// 将秒数的时间转换成 时：分：秒
	function format(time) {

            var time = parseInt(time);

            var h = addZero(Math.floor(time / 3600));

            var m = addZero(Math.floor(time % 3600 / 60));

            var s = addZero(Math.floor(time % 3600 % 60));

            return m + ':' + s;
        }

        function addZero(num) {

            if (num < 10) {
                num = '0' + num;
            }

            return num;
        }
    $scope.close = false;

    $scope.small = $rootScope.list.splice(0,50);

    $scope.show = function() {
    	$scope.close = false;
 	};
 	$scope.hided = function(){
 		$scope.close = !$scope.close;
 	}

 	$scope.change = function(url,id,img,title,content){
 		$rootScope.close = true;
		$rootScope.URL = url;
		$rootScope.ID = id;
		$rootScope.IMG = img;
		$rootScope.TITLE = title;
		$rootScope.CONTENT = content;
		$http.get('http://route.showapi.com/213-2?showapi_appid=26496&showapi_sign=7409e7919e674415a45e5b479bec39e6&musicid='+$rootScope.ID).success(function(data){
		$scope.lyric = data.showapi_res_body.lyric_txt;
	})
	}
}])

app.controller('searchCtrl',['$scope',"$http","$rootScope",function($scope,$http,$rootScope){

}])