
class test {
    txt;
    constructor() {
        this.txt = "test function";
    };
    display() {
        return this.txt
    }
}
const obj = new test();
console.log(obj.display());