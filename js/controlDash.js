// コントロールライブラリ（dash.js、再生速度のみvideo要素）
var ControlDash = function (dashPlayer, video) {
    // 再生開始（dash.js）
    function play() {
        dashPlayer.play();
    }
    
    // 再生停止（dash.js）
    function pause() {
        dashPlayer.pause();
    }
    
    // 再生停止状態取得（dash.js）
    function getPaused() {
        return dashPlayer.isPaused();
    }
    
    // 動画時間取得（dash.js）
    function getDuration() {
        return dashPlayer.duration();
    }
    
    // 再生時間設定（dash.js）
    function setCurrentTime(value) {
        dashPlayer.seek(value);
    }
    
    // 再生時間取得（dash.js）
    function getCurrentTime() {
        return dashPlayer.time();
    }
    
    // 再生速度設定（video要素）
    function setSpeed(value) {
        video.playbackRate = value;
    }
    
    // 再生速度取得（video要素）
    function getSpeed() {
        return video.playbackRate;
    }
    
    // ミュート設定（dash.js）
    function setMuted(value) {
        dashPlayer.setMute(value);
    }
    
    // ミュート状態取得（dash.js）
    function getMuted() {
        return dashPlayer.isMuted();
    }
    
    // 音量設定（dash.js）
    function setVolume(value) {
        dashPlayer.setVolume(value);
    }
    
    // 音量取得（dash.js）
    function getVolume() {
        return dashPlayer.getVolume();
    }
    
    return {
        play:play,
        pause:pause,
        getPaused:getPaused,
        getDuration:getDuration,
        setCurrentTime:setCurrentTime,
        getCurrentTime:getCurrentTime,
        setSpeed:setSpeed,
        getSpeed:getSpeed,
        setMuted:setMuted,
        getMuted:getMuted,
        setVolume:setVolume,
        getVolume:getVolume
    };
};