var showLeftPanel = function() {
    var leftPanel = document.getElementById("leftPanel");
    var button = document.getElementById("leftBtnText");
    tween(leftPanel.style, "left", -120, 0, 500, function(start, end, time, duration) {
        return ((end - start) / duration * time + start).toString() + "%";
    }, function() {
        button.style.display = "none";
    });
    tween(button.style, "opacity", 1, 0, 200);
};

var showRightPanel = function() {
    var rightPanel = document.getElementById("rightPanel");
    var button = document.getElementById("rightBtnText");
    tween(rightPanel.style, "right", -120, 0, 500, function(start, end, time, duration) {
        return ((end - start) / duration * time + start).toString() + "%";
    }, function() {
        button.style.display = "none";
    });
    tween(button.style, "opacity", 1, 0, 200);
};