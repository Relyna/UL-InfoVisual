var tween = function (obj, prop, start, end, duration, evaluate, callback) {
    var startTime = new Date().getTime();
    var timer = setInterval(function () {
        var time = new Date().getTime() - startTime;
        if (time > duration) {
            time = duration;
        }
        var value;
        if (evaluate)
            value = evaluate(start, end, time, duration);
        else
            value = (end - start) / duration * time + start;
        obj[prop] = value;
        if (time == duration) {
            clearInterval(timer);
            callback && callback();
        }
    }, 13);
}