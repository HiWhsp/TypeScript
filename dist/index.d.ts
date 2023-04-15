declare enum sex {
    male = "\u7537",
    female = "\u5973"
}
interface userInfo {
    name: string;
    age: number;
    sex: sex;
}
declare const res: {
    name: string;
    age: number;
    sex: sex;
    type: number;
    createTime: string;
};
declare const userInfo: userInfo;
