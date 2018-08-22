var Marco = /** @class */ (function () {
    function Marco() {
        this.actions = [];
    }
    Marco.between = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Marco().between.apply(this, args);
    };
    Marco.startsWith = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Marco().startsWith.apply(this, args);
    };
    Marco.prototype.transform = function (text) {
        return this.actions.reduce(function (text, action) { return action(text); }, text);
    };
    Marco.prototype.between = function (seperator, transform) {
        this.actions.push(function (text) {
            return text.replace(new RegExp(seperator + ".*?" + seperator, 'g'), function (text) { return transform(text.substring(seperator.length - 1, text.length - seperator.length + 1).trim()); });
        });
        return this;
    };
    Marco.prototype.startsWith = function (seperator, transform) {
        this.actions.push(function (text) {
            return text.replace(new RegExp(seperator + ".*", 'g'), function (text) { return transform(text.substring(seperator.length).trim()); });
        });
        return this;
    };
    return Marco;
}());
var t = "\n    # hello!\n    my name is *eliran*\n";
var result = Marco
    .between('\\*', function (text) { return "<strong>" + text + "</strong>"; })
    .startsWith('#', function (text) { return "<h1>" + text + "</h1>"; })
    .transform(t);
console.log(result);
