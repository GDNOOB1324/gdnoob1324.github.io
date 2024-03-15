var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var urlParams = (new URL(window.location)).searchParams;

function getV(n) {
    switch (n) {
        case 0: return 'oCrobJMZBTo';
        case 1: return 'YCg__giT4ko';
        case 2: return '29N8_pSsWCE';
        case 3: return 'RBIUyqNBnZs';
    }
}

var player;
function onYouTubeIframeAPIReady() {
    let videoId = getV(id);
    let id = Number(urlParams.get('tab'));
    player = new YT.Player('yt', {
        videoId: videoId,
        playerVars: {
            'rel': 0,
            'controls': 1,
            'loop': 1,
            'playsinline': 1,
        },
        events: {
            'onReady': (e) => { e.target.playVideo(); },
            'onStateChange': (e) => { }
        }
    });
    let button = $('.controller>button');
    button.removeClass("focus");
    button.eq(id).addClass("focus");
}

function changeVideo(id) {
    let button = $('.controller>button');
    let videoId = getV(id);
    switch (id) {
        case 0: videoId = 'oCrobJMZBTo'; break;
        case 1: videoId = 'YCg__giT4ko'; break;
        case 2: videoId = '29N8_pSsWCE'; break;
        case 3: videoId = 'RBIUyqNBnZs'; break;
    }
    button.removeClass("focus");
    button.eq(id).addClass("focus");
    urlParams.set('tab', id);
    window.history.pushState({}, null, '?tab=' + id);
    player.loadVideoById(videoId);
}