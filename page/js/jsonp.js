
function doJsonp(type, cb) {
    let oScript = document.createElement('script');
    console.log(document.body)

    oScript.src = `http://v.juhe.cn/toutiao/index?type=${type}&key=f48f2ef8351c0806f1ba20ff1f4a18a2&callback=${cb}`;

    document.body.appendChild(oScript);

    oScript.remove();
}

function show(data) {
    console.log(data)
}

// doJsonp(top,show)
// $.ajax({
//     url:`http://v.juhe.cn/toutiao/index?type=shehui&key=f48f2ef8351c0806f1ba20ff1f4a18a2`,
//     type: 'GET',
//     dataType: 'jsonp',
//     success:function(data){
//         console.log(data);
//     },
//     error: function(err){
//         console.log(err);
//     }
// });

// $.ajax({
//     url:'http://v.juhe.cn/weather/index?format=2&cityname='+this.cityName+'&key=3388a8407a44d0ef22ab8a0a2b726413',
//     type: 'GET',
//     dataType: 'jsonp',
//     success:function(data){
//         console.log(data);
//     },
//     error: function(err){
//         console.log(err);
//     }
// });

url = 'http://v.juhe.cn/toutiao/index?type=shehui&key=f48f2ef8351c0806f1ba20ff1f4a18a2';
// $.ajax({
//     url: '/getNews',
//     type: "get",
//     data: {
//         type: 'shehui'
//     },
//     success: function (data) {
//         console.log(data)
//     }
// });

