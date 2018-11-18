// コントロールライブラリ（video要素）
var ControlVideo = function (video) {
    // 再生開始（video要素）
    function play() {
        video.play();
    }
    
    // 再生停止（video要素）
    function pause() {
        video.pause();
    }
    
    // 再生停止状態取得（video要素）
    function getPaused() {
        return video.paused;
    }
    
    // 動画時間取得（video要素）
    function getDuration() {
        return video.duration;
    }
    
    // 再生時間設定（video要素）
    function setCurrentTime(value) {
        video.currentTime = value;
    }
    
    // 再生時間取得（video要素）
    function getCurrentTime() {
        return video.currentTime;
    }
    
    // 再生速度設定（video要素）
    function setSpeed(value) {
        video.playbackRate = value;
    }
    
    // 再生速度取得（video要素）
    function getSpeed() {
        return video.playbackRate;
    }
    
    // ミュート設定（video要素）
    function setMuted(value) {
        video.muted = value;
    }
    
    // ミュート状態取得（video要素）
    function getMuted() {
        return video.muted;
    }
    
    // 音量設定（video要素）
    function setVolume(value) {
        video.volume = value;
    }
    
    // 音量取得（video要素）
    function getVolume() {
        return video.volume;
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