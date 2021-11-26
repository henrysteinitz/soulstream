"use strict";
exports.__esModule = true;
exports.VerseMap = exports.Verse = void 0;
var Verse = /** @class */ (function () {
    function Verse(lines, timeInterval) {
        this.lines = lines;
        this.timeInterval = timeInterval;
    }
    Verse.prototype.start = function () {
        return this.timeInterval[0];
    };
    Verse.prototype.end = function () {
        return this.timeInterval[1];
    };
    Verse.prototype.contains = function (time) {
        return this.start() <= time && this.end() >= time;
    };
    Verse.prototype.map = function (cb) {
        return this.lines.map(cb);
    };
    return Verse;
}());
exports.Verse = Verse;
// Get ready for linetime
var VerseMap = /** @class */ (function () {
    function VerseMap(orderedVerses, preprocessing) {
        if (preprocessing === void 0) { preprocessing = true; }
        console.log('versemap');
        console.log(orderedVerses);
        if (preprocessing && orderedVerses) {
            this.verses = orderedVerses.map(function (x) {
                return new Verse(x.body.split('\n'), [x.startTime, x.endTime]);
            });
        }
        else {
            this.verses = orderedVerses;
        }
    }
    VerseMap.prototype.insert = function (verse) {
        var _this = this;
        var lastVerse = true;
        this.verses.forEach(function (v, i) {
            if (verse.start() < v.start()) {
                _this.verses.splice(i, 0, verse);
                lastVerse = false;
                return;
            }
        });
        if (lastVerse) {
            this.verses.push(verse);
        }
    };
    VerseMap.prototype.get = function (time) {
        //bs search not really nes.
        this.verses.forEach(function (verse) {
            if (verse.contains(time)) {
                return verse.lines;
            }
        });
    };
    VerseMap.prototype.getIndex = function (time) {
        //bs search not really nes.
        this.verses.forEach(function (verse, i) {
            if (verse.contains(time)) {
                return i;
            }
        });
    };
    VerseMap.prototype.map = function (cb) {
        return this.verses.map(cb);
    };
    return VerseMap;
}());
exports.VerseMap = VerseMap;
