	const publicFun = {
		/**时间格式转换,根据时间找到今天，昨天，前天，以及前天之前的时间
		 * @param {Object} date为时间参数
		 * 
		 */
		returnDiyDate(date) {
			date = new Date(date).getTime();
		    var tDate = getFormatDate(new Date(), "yyyy/MM/dd");  //当前凌晨时间(string)
		    var tTime = new Date(tDate).getTime(); //当前凌晨时间(long)
		    var eTime = 24 * 60 * 60 * 1000;  //一天时间(long)
		    var yTime = tTime - eTime;  //昨天凌晨时间(long)
		    var byTime = tTime - 2 * eTime;  //前天凌晨时间(long)
		    var formatDate = getFormatDateByLong(date, "hh:mm");    //转成时分格式
		    if (date >= tTime) {
		        //今天
				var result = "";
				let newhh = parseInt(formatDate.split(":")[0]);
				if(0<newhh && (newhh<6 || newhh==6)){
					result = "凌晨 " + formatDate;
				}else if(6<newhh && (newhh<12 || newhh==12)){
					result = "早上 " + formatDate;
				}else if(12<newhh && (newhh<18 || newhh==18)){
					result = "下午 " + formatDate;
				}else{
					result = "晚上 " + formatDate;
				}
		    } else if (date < tTime && date >= yTime) {
		        //昨天
		        var result = "昨天 " + formatDate;
		    } else if (date < yTime && date >= byTime) {
		        //前天
		        var result = "前天 " + formatDate;
		    } else {
		        //前天之前
		        var result = getFormatDateByLong(date, "MM-dd hh:mm");
		    }
		    return result;
		},
		
		
		//解析字符串携带的参数
		analysisString(str){
			let imgOption = str.split("?")[1];
			let imgOptionList = imgOption.split("&");
			let obj = {};
			imgOptionList.forEach(citem=>{
				let eleOption = citem.split("=");
				obj[eleOption[0]] = eleOption[1];
			})
			return obj;
		},
		
		/**获取当前时间
		 * @param {Object} optionDate为当前时间
		 * @param {Object} timeType为时间格式
		 */
		getNowDate(timeType, optionDate){
			var date = new Date();
			if(optionDate){
				date = new Date(optionDate);
			}
			var sign2 = ":";
			var year = date.getFullYear() // 年
			var month = date.getMonth() + 1; // 月
			var day = date.getDate(); // 日
			var hour = date.getHours(); // 时
			var minutes = date.getMinutes(); // 分
			var seconds = date.getSeconds() //秒
			var weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
			var week = weekArr[date.getDay()];
			// 给一位数的数据前面加 “0”
			if (month >= 1 && month <= 9) {
				month = "0" + month;
			}
			if (day >= 0 && day <= 9) {
				day = "0" + day;
			}
			if (hour >= 0 && hour <= 9) {
				hour = "0" + hour;
			}
			if (minutes >= 0 && minutes <= 9) {
				minutes = "0" + minutes;
			}
			if (seconds >= 0 && seconds <= 9) {
				seconds = "0" + seconds;
			}
			if(timeType == "yy-mm-dd hh:mm:ss"){
				return year + "-" + month + "-" + day + " " + hour + sign2 + minutes + sign2 + seconds;
			}else if(timeType == "yy"){
				return year;
			}else if(timeType == "mm-dd"){
				return month + "-" + day;
			}else if(timeType == "mm"){
				return month;
			}else if(timeType == "dd"){
				return day;
			}else if(timeType == "hh:mm:ss"){
				return hour + sign2 + minutes + sign2 + seconds;
			}else if(timeType == "mm"){
				return minutes;
			}
		},
		
		//计算时间差
		getDateDiff(startTime, diffType) {
		    //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式 
			var endTime = publicFun.getNowDate("yy-mm-dd hh:mm:ss", null);
		    //将计算间隔类性字符转换为小写
		    diffType = diffType.toLowerCase();
		    var sTime = new Date(startTime);      //开始时间
		    var eTime = new Date(endTime);  //结束时间
		    //作为除数的数字
		    var divNum = 1;
		    switch (diffType) {
		        case "second":
					//秒
		            divNum = 1000;
		            break;
		        case "minute":
					//分钟
		            divNum = 1000 * 60;
		            break;
		        case "hour":
					//小时
		            divNum = 1000 * 3600;
		            break;
		        case "day":
					//天数
		            divNum = 1000 * 3600 * 24;
		            break;
		        default:
		            break;
		    }
		    return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(divNum));
		},
		
		//手机震动
		onFeedTap() {
			let platform=uni.getSystemInfoSync().platform
			// #ifdef APP-PLUS
			if (platform == "ios") {
				let UIImpactFeedbackGenerator = plus.ios.importClass('UIImpactFeedbackGenerator');
				let impact = new UIImpactFeedbackGenerator();
				impact.prepare();
				impact.init(1);
				impact.impactOccurred();
			}
			if (platform == "android") {
				uni.vibrateShort();
			}
			// #endif
			
			// #ifdef MP-WEIXIN
				uni.vibrateShort();
			// #endif
		},
		
		//检测是否打开录音功能权限
		isOpenVioceJurisdiction(fun) {
			uni.authorize({
				scope: 'scope.record',
				success() {
					if(fun){
						fun(true);
					}
				},
				fail() {
					uni.showModal({
						content: '检测到您没打开录音功能权限，是否去设置打开？',
						confirmText: "确认",
						cancelText: '取消',
						success(res) {
							uni.openSetting({
								success(res) {
									console.log(res);
								},
								fail(res) {
									uni.showToast({
										title: '打开授权设置失败',
										icon: 'none'
									})
								}
							});
						}
					})
				}
			})
		},
		
		//拍摄，图片或者视频选择
		/**
		 * @param {Object} sourceType 值为['album'],['camera'],['album','camera']
		 * @param {Object} fun //回调方法
		 * @param {Object} count //数量默认为9
		 */
		chooseMedia(sourceType, count, fun){
			uni.chooseMedia({
				count: count?count:9,
				mediaType: ['image','video'],
				sourceType: sourceType,
				maxDuration: 30,
				camera: 'back',
				success(res) {
					res.tempFiles.forEach(item=>{
						uni.getImageInfo({
							src: item.fileType == "image"?item.tempFilePath:item.thumbTempFilePath,
							success: function (image) {
								item.width = image.width;
								item.height = image.height;
								item.showW = publicFun.setImageRatio(image.width, image.height).newW;
								item.showH = publicFun.setImageRatio(image.width, image.height).newH;
							}
						})
					})
					setTimeout(()=>{
						fun(res.tempFiles);
					},200)
				}
			})
		},
		
		//图片比例设置
		setImageRatio(w, h){
			let newW = w, newH = h;
			if(w/h > 1){
				newW = 300;
				newH = newW*h/w;
			}else{
				newH = 300;
				newW = newH*w/h;
			}
			return {newW:newW,newH:newH}
		},
		
		//对象拼接
		objConcat(list){
			let obj = {};
			list.forEach(item=>{
				for(let key in item){
					obj[key] = item[key];
				}
			})
			return obj;
		},
		
		//计算通话时长
		countVideoCallTime(time){
			let hour,minutes,seconds,result = "";
			hour = parseInt(time / 3600);
			minutes = parseInt((time % 3600) / 60);
			seconds = (time % 3600) % 60;
			if(0 != hour && hour < 10){
				hour = "0" + hour;
			}
			if(time > 60 || time == 60){
				if(minutes == 0){
					minutes = "00";
				}else{
					if(0 != minutes && minutes < 10){
						minutes = "0" + minutes;
					}
				}
			}else{
				minutes = 0;
			}
			if(seconds < 10){
				seconds = "0" + seconds;
			}
			if(hour){
				result = hour + ":";
			}
			if(minutes){
				result = result + minutes + ":";
			}
			if(seconds){
				result = result + seconds;
			}
			return result;
		},

	}
	
	//扩展Date的format方法
    Date.prototype.format = function (format) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds()
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    };
    /*  转换long值为日期字符串
     *  l long值
     *  pattern 格式字符串,例如：yyyy-MM-dd hh:mm:ss
     */
    function getFormatDateByLong(l, pattern) {
        return getFormatDate(new Date(l), pattern);
    };
    function getFormatDate(date, pattern) {
        if (date == undefined) {
            date = new Date();
        }
        if (pattern == undefined || pattern == "") {
            pattern = "yyyy-MM-dd hh:mm:ss";
        }
        return date.format(pattern);
    };
export default publicFun
