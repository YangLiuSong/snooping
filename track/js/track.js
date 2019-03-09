// 图片滑动相关代码
var girl_swiper1 = new Swiper ('#girl_swiper1', {
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
var girl_swiper2 = new Swiper ('#girl_swiper2', {
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
var girl_swiper3 = new Swiper ('#girl_swiper3', {
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
var girl_swiper4 = new Swiper ('#girl_swiper4', {
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
var girl_swiper5 = new Swiper ('#girl_swiper5', {
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
var boy_swiper1 = new Swiper ('#boy_swiper1', {
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
var boy_swiper2 = new Swiper ('#boy_swiper2', {
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
var boy_swiper3 = new Swiper ('#boy_swiper3', {
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
var boy_swiper4 = new Swiper ('#boy_swiper4', {
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
var boy_swiper5 = new Swiper ('#boy_swiper5', {
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
let map;
var status;

function mapinit(center_point){
    map = new AMap.Map('GaodeMap', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom:8, //初始化地图层级
        center: center_point //初始化地图中心点
    });
    map.plugin(["AMap.ToolBar"],function(){   //在地图中添加ToolBar插件
        toolBar = new AMap.ToolBar();
        map.addControl(toolBar);
    });

    map.plugin(["AMap.MouseTool"],function(){        //鼠标工具插件
        mousetool = new AMap.MouseTool(map);
    });
    AMap.event.addListener(mousetool, 'draw', function(e) {
        //arr = e.obj.getPath();//获取路径坐标
        if(status == 'circle'){
            lng = e.obj.getCenter().lng;
            lat = e.obj.getCenter().lat;
            radius = e.obj.getRadius();
        }else if(status == 'polygon' || status == 'rectangle'){
            var path = e.obj.getPath();
            arr = [];
            for(var i=0;i<path.length;i++){
                arr.push([path[i].lng,path[i].lat]);
            }
            console.log(arr);
        }
    });
}


$('#circle').click(function(){
    status = 'circle';
    mousetool.circle();
});
$('#rectangle').click(function(){
    status = 'rectangle';
    mousetool.rectangle();
});


$('#closeMouse').click(function(){
    mousetool.close(true);
});


// request从后端获取检索数据
function item_search(db_name,gender,makeup_result,startDate,endDate,offset) {
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/snoop/getData',
        dataType: "json",
        async: false,
        data: {
            db_name: db_name,
            gender: gender,
            makeup_result:makeup_result,
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
// 更新list列表相关函数
function update_list(data,offset){
    try {
        // 清除列表
        $("#search_result").empty();
        // 动态创建列表条目
        for (var i = offset;i < offset + 10;i++){
            // 动态添加list条目并绑定点击相应函数
            $("<a href=\"#\" class=\"list-group-item\"><span>"+ data[i].user_id +"<\/span> <span>"+data[i].gender+"<\/span> <span>"+data[i].makeup_result+"<\/span> <span>"+data[i].date + " " + data[i].time +"<\/span> <span>" + data[i].poi + "<\/span><\/a>").appendTo("#search_result").bind('click',data[i],function (e){
                console.log(e.data);
                var center_loc = [e.data.location.split(",")[1],e.data.location.split(",")[0]];
                mapinit(center_loc);
                var marker = new AMap.Marker({
                    position:new AMap.LngLat(center_loc[0],center_loc[1]),
                    title:e.data.user_id + "  " + e.data.score.toString()
                });
                map.add(marker)
            });
            // document.getElementById("search_result").innerHTML+="<a href=\"#\" class=\"list-group-item\"><span>"+ data[i].user_id +"<\/span><span>"+data[i].gender+"<\/span><span>"+data[i].date + " " + data[i].time +"<\/span><span>" + data[i].poi + "<\/span><\/a>";
        }
        // 更改分页偏移信息
        global_offset = offset + 10;
    }
    catch (e) {
        console.log("page has been all loaded !")
    }

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
    var db_name = $("#score input[name='score']:checked").val();
    // 通过按钮组获取性别信息
    var gender = $("#gender input[name='gender']:checked").val();
    // 通过按钮组获取化妆信息
    var makeup_result = $("#makeup_result input[name='makeup_result']:checked").val();
    // 获取检索的日期区间信息
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    // request获取数据
    item_search(db_name,gender,makeup_result,startDate,endDate,0);
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
