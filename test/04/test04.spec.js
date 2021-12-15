import chai from 'chai';
import { min } from '../../04/test04.js';
const assert = chai.assert;


describe("#min()", ()=>{
    it("should return number",()=>{
        assert.isNumber(min(3,8),"Not a number");
    })

    it("should be function",()=>{
        assert.isFunction(min,"Not a function");
    })

    it("should return number",()=>{
        assert.strictEqual(min(3,8),3,"Not equal");
    })

    it("should not equal",()=>{
        assert.notEqual(min(3,8),8,"Not a number");
    })

    it("should be truthy",()=>{
        assert.notEqual(min(3,8),"Not truthy");
    })

    it("should be truthy",()=>{
        assert.isNaN(min("r","b"),"Not truthy");
    })

})