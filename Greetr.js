(function (global, $) {

    var Greetr = function (firstName, lastName, language) {
        return new SVGLinearGradientElement.init(firstName, lastName, language)
    }
    Greetr.prototype = {};
    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstname || '';
        self.lastName = lastname || '';
        self.language = language || 'en';
    }
    Greetr.init.prototype = Greetr.prototype;
    global.Greetr = global.G$ = Greetr; 
}(window, global))