// let s = {
//     "reason": "成功的返回",
//     "result": {
//         "stat": "1",
//         "data": [
//             {
//                 "uniquekey": "70bf3dd67d00a14d7fa831df244414b1",
//                 "title": "年关将至，湖北阳新白沙镇一手机店一夜之间被洗劫一空",
//                 "date": "2019-12-19 11:26",
//                 "category": "社会",
//                 "author_name": "阳新风情",
//                 "url": "http:\/\/mini.eastday.com\/mobile\/191219112647175.html",
//                 "thumbnail_pic_s": "http:\/\/00imgmini.eastday.com\/mobile\/20191219\/2019121911_c15070e5cbbf4d0e95e53bebc9bd8384_7859_cover_mwpm_03200403.jpg",
//                 "thumbnail_pic_s02": "http:\/\/00imgmini.eastday.com\/mobile\/20191219\/2019121911_1eb07d244f734f93b2f14859ea57a0b8_7281_cover_mwpm_03200403.jpg",
//                 "thumbnail_pic_s03": "http:\/\/00imgmini.eastday.com\/mobile\/20191219\/2019121911_c3554d32d0bb4f6d9f98194a41003bc5_2458_cover_mwpm_03200403.jpg"
//             },
//             { "uniquekey": "5163511453849f934740ba294db32b40", "title": "青岛警方斩断跨省贩毒通道 抓获12名涉毒嫌疑人", "date": "2019-12-19 11:25", 
//             "category": "社会",
//              "author_name": "青岛新闻网", 
//              "url": "http:\/\/mini.eastday.com\/mobile\/191219112553006.html",
//               "thumbnail_pic_s": "http:\/\/02imgmini.eastday.com\/mobile\/20191219\/20191219112553_ab2a455e57613a2bef8429bf85254cdb_4_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/02imgmini.eastday.com\/mobile\/20191219\/20191219112553_323291cc93ac35fe3d5fa75703190aa2_3_mwpm_03200403.jpg", "thumbnail_pic_s03": "http:\/\/02imgmini.eastday.com\/mobile\/20191219\/20191219112553_827e93c9ea818f94652598821c1ae04c_2_mwpm_03200403.jpg" }, { "uniquekey": "decfb914ca96f75dc525a6fdc23362a3", "title": "奖学金引起的血案 沈大受伤学生女友回忆事发经过", "date": "2019-12-19 11:21", "category": "社会", "author_name": "北京青年报", "url": "http:\/\/mini.eastday.com\/mobile\/191219112156666.html", "thumbnail_pic_s": "http:\/\/01imgmini.eastday.com\/mobile\/20191219\/20191219112156_b038a48cb4d56df13b7e63c1aeef0b4c_1_mwpm_03200403.jpg" }, { "uniquekey": "84d14d20301c8f34653689b13f1b9b0f", "title": "工信部：移动电话用户规模首超16亿户", "date": "2019-12-19 11:21", "category": "社会", "author_name": "中国新闻网", "url": "http:\/\/mini.eastday.com\/mobile\/191219112156600.html", "thumbnail_pic_s": "http:\/\/09imgmini.eastday.com\/mobile\/20191219\/20191219112156_b371745166a862ddac08329136f1caaa_2_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/09imgmini.eastday.com\/mobile\/20191219\/20191219112156_b371745166a862ddac08329136f1caaa_1_mwpm_03200403.jpg" }, { "uniquekey": "10c38fc2208ae43eeae938cca884d3df", "title": "只因司机多停出100米，六旬男子抢拉方向盘：你给我倒回去！", "date": "2019-12-19 11:21", "category": "社会", "author_name": "北京晚报", "url": "http:\/\/mini.eastday.com\/mobile\/191219112156576.html", "thumbnail_pic_s": "http:\/\/01imgmini.eastday.com\/mobile\/20191219\/20191219112156_e873f4f4b8cc4edbedcaf08441380cc9_1_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/01imgmini.eastday.com\/mobile\/20191219\/20191219112156_e873f4f4b8cc4edbedcaf08441380cc9_2_mwpm_03200403.jpg" }, { "uniquekey": "8ba6d55a71d450d5213d625e4ae55073", "title": "网约车司机突发脑出血 事发时忍痛说了一句话", "date": "2019-12-19 11:21", "category": "社会", "author_name": "北青网", "url": "http:\/\/mini.eastday.com\/mobile\/191219112149977.html", "thumbnail_pic_s": "http:\/\/08imgmini.eastday.com\/mobile\/20191219\/20191219112149_7e070725fc529cc3aba6a994b81757aa_1_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/08imgmini.eastday.com\/mobile\/20191219\/20191219112149_7e070725fc529cc3aba6a994b81757aa_3_mwpm_03200403.jpg", "thumbnail_pic_s03": "http:\/\/08imgmini.eastday.com\/mobile\/20191219\/20191219112149_7e070725fc529cc3aba6a994b81757aa_2_mwpm_03200403.jpg" }, { "uniquekey": "1af6e7bbd83c3cb7a095a6e39fea3c1d", "title": "高明中学生发明“360度太阳能喂鱼机”", "date": "2019-12-19 11:18", "category": "社会", "author_name": "佛山在线", "url": "http:\/\/mini.eastday.com\/mobile\/191219111816586.html", "thumbnail_pic_s": "http:\/\/07imgmini.eastday.com\/mobile\/20191219\/20191219111816_1680359ba583d0600892a8d2daf394c3_1_mwpm_03200403.jpg" }, { "uniquekey": "acfe7367a2d072df2700d5603a885e09", "title": "刘庸之获评“非遗传承功勋模范人物”", "date": "2019-12-19 11:17", "category": "社会", "author_name": "襄阳晚报", "url": "http:\/\/mini.eastday.com\/mobile\/191219111757387.html", "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20191219\/20191219111757_0ebc095c1ee506917da6e00e930fba83_1_mwpm_03200403.jpg" }, { "uniquekey": "27d31e40934133697cf5835afa1693b8", "title": "这款网红零食被“打脸”：自称不爱乱添加，却被检出......很多超市都有卖！", "date": "2019-12-19 11:17", "category": "社会", "author_name": "东方卫报", "url": "http:\/\/mini.eastday.com\/mobile\/191219111706144.html", "thumbnail_pic_s": "http:\/\/00imgmini.eastday.com\/mobile\/20191219\/20191219111706_2bb708a7d75284d82e7db26b7508a157_6_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/00imgmini.eastday.com\/mobile\/20191219\/20191219111706_2bb708a7d75284d82e7db26b7508a157_11_mwpm_03200403.jpg", "thumbnail_pic_s03": "http:\/\/00imgmini.eastday.com\/mobile\/20191219\/20191219111706_2bb708a7d75284d82e7db26b7508a157_1_mwpm_03200403.jpg" }, { "uniquekey": "f7b781db276aa2c1639932ce3996af37", "title": "梵净山客运索道维护保养 , 对外运营时间调整 !", "date": "2019-12-19 11:13", "category": "社会", "author_name": "ZAKER网", "url": "http:\/\/mini.eastday.com\/mobile\/191219111339347.html", "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20191219\/20191219111339_cc121bd60b549b22eb612d27bc8d88f6_5_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/05imgmini.eastday.com\/mobile\/20191219\/20191219111339_cc121bd60b549b22eb612d27bc8d88f6_2_mwpm_03200403.jpg", "thumbnail_pic_s03": "http:\/\/05imgmini.eastday.com\/mobile\/20191219\/20191219111339_cc121bd60b549b22eb612d27bc8d88f6_8_mwpm_03200403.jpg" }, { "uniquekey": "ef047225ea886d9d06ecad432f04f546", "title": "你的朋友圈被刷屏了吗：老爸，敬礼", "date": "2019-12-19 11:12", "category": "社会", "author_name": "新闻一号线", "url": "http:\/\/mini.eastday.com\/mobile\/191219111211596.html", "thumbnail_pic_s": "http:\/\/04imgmini.eastday.com\/mobile\/20191219\/2019121911_9544de126c854f1aa808e8f9460414fc_0972_cover_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/04imgmini.eastday.com\/mobile\/20191219\/2019121911_e56e8266a103403bb348c30e5c580476_0449_cover_mwpm_03200403.jpg" }, { "uniquekey": "162b16eb0c63bc80c50f3b206109cb9d", "title": "韶关市区这条“夺命路”将测速抓拍，全路段限速", "date": "2019-12-19 11:11", "category": "社会", "author_name": "韶关看点", "url": "http:\/\/mini.eastday.com\/mobile\/191219111139031.html", "thumbnail_pic_s": "http:\/\/01imgmini.eastday.com\/mobile\/20191219\/20191219111139_069e21045f84f17db42f1b9fa9e64470_2_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/01imgmini.eastday.com\/mobile\/20191219\/20191219111139_069e21045f84f17db42f1b9fa9e64470_8_mwpm_03200403.jpg", "thumbnail_pic_s03": "http:\/\/01imgmini.eastday.com\/mobile\/20191219\/20191219111139_069e21045f84f17db42f1b9fa9e64470_7_mwpm_03200403.jpg" }, { "uniquekey": "acc6113b1ed5b6fbe04a87cb69427883", "title": "连环追尾1人被困，洛阳消防迅速营救", "date": "2019-12-19 11:11", "category": "社会", "author_name": "洛阳看点", "url": "http:\/\/mini.eastday.com\/mobile\/191219111137296.html", "thumbnail_pic_s": "http:\/\/02imgmini.eastday.com\/mobile\/20191219\/20191219111137_ee88ae71accfb39dae39a5e69fe97fc4_2_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/02imgmini.eastday.com\/mobile\/20191219\/20191219111137_ee88ae71accfb39dae39a5e69fe97fc4_1_mwpm_03200403.jpg", "thumbnail_pic_s03": "http:\/\/02imgmini.eastday.com\/mobile\/20191219\/20191219111137_ee88ae71accfb39dae39a5e69fe97fc4_3_mwpm_03200403.jpg" }, { "uniquekey": "886aad249848569f5ad307e980ac8011", "title": "生还矿工回忆求生80多小时：吃皮带喝地下水，“很少睡觉”", "date": "2019-12-19 11:11", "category": "社会", "author_name": "智慧长沙综合", "url": "http:\/\/mini.eastday.com\/mobile\/191219111118766.html", "thumbnail_pic_s": "http:\/\/03imgmini.eastday.com\/mobile\/20191219\/20191219111118_62e49d898948bca34462ecceec827479_1_mwpm_03200403.jpg" }, { "uniquekey": "fb4de82c108582dde8a81ae0d900d806", "title": "昆区三八路自行车撞人致死案，判了", "date": "2019-12-19 11:11", "category": "社会", "author_name": "社会治安管理员", "url": "http:\/\/mini.eastday.com\/mobile\/191219111111639.html", "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20191219\/20191219111111_6ac54b05b9ed86e7138ed6debd07392e_1_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/05imgmini.eastday.com\/mobile\/20191219\/20191219111111_6ac54b05b9ed86e7138ed6debd07392e_2_mwpm_03200403.jpg" }, { "uniquekey": "e4b27c2402cadb31e0b0207478bb4403", "title": "不办ETC,上不了高速了?", "date": "2019-12-19 11:10", "category": "社会", "author_name": "风云北半球", "url": "http:\/\/mini.eastday.com\/mobile\/191219111029830.html", "thumbnail_pic_s": "http:\/\/01imgmini.eastday.com\/mobile\/20191219\/20191219111029_dad4f0124f918b9acd066855e98cac68_1_mwpm_03200403.jpg" }, { "uniquekey": "3c80f8ac826edaaabb91e6f347783aa8", "title": "酒后家暴还打警察 扬州一男子妨害公务被刑拘", "date": "2019-12-19 11:09", "category": "社会", "author_name": "扬州看点", "url": "http:\/\/mini.eastday.com\/mobile\/191219110929283.html", "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20191219\/20191219110929_9593c577c1fd7dc6bbd3e5c6cb12d78a_2_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/05imgmini.eastday.com\/mobile\/20191219\/20191219110929_9593c577c1fd7dc6bbd3e5c6cb12d78a_1_mwpm_03200403.jpg", "thumbnail_pic_s03": "http:\/\/05imgmini.eastday.com\/mobile\/20191219\/20191219110929_9593c577c1fd7dc6bbd3e5c6cb12d78a_3_mwpm_03200403.jpg" }, { "uniquekey": "4010eaec733f21aa43228ced29422b24", "title": "14岁男孩离奇失踪 韶关新区公安8小时跨省解救", "date": "2019-12-19 11:08", "category": "社会", "author_name": "南方法制报TB", "url": "http:\/\/mini.eastday.com\/mobile\/191219110851700.html", "thumbnail_pic_s": "http:\/\/08imgmini.eastday.com\/mobile\/20191219\/20191219110851_cd77b5041876cd1dcb0f5d8f210aadce_3_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/08imgmini.eastday.com\/mobile\/20191219\/20191219110851_cd77b5041876cd1dcb0f5d8f210aadce_1_mwpm_03200403.jpg", "thumbnail_pic_s03": "http:\/\/08imgmini.eastday.com\/mobile\/20191219\/20191219110851_cd77b5041876cd1dcb0f5d8f210aadce_2_mwpm_03200403.jpg" }, { "uniquekey": "0062eeb6b24bee4b148cb3da8c4b3077", "title": "罗山县公安打掉一个盗窃土狗犯罪团伙", "date": "2019-12-19 11:08", "category": "社会", "author_name": "社会治安管理员", "url": "http:\/\/mini.eastday.com\/mobile\/191219110806861.html", "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20191219\/20191219110806_d10d5aad36bb4ff6283217096ce5f491_1_mwpm_03200403.jpg" }, {
//                 "uniquekey": "289ef92b2e842dc610c3eff5f582b2c9", "title": "原创 中办国办通知：教师减负20条举措来了！老师：终于等到你", "date": "2019-12-19 11:03", "category": "社会", "author_name": "路遥不知马力", "url": "http:\/\/mini.eastday.com\/mobile\/191219110300715.html", "thumbnail_pic_s": "http:\/\/04imgmini.eastday.com\/mobile\/20191219\/20191219110300_34ab4ecd9aa1b1121d7449f8eb760082_1_mwpm_03200403.jpg",
//                 "thumbnail_pic_s02": "http:\/\/04imgmini.eastday.com\/mobile\/20191219\/20191219110300_34ab4ecd9aa1b1121d7449f8eb760082_4_mwpm_03200403.jpg",
//                 "thumbnail_pic_s03": "http:\/\/04imgmini.eastday.com\/mobile\/20191219\/20191219110300_34ab4ecd9aa1b1121d7449f8eb760082_2_mwpm_03200403.jpg"
//             },
//             { "uniquekey": "c295b3af395f89756d417321594eb276", "title": "中科院外籍院士、生物力学之父冯元桢逝世 享年100岁", "date": "2019-12-19 11:02", "category": "社会", "author_name": "人民网", "url": "http:\/\/mini.eastday.com\/mobile\/191219110223405.html", "thumbnail_pic_s": "http:\/\/09imgmini.eastday.com\/mobile\/20191219\/20191219110223_946433e61b49a7ac728727f58a049c48_1_mwpm_03200403.jpg" }, { "uniquekey": "53502129d8a36387f0e29cc34656b8c6", "title": "货船大副不慎跌落10余米深舱 海事执法人员悬索救人", "date": "2019-12-19 11:00", "category": "社会", "author_name": "北青网", "url": "http:\/\/mini.eastday.com\/mobile\/191219110023843.html", "thumbnail_pic_s": "http:\/\/02imgmini.eastday.com\/mobile\/20191219\/20191219110023_776062051f1b2a7d939dbabd57132558_1_mwpm_03200403.jpg" }, { "uniquekey": "6ca4d99aed4da35aaae57ff1f13c98cf", "title": "00后诈骗，易烊千玺躺枪", "date": "2019-12-19 10:58", "category": "社会", "author_name": "根河市人民检察院", "url": "http:\/\/mini.eastday.com\/mobile\/191219105800140.html", "thumbnail_pic_s": "http:\/\/07imgmini.eastday.com\/mobile\/20191219\/20191219105800_4d1a184967300af0978adde3379c4a26_4_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/07imgmini.eastday.com\/mobile\/20191219\/20191219105800_4d1a184967300af0978adde3379c4a26_9_mwpm_03200403.jpg", "thumbnail_pic_s03": "http:\/\/07imgmini.eastday.com\/mobile\/20191219\/20191219105800_4d1a184967300af0978adde3379c4a26_3_mwpm_03200403.jpg" }, { "uniquekey": "2ab117bdd76f3c0c6fc6b6803a27876e", "title": "杂技艺术的摇篮 上海市马戏学校建校30周年纪念演出举行", "date": "2019-12-19 10:56", "category": "社会", "author_name": "东方网", "url": "http:\/\/mini.eastday.com\/mobile\/191219105621780.html", "thumbnail_pic_s": "http:\/\/07imgmini.eastday.com\/mobile\/20191219\/20191219105621_16f491af7b2e9337f210d9467d1463d3_2_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/07imgmini.eastday.com\/mobile\/20191219\/20191219105621_16f491af7b2e9337f210d9467d1463d3_1_mwpm_03200403.jpg", "thumbnail_pic_s03": "http:\/\/07imgmini.eastday.com\/mobile\/20191219\/20191219105621_16f491af7b2e9337f210d9467d1463d3_3_mwpm_03200403.jpg" }, { "uniquekey": "60e106b6b11581bcde410a808545815e", "title": "南通一妻子发现丈夫为情人还房贷 坐不住了", "date": "2019-12-19 10:53", "category": "社会", "author_name": "南通热线", "url": "http:\/\/mini.eastday.com\/mobile\/191219105300577.html", "thumbnail_pic_s": "http:\/\/07imgmini.eastday.com\/mobile\/20191219\/20191219105300_98f5953c4d5a85ffac1708d2fd531acd_4_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/07imgmini.eastday.com\/mobile\/20191219\/20191219105300_98f5953c4d5a85ffac1708d2fd531acd_3_mwpm_03200403.jpg", "thumbnail_pic_s03": "http:\/\/07imgmini.eastday.com\/mobile\/20191219\/20191219105300_98f5953c4d5a85ffac1708d2fd531acd_1_mwpm_03200403.jpg" }, { "uniquekey": "1cd6345bdf82c942ad801afd7a2e692f", "title": "历时9个月大修后的“新世界”首次亮相：全球最高室内攀岩“直通天际”", "date": "2019-12-19 10:52", "category": "社会", "author_name": "东方网", "url": "http:\/\/mini.eastday.com\/mobile\/191219105258742.html", "thumbnail_pic_s": "http:\/\/06imgmini.eastday.com\/mobile\/20191219\/20191219105258_c04a3fbed1e197d266a099b429d9bca2_3_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/06imgmini.eastday.com\/mobile\/20191219\/20191219105258_c04a3fbed1e197d266a099b429d9bca2_10_mwpm_03200403.jpg", "thumbnail_pic_s03": "http:\/\/06imgmini.eastday.com\/mobile\/20191219\/20191219105258_c04a3fbed1e197d266a099b429d9bca2_7_mwpm_03200403.jpg" }, { "uniquekey": "9d25272c9eb881f0e194e1410e3ab4ea", "title": "男子掐死第三任前妻被判死刑，曾两次下药谋害、自杀未果", "date": "2019-12-19 10:51", "category": "社会", "author_name": "南国早报客户端", "url": "http:\/\/mini.eastday.com\/mobile\/191219105117571.html", "thumbnail_pic_s": "http:\/\/08imgmini.eastday.com\/mobile\/20191219\/20191219105117_9166bce62541b8b1967d9f9fc3ef35c4_1_mwpm_03200403.jpg" },
//             { "uniquekey": "5cf1db3a213274c0e31e7543bf6d43c0", "title": "首届“寻找信阳清洁先锋”揭晓仪式在潢川县高楼村举行", "date": "2019-12-19 10:49", "category": "社会", "author_name": "记者报", "url": "http:\/\/mini.eastday.com\/mobile\/191219104947087.html", "thumbnail_pic_s": "http:\/\/06imgmini.eastday.com\/mobile\/20191219\/2019121910_f9213348317444b29cae7ba69cecbc91_1416_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/06imgmini.eastday.com\/mobile\/20191219\/2019121910_c5d39b5816c34feabf1c91dc0a073447_5067_mwpm_03200403.jpg" },
//             { "uniquekey": "9a63863b65903eb6cd8e5a06f88b1a8d", "title": "陌生男子病情危重 派出所民警扮临时家属 轮流陪护救流浪汉一命", "date": "2019-12-19 10:49", "category": "社会", "author_name": "北青网", "url": "http:\/\/mini.eastday.com\/mobile\/191219104931841.html", "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20191219\/20191219104931_25598394e09f00034bf1236636ff47a0_1_mwpm_03200403.jpg" },
//             {
//                 "uniquekey": "112ab726bfd0b83cda3c73b6b9387577", "title": "那些年，我们想要管的“熊孩子”", "date": "2019-12-19 10:49", "category": "社会", "author_name": "根河市人民检察院", "url": "http:\/\/mini.eastday.com\/mobile\/191219104900686.html", "thumbnail_pic_s": "http:\/\/02imgmini.eastday.com\/mobile\/20191219\/20191219104900_104ec719da0a586782214506360bb6f5_2_mwpm_03200403.jpg", "thumbnail_pic_s02": "http:\/\/02imgmini.eastday.com\/mobile\/20191219\/20191219104900_104ec719da0a586782214506360bb6f5_1_mwpm_03200403.jpg",
//                 "thumbnail_pic_s03": "http:\/\/02imgmini.eastday.com\/mobile\/20191219\/20191219104900_104ec719da0a586782214506360bb6f5_3_mwpm_03200403.jpg"
//             }]
//     },
//     "error_code": 0
// }

// console.log(s)
