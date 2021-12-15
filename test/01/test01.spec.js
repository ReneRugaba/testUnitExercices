import chai from 'chai';
const assert = chai.assert;
import { pyramid } from '../../01/test01.js';

describe("#pyramid",()=>{
    it("should retyurn array",()=>{
        assert.isArray(pyramid(),"Not array");
    })

    it("should count element",()=>{
        assert.strictEqual(pyramid().length,7,"count don't work");
    })

    it("should found object",()=>{
        assert.isObject(pyramid()[0],"Not object");
    })

    it("should found same string",()=>{
        assert.strictEqual(pyramid()[0].test,"#######","Not same string");
    })
})