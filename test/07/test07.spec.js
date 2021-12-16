import chai from 'chai';
import { rangeTake2args, rangeTakeArray, rangeTake3args } from '../../07/test07.js';
const assert = chai.assert

describe("#rangeTake2args()",()=>{
    it("should be array",()=>{
        assert.isArray(rangeTake2args(1,10),"Not array");
    })

    it("should be number",()=>{
        assert.isNumber(rangeTake2args(1,10)[0],"Not number");
    })

    it("should be not NaN",() => {
        assert.isNotNaN(rangeTake2args(1,10)[0],"Is NaN");
    })

    it("should be same value",() => {
        assert.strictEqual(rangeTake2args(1,10)[0],1,"Not equal");
    })

    it("should not string",()=>{
        assert.isNotString(rangeTake2args(1,10)[0],"Is string");
    })
})

describe("#rangeTakeArray()", ()=> {
    it("should be number",()=>{
        assert.isNumber(rangeTakeArray(rangeTake2args(1, 10)),"Is not a number");
    })

    it("should be truthy", ()=>{
        assert.isTrue(Boolean(rangeTakeArray(rangeTake2args(1, 10))),"Not truthy");
    })

    it("should not be False", ()=>{
        assert.isNotFalse(Boolean(rangeTakeArray(rangeTake2args(1, 10))),"Is false");
    })

    it("should be same value",()=>{
        assert.strictEqual(rangeTakeArray(rangeTake2args(1, 10)),55,"Not same number");
    })

    it("should not be array",()=>{
        assert.isNotArray(rangeTakeArray(rangeTake2args(1, 10)),"Is an array");
    })
})

describe("#rangeTake3args()",()=>{
    it("should be array",()=>{
        assert.isArray(rangeTake3args(5, 2, -1),"Not an array");
    })

    it("should be number",()=>{
        assert.isNumber(rangeTake3args(5, 2, -1)[0],"Not a number");
    })

    it("should be array",()=>{
        assert.strictEqual(rangeTake3args(5, 2, -1)[0],5,"Not equal");
    })

    it("should be array",()=>{
        assert.strictEqual(rangeTake3args(1, 10, 1)[0],1,"Not equal");
    })

    it("should be array",()=>{
        assert.isTrue(Boolean(rangeTake3args(1, 10, 1)[0]),"Not truthy");
    })
})