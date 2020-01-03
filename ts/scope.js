var num = 20;
var getUser = function () {
    var name = 'jhonny';
    return name;
};
console.log(getUser());
var sum = function () {
    var num = 20;
    return function subNum() {
        return num + 10;
    };
    subNum();
};
console.log(sum());
