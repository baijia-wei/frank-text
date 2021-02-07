import classes from "../classes";
describe("classes",() =>{
    it('接受一个参数', function () {
        const result =classes('a')
        expect(result).toEqual('a')
    })

    it('接受2个参数', function () {
        const result =classes('a','c')
        expect(result).toEqual('a c')
    });
})