/**
 * 乐购商城首页js
 * 2021.10.28
 */
$(function() {
    /**首页大图轮播 */
    $('#banner').tyslide({
        boxh: 460, //盒子的高度
        w: 1000, //盒子的宽度
        h: 390, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 10, //控制按钮圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });

    /* 图书电子书小轮播 */
    $('#ebooks-banner').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6700", //当前控制按钮的颜色
    });

    /* 电子书 table切换 */
    $('.ebooks-nav > li').mouseenter(function() {
        //导航高亮颜色切换
        $(this).addClass('active').siblings('li').removeClass('active');
        //获取索引
        var index = $(this).index();
        //内容切换
        $('.ebooks-list').eq(index).show().siblings('.ebooks-list').hide();
    })

    /* 电子书列表手风琴效果 */
    $('.ebooks .right-box ul > li').mouseenter(function() {
        // 所有兄弟：隐藏详情 显示标题
        $(this).siblings().find('.desc').hide(); // 隐藏详情
        $(this).siblings().find('.ebooks-title').show(); // 显示标题

        // 当前:隐藏标题 显示详情
        $(this).find('.ebooks-title').hide(); //隐藏标题
        $(this).find('.desc').show(); //显示详情

    })

    /* 服装电子书小轮播 */
    $('#content-banner').tyslide({
        boxh: 330, //盒子的高度
        w: 426, //盒子的宽度
        h: 330, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6700", //当前控制按钮的颜色
    });


    /* 服装tab切换 */
    $('.clothe .clothes-nav li').mouseenter(function() {
        //导航切换
        $(this).addClass('active').siblings('li').removeClass('active');
        //获取索引
        var index = $(this).index();
        //内容切换
        $('.clothe .clothes-content > .clothes-bottom-text').eq(index).show().siblings('.clothes-list').hide();
    })


    /* 户外运动电子书小轮播 */
    $('#sport-banner').tyslide({
        boxh: 330, //盒子的高度
        w: 426, //盒子的宽度
        h: 330, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6700", //当前控制按钮的颜色
    });


    /* 童装电子书小轮播 */
    $('#children-clothes-banner').tyslide({
        boxh: 330, //盒子的高度
        w: 426, //盒子的宽度
        h: 330, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6700", //当前控制按钮的颜色
    });



    /* 推广商品切换 */
    $('.promotion .promotion-title ul li').mouseenter(function() {
        // 导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')

        // 内容切换
        // 获取对应的索引
        var index = $(this).index(); //  0 => left:0 * 1170,   1 => left: -1*-1170

        console.log(index)
        console.log($('.promotion .promotion-content .inner-box'))

        //左右移动
        $('.promotion .promotion-content .inner-box').animate({
            'left': -index * 1170
        }, 300)
    })





})