import chai from 'chai';
const assert = chai.assert;
import { pyramid } from '../../01/test01.js';

describe("#pyramid",()=>{
    let arrayObject= pyramid();
    it("should retyurn array",()=>{
        assert.isArray(arrayObject,"Not array");
    })

    it("should count element",()=>{
        assert.strictEqual(arrayObject.length,7,"count don't work");
    })

    it("should found object",()=>{
        assert.isObject(arrayObject[0],"Not object");
    })

    it("should found same string",()=>{
        assert.strictEqual(arrayObject[0].test,"#######","Not same string");
    })
})