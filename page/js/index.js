// import { threadId } from "worker_threads";

(function () {
    //滚动导航
    const navWrap = document.getElementsByClassName('nav_wrap')[0],
        wrapper = document.getElementsByClassName('wrapper')[0],
        headWrap = document.getElementsByClassName('head_wrap')[0],
        head = document.getElementsByClassName('head')[0],
        navIcon = document.getElementsByClassName('icon')[0],
        scrollNav = document.getElementsByClassName('scroll_nav')[0],
        nav = document.getElementsByClassName('nav')[0],
        contentWrap = document.getElementsByClassName('content_wrap')[0],
        contentScroll = document.getElementsByClassName('content_scroll')[0],
        banner = document.getElementsByClassName('banner')[0],
        imgWrap = document.getElementsByClassName('img_wrap')[0],
        spans = document.querySelectorAll('.circle_wrap span'),
        updating = document.querySelector('.update .updating'),
        contentList = document.getElementsByClassName('content_list')[0],
        dialog = document.getElementsByClassName('dialog')[0],
        listSection = document.querySelectorAll('.content_scroll section')


        list = nav.children[0];

    let navFlag = true,
        updateFlag = false,
        topNow = false;
    nowType = 'guonei',
        lastKey = {
            top: 0,
            guoji: 0,
            keji: 0,
            caijing: 0,
            junshi: 0,
            shehui: 0,
            yule: 0,
            shishang: 0,
            renwu: 0,
            zhichang: 0,
            shendu: 0,
            shipin: 0,
            yinpin: 0,
            fuwu: 0

        };
    timer = null;

    // contentWrap.style.height = css(contentScroll, 'height') + 'px'
    // document.addEventListener('touchmove', event => {
    //     event.preventDefault()
    // })
    getNews('guonei', function (data) {
        createListBefore(contentList, data)
    });




    // 目录滚动
    swiper({
        wrap: navWrap,
        dir: 'x',
        backOut: 'none',
        scrollBar: false,
    })
    // 整页面滚动
    swiper({
        wrap: wrapper,
        backOut: 'back',
        scrollBar: false,
        move() {
            let headHeight = css(head, 'height'),
                scrollHeight = css(wrapper.children[0], 'translateY');

            if (scrollHeight <= -headHeight) { //固定目录
                css(navWrap, { translateY: -scrollHeight - headHeight })
                console.log('75',css(navWrap, 'translateY'))
                topNow = true;
            } else {
                topNow = false;
            }
            if (scrollHeight > 0) {  //下拉只下拉内容页面，固定头部
                scrollHeight = scrollHeight > 0 ? scrollHeight : 0;
                css(headWrap, { translateY: -scrollHeight })
                css(navWrap, { translateY: 0 })
            }
            if (scrollHeight > 80) {
                updating.style.animation = 'update 3s linear  infinite';
                updateFlag = true;
            }
        },
        toTop() {
            setTimeout(() => {
                if (updateFlag) {
                    tweenMove({
                        el: wrapper.children[0],
                        type: 'easeOutStrong',
                        target: {
                            'translateY': 80
                        },
                        time: 500,
                        callIn() {
                            let scrollHeight = css(wrapper.children[0], 'translateY');
                            if (scrollHeight > 0) {
                                css(headWrap, { translateY: -scrollHeight })
                                css(navWrap, { translateY: 0 })
                            }
                        },
                        callBack() {
                            getNews(nowType, function (data) {
                                console.log(nowType, data)
                                createListBefore(contentList, data);
                                tweenMove({
                                    el: wrapper.children[0],
                                    type: 'easeOutStrong',
                                    target: {
                                        'translateY': 0
                                    },
                                    time: 300,
                                    callIn() {
                                        let scrollHeight = css(wrapper.children[0], 'translateY');
                                        if (scrollHeight > 0) {
                                            css(headWrap, { translateY: -scrollHeight })
                                            css(navWrap, { translateY: 0 })
                                        }
                                    }
                                });
                                updateFlag = false;
                            });


                        }
                    })

                }
            }, 16);
        },
        toBottom() {
            getNews(nowType, function (data) {
                createListAfter(contentList, data)
            })
        }
    })

    // 请求数据
    function getNews(type, cb) {
        $.ajax({
            url: '/getNews',
            type: "get",
            data: {
                type
            },
            success: function (data) {
                cb && cb(JSON.parse(data));
            }
        });
    }

    function createListBefore(ele, data) {
        if (data && lastKey[nowType] != data[0]["uniquekey"]) {
            let str = ``;
            for (let i = 0; i < data.length; i++) {
                
            console.log('bb', nowType == 'top' ?  data[i].date : '')
                str += `<a class="content_item">
                <div class="item_word">
                    <h4>${data[i].title}</h4>
                    <p>${data[i].author_name}  ${nowType == 'guonei' ?  data[i].date : ''}</p>
                </div>
                <div class="item_img">
                    <img src="${data[i].thumbnail_pic_s}" alt="">
                </div>
            </a>`
            }
            ele.innerHTML = str + ele.innerHTML;
            css(contentWrap, { height: css(contentScroll, 'height') });
            lastKey[nowType] = data[0]["uniquekey"];
        } else {
            console.log('数据相同');
            dialog.style.display = 'block';
            setTimeout(() => {
                dialog.style.display = 'none';
            }, 2000);
        }


    }
    function createListAfter(ele, data) {
        if (data && lastKey[nowType] != data[0]["uniquekey"]) {
            let str = ``;
            for (let i = 0; i < data.length; i++) {
                str += `<a class="content_item">
                <div class="item_word">
                    <h4>${data[i].title}</h4>
                    <p>${data[i].author_name} · ${data[i].date}</p>
                </div>
                <div class="item_img">
                    <img src="${data[i].thumbnail_pic_s}" alt="">
                </div>
            </a>`
            }
            ele.innerHTML += str;
            css(contentWrap, { height: css(contentScroll, 'height') });
            lastKey[nowType] = data[0]["uniquekey"];
        } else {
            console.log('数据相同');
            dialog.children[0].innerHTML = '暂无数据，请稍后加载'
            dialog.style.display = 'block';
            setTimeout(() => {
                dialog.style.display = 'none';
            }, 2000);
            css(wrapper.children[0], {
                translateY: css(wrapper.children[0], 'translateY') + 50
            })
            css(navWrap, { translateY: -css(wrapper.children[0], 'translateY') - 40 })
            // tweenMove({
            //     el: wrapper.children[0],
            //     time: 200,
            //     type: 'linear',
            //     target: {
            //         translateY: css(wrapper.children[0], 'translateY') + 50
            //     },
            //     callBack(){
            //     css(navWrap, { translateY: -css(wrapper.children[0], 'translateY') - 40 })
            //     }
            // })
        }


    }

    // 轮播图

    imgWrap.innerHTML += imgWrap.innerHTML;
    let cn = 0,
        nowPageX = 0,
        distanceX = 0,
        clientWidth = css(banner, 'width'),
        length = imgWrap.children.length;
    css(imgWrap, { width: clientWidth * length })
    swiper({
        wrap: banner,
        dir: 'x',
        scrollBar: false,
        isBuffer: false,
        start() {
            clearInterval(timer);

            // cancelAnimationFrame(imgWrap.timer);
            if (cn == 0) {  // 0 -> 4
                cn = length / 2;
                css(this.children[0], { translateX: -cn * clientWidth });
            } else if (cn == length - 1) {  //7 -> 3
                cn = length / 2 - 1;
                css(this.children[0], { translateX: -cn * clientWidth })
            }
        },
        move(event) {
            nowPageX = event.touches[0].pageX;
            distanceX = nowPageX - this.startPoint.x;
        },
        end() {
            if (Math.abs(distanceX) >= clientWidth / 8) {
                if (distanceX < 0) {  //向右运动
                    cn++;
                } else {
                    cn--;
                }
            }
            tweenMove({
                el: imgWrap,
                type: 'easeOutStrong',
                target: {
                    translateX: -cn * clientWidth
                },
                time: 500,
                callBack() {
                    let active = document.querySelector('.circle_wrap .circle_active');
                    active.className = "";
                    let n = cn % spans.length;
                    spans[n].className = 'circle_active';
                    autoPlay();
                }
            })
        }
    })
    // 自动轮播
    function autoPlay() {
        clearTimeout(timer);
        timer = setInterval(() => {
            if (cn == length / 2) {
                cn = 0
                css(imgWrap, { translateX: 0 });
            } else if (cn == length - 1) {
                cn = length / 2 - 1;
                css(imgWrap, { translateX: - cn * clientWidth });
            }
            cn++;
            tweenMove({
                el: imgWrap,
                type: 'easeOutStrong',
                target: {
                    translateX: -cn * clientWidth
                },
                time: 500,
                callBack() {
                    let active = document.querySelector('.circle_wrap .circle_active');
                    active.className = "";
                    let n = cn % spans.length;
                    spans[n].className = 'circle_active';
                }
            })
        }, 2500);
    }

    autoPlay()



    // 显示目录
    // navIcon.addEventListener('touchstart', () => {
    //     console.log(navFlag)
    //     if (navFlag) {
    //         nav.style.display = 'block';
    //         nav.style.transform = 'translateY(0)';
    //         navFlag = false;
    //     } else {
    //         nav.style.display = 'none';
    //         nav.style.transform = 'translateY(-100%)';
    //         navFlag = true;
    //     }
    // })

    $('.nav_wrap .icon').on('touchstart', function () {
        if (navFlag) {
            nav.style.display = 'block';
            nav.style.transform = 'translateY(0)';
            navFlag = false;
        } else {
            nav.style.display = 'none';
            nav.style.transform = 'translateY(-100%)';
            navFlag = true;
        }
    })

    // 点击滚动菜单
    scrollNav.addEventListener('click', event => {
        // console.log(topNow)
        // css(navWrap, {
        //     translateY: 0
        // })
        // if (topNow) {
        //     css(headWrap, {
        //         translateY: -40
        //     })
        //     console.log(css(headWrap, 'translateY'))
        // }

        document.querySelector('.scroll_nav .active').className = "";
        event.target.className = 'active';
        let i = isNumChild(scrollNav, event.target);

        if (i != -1) {
            document.querySelector('.nav .active').className = "";
            list.children[i].children[0].className = 'active';
            changeNavScroll(i)
        }
    })

    // 点击菜单
    nav.addEventListener('click', event => {
        //收回伸展目录
        nav.style.display = 'none';
        nav.style.transform = 'translateY(-100%)';
        navFlag = true;

        document.querySelector('.scroll_nav .active').className = "";
        document.querySelector('.nav .active').className = "";

        event.target.className = 'active';

        // console.log(event.target.parentNode)
        let i = isNumChild(list, event.target.parentNode);

        if (i != -1) {
            scrollNav.children[i].className = 'active';
            changeNavScroll(i)
        }


    })
    function isNumChild(father, child) {
        for (let i = 0; i < father.children.length; i++) {
            if (father.children[i] == child) {
                return i;
            }
        }
        return -1;
    }

    function changeNavScroll(i) {
        if (i == 0 || i == 1) {
            tweenMove({
                el: scrollNav,
                type: 'easeOutStrong',
                target: {
                    translateX: 0
                },
                time: 500
            })
            // scrollNav.style.transform = 'translateX(0)';
        } else if (i < 12) {
            // scrollNav.style.transform = `translateX(-${(i - 1) * 56}px)`;
            tweenMove({
                el: scrollNav,
                type: 'easeOutStrong',
                target: {
                    translateX: -(i - 1) * 56
                },
                time: 500
            })
        } else {
            // scrollNav.style.transform = 'translateX(-605px)'
            tweenMove({
                el: scrollNav,
                type: 'easeOutStrong',
                target: {
                    translateX: -605
                },
                time: 500
            })
        }
        changeContent(i)
    }

    function changeContent(i) {
        contentScroll.children[i].id = '';
        css(contentScroll, {
            translateX: - i * clientWidth,
        })
        nowType = scrollNav.children[i].getAttribute('data-type')
        console.log(nowType)

        tweenMove({
            el: wrapper.children[0],
            type: 'easeOutStrong',
            target: {
                translateY: 85
            },
            time: 200,
            callIn() {
                let headHeight = css(head, 'height'),
                    scrollHeight = css(wrapper.children[0], 'translateY');

                if (scrollHeight > 0) {  //下拉只下拉内容页面，固定头部
                    css(headWrap, { translateY: -scrollHeight })
                    css(navWrap, { translateY: 0 })
                }
                if (scrollHeight > 80) {
                    updating.style.animation = 'update 3s linear  infinite';
                    updateFlag = true;
                }
            },
            callBack() {
                getNews(nowType, function (data) {
                    console.log(data, 'momo')
                    createListBefore(listSection[i].children[0], data)
                    setTimeout(() => {
                        tweenMove({
                            el: wrapper.children[0],
                            type: 'easeOutStrong',
                            target: {
                                'translateY': 0
                            },
                            time: 300,
                            callIn() {
                                let scrollHeight = css(wrapper.children[0], 'translateY');
                                if (scrollHeight > 0) {
                                    css(headWrap, { translateY: -scrollHeight })
                                    css(navWrap, { translateY: 0 })
                                }
                            },
                            callBack() {
                                if (!data) {
                                    contentScroll.children[i].id = "no_data"
                                }
                            }
                        })
                    }, 1000);
                })

            }

        })
    }

    // 滚动内容
    function contentScrollFunc() {
        swiper({
            wrap: contentWrap,
            dir: 'x',
            backOut: 'none',
            scrollBar: false,
            isBuffer: false,
            // move(){
            //     let clientWidth = css(this, 'width');
            //     let num = 0;
            //     let x = Math.abs(css(this.children[0], 'translateX'));
            //     if (x % clientWidth <= clientWidth / 10 && this.direction == 'right') {  //回弹
            //         num = Math.ceil(x / clientWidth);
            //     } else if(x % clientWidth <= clientWidth / 10 && this.direction == 'left'){
            //         num = Math.floor(x / clientWidth)
            //     }
            //     css(this.children[0], {
            //         translateY: -num * clientWidth
            //     })
            //  },
            end() {
                let clientWidth = css(this, 'width');
                let x = Math.abs(css(this.children[0], 'translateX'));

                if (this.direction == 'right') {
                    if (x % clientWidth >= clientWidth / 8) {  //回弹
                        num = Math.ceil(x / clientWidth);
                    } else {
                        num = Math.floor(x / clientWidth)
                    }
                } else if (this.direction == 'left') {
                    if (x % clientWidth <= clientWidth / 8 * 7) {  //回弹
                        num = Math.ceil(x / clientWidth) - 1;
                    } else {
                        num = Math.ceil(x / clientWidth)
                    }

                }
                if (this.direction != 'no' && num < 5 && num >= 0) {
                    tweenMove({
                        el: this.children[0],
                        type: 'easeOutStrong',
                        target: {
                            translateX: - num * clientWidth
                        },
                        time: 500,
                        callBack() {
                            //动画结束回调
                            document.querySelector('.scroll_nav .active').className = "";
                            scrollNav.children[num].className = 'active';
                            let i = isNumChild(scrollNav, scrollNav.children[num]);

                            if (i != -1) {
                                document.querySelector('.nav .active').className = "";
                                list.children[i].children[0].className = 'active';

                                if (i == 0 || i == 1) {
                                    tweenMove({
                                        el: scrollNav,
                                        type: 'easeOutStrong',
                                        target: {
                                            translateX: 0
                                        },
                                        time: 500
                                    })
                                    // scrollNav.style.transform = 'translateX(0)';
                                } else if (i < 12) {
                                    // scrollNav.style.transform = `translateX(-${(i - 1) * 56}px)`;
                                    tweenMove({
                                        el: scrollNav,
                                        type: 'easeOutStrong',
                                        target: {
                                            translateX: -(i - 1) * 56
                                        },
                                        time: 500
                                    })
                                } else {
                                    // scrollNav.style.transform = 'translateX(-605px)'
                                    tweenMove({
                                        el: scrollNav,
                                        type: 'easeOutStrong',
                                        target: {
                                            translateX: -605
                                        },
                                        time: 500
                                    })
                                }
                            }
                        },
                        callIn() {
                            //动画中回调

                        }
                    })
                }
            }
        })
    }
})()

