import chai from 'chai';
import { reverseArray, reverseArrayInPlace } from '../../08/test08.js';
const assert = chai.assert


describe("#reverseArray()",()=>{
    it("should be reverse array",()=>{
        assert.strictEqual(reverseArray(["A", "B", "C"])[0],"C", "Not equal");
    })

    it("should be array",()=>{
        assert.isArray(reverseArray(["A", "B", "C"]), "Not an array");
    })

    it("should be same array",()=>{
        assert.deepEqual(reverseArray(["A", "B", "C"]),["C", "B", "A"], "Not same array");
    })

    it("should no be string",()=>{
        assert.isNotString(reverseArray(["A", "B", "C"]), "Not string");
    })
})

describe("#reverseArrayInPlace()",()=>{
    it("should be reverse array",()=>{
        assert.strictEqual(reverseArrayInPlace(["A", "B", "C"])[0],"C", "Not equal");
    })

    it("should be array",()=>{
        assert.isArray(reverseArrayInPlace(["A", "B", "C"]), "Not an array");
    })

    it("should be same array",()=>{
        assert.deepEqual(reverseArrayInPlace(["A", "B", "C"]),["C", "B", "A"], "Not same array");
    })

    it("should no be string",()=>{
        assert.isNotString(reverseArrayInPlace(["A", "B", "C"]), "Not string");
    })
})