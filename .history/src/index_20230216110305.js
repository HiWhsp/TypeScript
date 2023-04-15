var Permission;
(function (Permission) {
    // 通过2进制位上的标识确定权限
    Permission[Permission["Read"] = 1] = "Read";
    Permission[Permission["Write"] = 2] = "Write";
    Permission[Permission["Create"] = 4] = "Create";
    Permission[Permission["Delete"] = 8] = "Delete";
})(Permission || (Permission = {}));
var p1 = Permission.Read | Permission.Write;
var p2 = Permission.Read | Permission.Write;
console.log(p1, p2);
// function hasPermission(target: Permission, per: Permission) {
//   //target里面包不包含per
//   return (target & per) === per; //且运算
// }
// // 判断变量p2是否拥有可读权限
// console.log(hasPermission(p2, Permission.Read));
p2 = p2 ^ Permission.Write;
console.log(p2);
