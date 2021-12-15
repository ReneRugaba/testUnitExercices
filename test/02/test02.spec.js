import chai from 'chai';
import { fizzBuzz } from '../../02/test02.js';
const assert = chai.assert;

describe("#fizzBuzz",()=>{
    let arrayNumber = fizzBuzz();
    it("should number array",()=>{
        assert.isArray(arrayNumber,"Not array");
    })

    it("should count array length",()=>{
        assert.strictEqual(arrayNumber.length,100, "Count !=");
    })

    it("should divide by 3",()=>{
        assert.equal(arrayNumber[2],"fizz","Not fizz");
    })

    it("should divide by 5",()=>{
        assert.equal(arrayNumber[4],"buzz","Not Buzz");
    })

    it("should divide by 3 and 5 ",()=>{
        assert.equal(arrayNumber[14],"FizzBuzz","Not FizzBuzz");
    })
})