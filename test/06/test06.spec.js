import chai from 'chai';
import { countBs, countBs2, return2Char } from '../../06/test06.js';
const assert = chai.assert;


describe("#return2Char()",()=>{
    it("should return 2 char",()=>{
        assert.strictEqual(return2Char("dfgt"),"dt","Not return 2 char");
    })

    it("should count 2 char",()=>{
        assert.strictEqual(return2Char("dfgt").length,2,"Not equal");
    })

    it("should be string",()=>{
        assert.isString(return2Char("dfgt"),"Not string");
    })

    it("should be truthy",()=>{
        assert.isTrue(Boolean(return2Char("dfgt")),"Not truthy");
    })
})

describe("#countBs()",()=>{
    it("should return count of B",()=>{
        assert.strictEqual(countBs("BundBunB"),3,"Not equal with count");
    })

    it("should be truthy",()=>{
        assert.isTrue(Boolean(countBs("BundBunB")),"Not equal with count");
    })

    it("should be number",()=>{
        assert.isNumber(countBs("BundBunB"),"Not a number");
    })

    it("should be function",()=>{
        assert.isFunction(countBs,"Not function");
    })
})

describe("#countBs2()",()=>{
    it("should return count",()=>{
        assert.strictEqual(countBs2("BundBunB","B"),3,"Not equal with count");
    })

    it("should be true",()=>{
        assert.isTrue(Boolean(countBs2("BundBunB","n")),"Not truthy");
    })

    it("should be number",()=>{
        assert.isNumber(countBs2("BundBunB","u"),"Not number");
    })

    it("should not be Nan",()=>{
        assert.isNotNaN(countBs2("BundBunB","u"),"Not number");
    })
})