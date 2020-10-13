"use strict";
// export {};
for (var i = 1; i <= 10; i++) {
    var j = i;
    for (var i_1 = 1; i_1 <= 10; i_1++) {
        console.log(i_1 + " X " + j + " = " + i_1 * j);
    }
}
var Name = [
    "Daniel",
    "Daniel",
    "Daniel",
    "Daniel",
    "Daniel",
    "Daniel",
    "Daniel",
    "Daniel",
    "Daniel",
    "Daniel",
];
Name.forEach(function (value) { return console.log(value); });
var obj = {
    name: "Matzer",
    sayName: function () {
        setTimeout(function () {
            for (var i = 0; i < 10; i++) {
                console.log("" + obj.name);
            }
        }, 3000);
    }
};
obj.sayName();
