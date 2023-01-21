function my_post_score(a) {
    return ad_show(),
    set_shareinfo(a),
    _post_score(a),
    1
}
function my_start() {
    oAdTop = $("#ad-top"),
    ad_hidden()
}
function my_share() {
    config_info.protocolShare ? window.location = "meiriq://share": ($("#meiriq-share").fadeIn(50), $("#meiriq-share").click(function() {
        $(this).fadeOut(50)
    }))
}
function my_more() {
	alert('mymore');
    //window.location = config_info.more_link
}
function ad_show() {
    if (config_info.is_ad) {
        if (autobox_ad_last_time = window.localStorage.getItem("autobox_ad_last_time"), autobox_ad_last_time) {
            if (now = Date.now(), now < autobox_ad_last_time) return;
            if (now - autobox_ad_last_time < 3e4) return
        }
        oAdTop = $("#ad-top"),
        oAdTop.length > 0 && (oAdTop.fadeIn(300), window.localStorage.setItem("autobox_ad_last_time", Date.now()))
    }
}
function ad_hidden() {
    oAdTop = $("#ad-top"),
    oAdTop.length > 0 && $("#ad-top").fadeOut(300)
}
function set_shareinfo(a) {
    null != a && (gameDetail = gameResult.replace(/{score}/, a)),
    config_info.is_weixin && wx_ready()
}
function _post_score(a) {
    config_info.protocolPutscore ? window.location = "meiriq://gameover?score=" + a: config_info.weixin_rank && (player_highest_score < value && ($("#rankblock").css("display", "block"), setTimeout(function() {
        $("#rankblock").css("display", "none")
    },
    3e3)), $.post(config_info.post_score_url, {
        score: value,
        show_rank_count: show_rank_count
    },
    function(a) {
        $("#rankblock").css("display", "none"),
        void 0 !== a.rank && (show_rank_count++, meiriq_rank.setRank(a), meiriq_rank.showRank())
    },
    "json")),
    "" !== fiframe && (timestamp = Date.parse(new Date), parent.location.href = fiframe + "#score=" + a + "&time=" + timestamp)
}
function wx_ready() {
    wx.ready(function() {
        wx.onMenuShareAppMessage({
            title: gameTitle,
            desc: gameDetail,
            link: gameLink,
            imgUrl: gameIconUrl,
            trigger: function(a) {},
            success: function(a) {
                $.get(meiriq_stat.sharesuccess_url)
            },
            cancel: function(a) {},
            fail: function(a) {}
        }),
        wx.onMenuShareTimeline({
            title: gameDetail,
            link: gameLink,
            imgUrl: gameIconUrl,
            trigger: function(a) {},
            success: function(a) {
                $.get(meiriq_stat.sharesuccess_url)
            },
            cancel: function(a) {},
            fail: function(a) {}
        }),
        wx.onMenuShareQQ({
            title: gameTitle,
            desc: gameDetail,
            link: gameLink,
            imgUrl: gameIconUrl,
            trigger: function(a) {},
            complete: function(a) {},
            success: function(a) {
                $.get(meiriq_stat.sharesuccess_url)
            },
            cancel: function(a) {},
            fail: function(a) {}
        }),
        wx.onMenuShareWeibo({
            title: gameTitle,
            desc: gameDetail,
            link: gameLink,
            imgUrl: gameIconUrl,
            trigger: function(a) {},
            complete: function(a) {},
            success: function(a) {
                $.get(meiriq_stat.sharesuccess_url)
            },
            cancel: function(a) {},
            fail: function(a) {}
        })
    })
}
function editComment() {
    document.getElementById("comment").style.display = "block"
}
config_info.is_weixin && (url = config_info.weixin_config_url + "?url=" + encodeURIComponent(window.location), $.get(url,
function(a) {
    wx.config({
        debug: !1,
        appId: a.appId,
        timestamp: a.timestamp,
        nonceStr: a.nonceStr,
        signature: a.signature,
        jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
    }),
    wx_ready()
})),
$(document).ready(function() {
    if ($.post(config_info.load_stat_url), $("#downloadbutton").click(function() {
        $.post($(this).data("link"))
    }), config_info.weixin_rank) {
        var a = document.getElementById("rank-start");
        a.addEventListener("touchstart",
        function() {
            meiriq_rank.hideRank()
        },
        !1)
    }
});
var meiriq_rank = new Object;
meiriq_rank.setRank = function(a) {
    meiriq_rank.styleHtml(a),
    meiriq_rank.setHeight(),
    $("#my-ranking").html("\u6211\u7684\u6392\u540d\uff1a" + a.myrank),
    player_highest_score = a.highest_score,
    $("#my-comment").click(function() {
        editComment()
    }),
    setTimeout("meiriq_rank.scrollLoad()", 500)
},
meiriq_rank.setHeight = function() {
    $("#rank-body").height(window.innerHeight - 80 - 80),
    $("#meiriq-rank").height(window.innerHeight - 80)
},
meiriq_rank.styleHtml = function(a) {
    top_html = "",
    after_html = "",
    0 == a.rank.length || ($.each(a.rank,
    function(a, b) {
        3 > a ? (top_html += '<li><div class="float-left rank-medals"><img src="http://meiriq-static.b0.upaiyun.com/autobox/img/top' + (a + 1) + '.png"></div><div class="float-left head-image">', top_html += '<img src="' + b.headimgurl + '">', top_html += '</div><div class="float-left others"><p class="line1">', top_html += '<span class="rank-name">' + b.nickname + "</span>", top_html += '<span class="rank-score">' + b.highest_score + "</span>", top_html += '<span style="clear:both;height:1px;display:block;"></span></p><p class="line2">', 1 == b.current_player ? ("" == b.comment ? comment = "\u8bf4\u70b9\u4ec0\u4e48\u5427....": comment = b.comment, top_html += '<span id="my-comment" class="comment">' + comment + "</span></p></div></li>") : top_html += '<span class="comment">' + b.comment + "</span></p></div></li>") : (after_html += "<li>", after_html += '<div class="float-left rank-num"><span>' + (a + 1) + "</span></div>", after_html += '<div class="float-left head-image"><img src="' + b.headimgurl + '"></div>', after_html += '<div class="float-left others"><p class="line1">', after_html += '<span class="rank-name">' + b.nickname + "</span>", 1 == b.current_player ? after_html += '<span class="rank-score" style="color: #ff9966;">' + b.highest_score + "</span>": after_html += '<span class="rank-score">' + b.highest_score + "</span>", after_html += '<span style="clear:both;height:1px;display:block;"></span></p></div><span style="clear:both;height:1px;display:block;"></span></li>')
    }), $("#rank-top").html(top_html), $("#rank-after").html(after_html))
},
meiriq_rank.showRank = function() {
    $("#meiriq-rank").fadeIn(1)
},
meiriq_rank.hideRank = function() {
    $("#meiriq-rank").fadeOut(1)
};
var myscroll;
meiriq_rank.scrollLoad = function() {
    rank = document.getElementById("meiriq-rank"),
    rank.addEventListener("touchmove",
    function(a) {
        a.preventDefault()
    }),
    myscroll = new IScroll("#rank-body", {
        mouseWheel: !0,
        tap: !0,
        click: !0
    })
},
$(function(a) {
    a(".comment-button").click(function() {
        return comment = a(".comment-input").val(),
        "" == comment ? void alert("\u8bc4\u8bba\u4e0d\u80fd\u4e3a\u7a7a~") : (a("#my-comment").html(comment), document.getElementById("comment").style.display = "none", url = a(".comment-body").data("action"), void a.post(url, {
            comment: comment
        },
        function(a) {
            1 == a.res || console.log(a.message)
        }))
    }),
    a(".comment-close").click(function() {
        document.getElementById("comment").style.display = "none"
    })
});