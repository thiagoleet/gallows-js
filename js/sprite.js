var createSprite = function (selector) {
    var $el = $(selector);
    var frames = [
        'frame1',
        'frame2',
        'frame3',
        'frame4',
        'frame5',
        'frame6',
        'frame7',
        'frame8',
        'frame9',
    ];

    var current = 0;
    var last = frames.length - 1;
    $el.addClass(frames[current]);

    var nextFrame = function () {
        if (hasNext()) {
            moveFrame(current, ++current);
        }
    };

    var reset = function () {
        moveFrame(current, 0);
        current = 0;
    };

    var isFinished = function () {
        return !hasNext();
    };

    var moveFrame = function (from, to) {
        $el.removeClass(frames[from])
            .addClass(frames[to]);
    };

    var hasNext = function () {
        return current + 1 <= last;
    };


    return {
        nextFrame: nextFrame,
        reset: reset,
        isFinished: isFinished
    };
}