import chai from 'chai';
import { fizzBuzz } from '../../02/test02.js';
const assert = chai.assert;

describe("#fizzBuzz",()=>{
    let arrayNumber = fizzBuzz();
    it("chould number array",()=>{
        assert.isArray(arrayNumber,"Not array");
    })

    it("chould count array length",()=>{
        assert.strictEqual(arrayNumber.length,100, "Count !=");
    })

    it("chould divide by 3",()=>{
        assert.equal(arrayNumber[2],"fizz","Not fizz");
    })

    it("chould divide by 5",()=>{
        assert.equal(arrayNumber[4],"buzz","Not Buzz");
    })

    it("chould divide by 3 and 5 ",()=>{
        assert.equal(arrayNumber[14],"FizzBuzz","Not FizzBuzz");
    })
})