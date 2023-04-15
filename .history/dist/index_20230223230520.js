var sex;
(function (sex) {
    sex["male"] = "\u7537";
    sex["female"] = "\u5973";
})(sex || (sex = {}));
const res = {
    name: 'li',
    age: 12,
    sex: sex.male,
    type: 1,
    createTime: '2022-02-02'
};
const userInfo = res;
console.log(userInfo);
