// 获取滑动栏图片
// loadTopPic("f");
// loadTopPic("m");
// 图片滑动定义相关代码
var f_swiper1 = new Swiper ('#f_swiper1', {
    slidesPerView: 1,// slider容器显示的slide数量
    loop: true, // 循环模式选项
    autoplay:{// 自动轮播相关参数
        autoplay: true,
        delay:500,// 轮播延时，单位毫秒
        disableOnInteraction: false, // 操作后是否停止轮播
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var f_swiper2 = new Swiper ('#f_swiper2', {
    slidesPerView: 1,
    loop: true, // 循环模式选项
    autoplay:{
        autoplay: true,
        delay:500,
        disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var f_swiper3 = new Swiper ('#f_swiper3', {
    slidesPerView: 1,
    loop: true, // 循环模式选项
    autoplay:{
        autoplay: true,
        delay:500,
        disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var f_swiper4 = new Swiper ('#f_swiper4', {
    slidesPerView: 1,
    loop: true, // 循环模式选项
    autoplay:{
        autoplay: true,
        delay:500,
        disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var f_swiper5 = new Swiper ('#f_swiper5', {
    slidesPerView: 1,
    loop: true, // 循环模式选项
    autoplay:{
        autoplay: true,
        delay:500,
        disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var m_swiper1 = new Swiper ('#m_swiper1', {
    slidesPerView: 1,
    loop: true, // 循环模式选项
    autoplay:{
        autoplay: true,
        delay:500,
        disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var m_swiper2 = new Swiper ('#m_swiper2', {
    slidesPerView: 1,
    loop: true, // 循环模式选项
    autoplay:{
        autoplay: true,
        delay:500,
        disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var m_swiper3 = new Swiper ('#m_swiper3', {
    slidesPerView: 1,
    loop: true, // 循环模式选项
    autoplay:{
        autoplay: true,
        delay:500,
        disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var m_swiper4 = new Swiper ('#m_swiper4', {
    slidesPerView: 1,
    loop: true, // 循环模式选项
    autoplay:{
        autoplay: true,
        delay:500,
        disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var m_swiper5 = new Swiper ('#m_swiper5', {
    slidesPerView: 1,
    loop: true, // 循环模式选项
    autoplay:{
        autoplay: true,
        delay:500,
        disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
function loadTopPic(gender){
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/snoop/topPic',
        dataType: "json",
        async: false,
        data: {
            gender: gender
        },
        success: function (data) {
            console.log(data);
            for(var swiper_index = 1;swiper_index<=5;swiper_index++){
                update_swiper(data,gender,swiper_index)
            }
        }
    });
}var month_list = ["01",/*"02","03","04","05",*/"06","07","08","09","10","11"/*,"12"*/];

function update_swiper(data,gender,swiper_index){
    $('#' + gender + '_swiper' + swiper_index + '_wrapper').empty();
    for (var i = 0;i<7;i++){
        $("<div class=\"swiper-slide\" style='text-align: center' data-hash=\"slide" + i + "\"><div class=\"swiper-zoom-container\"><img src=\"http://ww3.sinaimg.cn/large/" + data[i][swiper_index-1] + ".jpg\"></div></div>").appendTo('#' + gender + '_swiper' + swiper_index + '_wrapper');
    }
}


// 日期选择器相关代码
$('#startDate').datetimepicker({
    format:"yyyy-mm-dd hh",
    language:"en", //汉化
    // todayBtn : "true",  //显示今天按钮
    autoclose : true,   //选择日期后自动关闭日期选择框
    todayHighlight : true,   //当天高亮显示
    minView: "day",   //不显示时分秒
    startView: 4,
    endDate: new Date(),
    pickerPosition: "bottom-left",
}).on('changeDate',function(e){
    $("#endDate").datetimepicker("setStartDate",e.date);
});
$('#endDate').datetimepicker({
    format:"yyyy-mm-dd hh",
    language:"en",
    // todayBtn : "true",
    autoclose : true,
    todayHighlight : true,
    minView: "day",
    endDate: new Date(),
    startView: 4,
    pickerPosition: "bottom-left",
}).on('changeDate',function(e){
    $("#startDate").datetimepicker("setEndDate", e.date);
});
// 地图相关
let map_load;
let map_result;
var status;
var polygon = "";
var p = "";
var mousetool;
// 弹出框相关
/*点击弹出按钮*/
function popBox() {
    var popBox = document.getElementById("popBox");
    popBox.style.display = "block";
}


// 地图选择初始化

function mapinit(){
    map_load = new AMap.Map('Map_load', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom:12, //初始化地图层级
        center: [121.473658,31.230378] //初始化地图中心点
    });
    map_load.plugin(["AMap.ToolBar"],function(){   //在地图中添加ToolBar插件
        toolBar = new AMap.ToolBar();
        map_load.addControl(toolBar);
    });

    map_load.plugin(["AMap.MouseTool"],function(){        //鼠标工具插件
        mousetool = new AMap.MouseTool(map_load);
    });
    AMap.event.addListener(mousetool, 'draw', function(e) {
        if(status == 'circle'){
            lng = e.obj.getCenter().lng;
            lat = e.obj.getCenter().lat;
            radius = e.obj.getRadius();
        }else if(status == 'rectangle'){
            var path = e.obj.getPath();
            p = "";
            for(var i=0;i<path.length;i++){
                p = p + path[i].lng.toString() + " " + path[i].lat.toString() + ",";
            }
            console.log(p);
        }
    });
}
mapinit();
// 区域选择相关
$('#circle').click(function(){
    popBox();
    status = 'circle';
    mousetool.circle();
});
$('#rectangle').click(function(){
    popBox();
    status = 'rectangle';
    mousetool.rectangle();
});

$('#finish').click(function(){
    mousetool.close(true);
    var popBox = document.getElementById("popBox");
    popBox.style.display = "none";
    polygon = p;
    console.log(polygon);
});

$('#close').click(function () {
    mousetool.close(true);
    var popBox = document.getElementById("popBox");
    popBox.style.display = "none";
});

// 显示搜索结果
function Map_result(){
    map_result = new AMap.Map('Map_result', {
        mapStyle:'amap://styles/midnight',
        features: ['bg', 'road'],
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom:9, //初始化地图层级
        pitch: 40,
        center: [121.473658,31.230378] //初始化地图中心点
    });
}


// request从后端获取检索数据
function item_search(score_interval,gender,makeup_result,polygon,startDate,endDate,offset) {
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/snoop/getData',
        dataType: "json",
        async: false,
        data: {
            score_interval: score_interval,
            gender: gender,
            makeup_result:makeup_result,
            polygon:polygon,
            startDate: startDate,
            endDate: endDate,
            offset: offset
        },
        success: function (data) {
            succ = true;
            console.log(data);
            // 数据赋值
            result_lists = data;
            // 记录分页器页数
            pagecount = Math.ceil(result_lists.length/10);
        },
        error: function () {
            succ = false;
        }
    });
}

//构建自定义信息窗体
function createInfoWindow(title, content) {
    var info = document.createElement("div");
    info.className = "custom-info input-card content-window-card";

    //可以通过下面的方式修改自定义窗体的宽高
    //info.style.width = "400px";
    // 定义顶部标题
    var top = document.createElement("div");
    var titleD = document.createElement("div");
    var closeX = document.createElement("img");
    top.className = "info-top";
    titleD.innerHTML = title;
    closeX.src = "https://webapi.amap.com/images/close2.gif";
    closeX.onclick = closeInfoWindow;

    top.appendChild(titleD);
    top.appendChild(closeX);
    info.appendChild(top);

    // 定义中部内容
    var middle = document.createElement("div");
    middle.className = "info-middle";
    middle.style.backgroundColor = 'white';
    middle.innerHTML = content;
    info.appendChild(middle);

    // 定义底部内容
    var bottom = document.createElement("div");
    bottom.className = "info-bottom";
    bottom.style.position = 'relative';
    bottom.style.top = '0px';
    bottom.style.margin = '0 auto';
    var sharp = document.createElement("img");
    sharp.src = "https://webapi.amap.com/images/sharp.png";
    bottom.appendChild(sharp);
    info.appendChild(bottom);
    return info;
}
//关闭信息窗体
function closeInfoWindow() {
    map_result.clearInfoWindow();
}
// 更新list列表相关函数
function update_list(data,offset){
    try {
        // 清除列表
        $("#search_result").empty();
        // 动态创建列表条目
        for (var i = offset;i < offset + 10;i++){
            // 动态添加list条目并绑定点击相应函数
            $("<a href=\"#\" class=\"list-group-item\" style='text-align: center'><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ data[i].user_id +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + data[i].location.split(",").length + "<\/span><\/a>").appendTo("#search_result").bind('click',data[i],function (e){
                console.log(e.data);
                Map_result();
                var locs = e.data.location.split(",");
                var loc;
                var track_path = [];
                for(var i =0 ;i<locs.length;i++){
                    loc = locs[i].split(" ");
                    track_path.push([parseFloat(loc[0].slice(1,-1)),parseFloat(loc[1].slice(0,-2))]);
                    track_path = unique(track_path);
                }
                var num = track_path.length;
                // console.log(track_path);

                if (num === 1){
                    var marker = new AMap.Marker({
                        position:new AMap.LngLat(track_path[0][0],track_path[0][1]),
                        title:"用户ID：" + e.data.user_id + "  发博时间：" + e.data.time_max
                    });
                    map_result.add(marker)
                }
                else if (num > 1){
                    // var marker_list = [];
                    var ti = e.data.time.replace(/ /g,"").slice(1,-1).split(",");
                    var p = e.data.pics.replace(/ /g,"").slice(1,-1).split(",");
                    var m = e.data.makeup.replace(/ /g,"").slice(1,-1).split(",");
                    var s = e.data.score.replace(/ /g,"").slice(1,-1).split(",");
                    var poi = e.data.poi.replace(/ /g,"").slice(1,-1).split(",");
                    for(var i =0 ;i<num;i++){
                        // track_path.push(new AMap.LngLat(loc[0].slice(1,-1),loc[1].slice(0,-2)));
                        // track_path.push([track_path[i][0],track_path[i][1]]);
                        var marker = new AMap.Marker({
                            map:map_result,
                            position:new AMap.LngLat(track_path[i][0],track_path[i][1]),
                            title:"用户ID：" + e.data.user_id + "  发博时间：" + ti[i].slice(1,-1)
                        });
                        //实例化信息窗体
                        var title = '用户ID：' + e.data.user_id + '<span style="font-size:11px;color:#F00;"></span>',
                            content = [];
                        content.push("<img style='width: 100%;height: 100px;' src=\"http://ww3.sinaimg.cn/large/" + p[i].slice(1,-1) + ".jpg\">");
                        content.push("照片打分：" + s[i]);
                        content.push("美颜与否：" + m[i].slice(1,-1));
                        content.push("发博时间：" + ti[i].slice(1,-1));
                        content.push("发博地点：" + poi[i].slice(1,-1));
                        var infoWindow = new AMap.InfoWindow({
                            isCustom: true,  //使用自定义窗体
                            content: createInfoWindow(title, content.join("<br/>")),
                            offset: new AMap.Pixel(16, -45)
                        });

                        function markerClick(e) {
                            infoWindow.open(map_result, e.target.getPosition());
                        }
                        marker.on('click', markerClick);
                        marker.emit('click', {target: marker});
                        // marker_list.push();
                    }

                    // var polyline = new AMap.Polyline({
                    //     path: track_path,
                    //     borderWeight: 2, // 线条宽度，默认为 1
                    //     strokeColor: 'red', // 线条颜色
                    //     lineJoin: 'round', // 折线拐点连接处样式
                    // });
                    // // 将折线添加至地图实例
                    // map_result.add(polyline);
                    // map_result.add(marker_list);

                    // 轨迹相关代码
                    AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {

                        if (!PathSimplifier.supportCanvas) {
                            alert('当前环境不支持 Canvas！');
                            return;
                        }

                        var emptyLineStyle = {
                            lineWidth: 0,
                            fillStyle: null,
                            strokeStyle: null,
                            borderStyle: null
                        };

                        var pathSimplifierIns = new PathSimplifier({
                            zIndex: 100,
                            //autoSetFitView:false,
                            map: map_result, //所属的地图实例

                            getPath: function (pathData, pathIndex) {
                                return pathData.path;
                            },
                            getHoverTitle: function (pathData, pathIndex, pointIndex) {

                                return null;
                            },
                            renderOptions: {
                                //将点、线相关的style全部置emptyLineStyle
                                pathLineStyle: emptyLineStyle,
                                pathLineSelectedStyle: emptyLineStyle,
                                pathLineHoverStyle: emptyLineStyle,
                                keyPointStyle: emptyLineStyle,
                                startPointStyle: emptyLineStyle,
                                endPointStyle: emptyLineStyle,
                                keyPointHoverStyle: emptyLineStyle,
                                keyPointOnSelectedPathLineStyle: emptyLineStyle
                            }
                        });

                        window.pathSimplifierIns = pathSimplifierIns;

                        pathSimplifierIns.setData([{
                            path: track_path
                            //     [
                            //     [116.405289, 39.904987],
                            //     [113.964458, 40.54664],
                            //     [111.47836, 41.135964],
                            //     [108.949297, 41.670904],
                            //     [106.380111, 42.149509],
                            //     [103.774185, 42.56996],
                            //     [101.135432, 42.930601],
                            //     [98.46826, 43.229964],
                            //     [95.777529, 43.466798],
                            //     [93.068486, 43.64009],
                            //     [90.34669, 43.749086],
                            //     [87.61792, 43.793308]
                            // ]
                        }]);

                        //initRoutesContainer(d);

                        function onload() {
                            pathSimplifierIns.renderLater();
                        }

                        function onerror(e) {
                            alert('图片加载失败！');
                        }

                        var navg1 = pathSimplifierIns.createPathNavigator(0, {
                            loop: true,
                            speed: 10000,
                            pathNavigatorStyle: {
                                width: 15,
                                height: 15,
                                //使用图片
                                // content: PathSimplifier.Render.Canvas.getImageContent('./imgs/plane.png', onload, onerror),
                                strokeStyle: null,
                                fillStyle: null,
                                //经过路径的样式
                                pathLinePassedStyle: {
                                    lineWidth: 5,
                                    strokeStyle: 'black',
                                    dirArrowStyle: {
                                        stepSpace: 15,
                                        strokeStyle: 'red'
                                    }
                                }
                            }
                        });
                        navg1.start();
                    });
                    }
            });
        }
        // 更改分页偏移信息
        global_offset = offset + 10;
    }
    catch (e) {
        console.log("page has been all loaded !")
    }
}
function unique(arr){
    var res = [arr[0]];
    for(var i=1; i<arr.length; i++){
        var repeat = false;
        for(var j=0; j<res.length; j++){
            if(arr[i] === res[j]){
                repeat = true;
                break;
            }
        }
        if(!repeat){
            res.push(arr[i]);
        }
    }
    return res;
}

// 全局变量，存储获取到的数据
var result_lists;
// 全局变量，记录分页的信息
var global_offset = 0;
// 全局变量，记录分页器的总页数
var pagecount;
// 记录数据请求是否成功的标志
var succ = false;

// 开始检索按钮响应代码
function start_search() {
    // 通过按钮组获取分数段信息
    var score_interval = $("#score input[name='score']:checked").val().toString();
    console.log(score_interval);
    // 通过按钮组获取性别信息
    var gender = $("#gender input[name='gender']:checked").val();
    // 通过按钮组获取化妆信息
    var makeup_result = $("#makeup_result input[name='makeup_result']:checked").val().toString();
    // 获取检索的日期区间信息
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    // request获取数据
    item_search(score_interval,gender,makeup_result,polygon,startDate,endDate,0);
    if (succ){
        // 更新列表中的条目
        update_list(result_lists,0);
        // 初始化分页器
        $("#pager").pager({ pagenumber: 1, pagecount: pagecount, buttonClickCallback: PageClick });
        document.getElementById("resultList").style.display="";
    }
    else {
        alert("检索信息有误！");
    }
}

// 分页器点击响应函数
PageClick = function(pageclickednumber) {
    update_list(result_lists,(pageclickednumber-1)*10);
    $("#pager").pager({ pagenumber: pageclickednumber, pagecount: pagecount, buttonClickCallback: PageClick });
};
