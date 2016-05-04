/**
 * Json
 */

let json = (function() {
    return {
        toJson: function(param) {
            let arr = param.split('&'),
                json = {};

            arr.forEach(function(item) {
                let arr = item.split('=');
                json[arr[0]] = decodeURIComponent(arr[1]);
            });

            return json;
        },

        toParam: function(json) {
            let param = [];

            for (let key in json) {
                if (json.hasOwnProperty(key)) {
                    param.push(key + '=' + encodeURIComponent(json[key]));
                }
            }

            return param.join('&');
        }
    };
})();

export default json;
