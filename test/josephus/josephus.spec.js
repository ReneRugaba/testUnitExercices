import chai from 'chai';
import { josephus } from '../../josephus/josephus.js';
const assert = chai.assert;

describe("#josephus()",()=>{
    it("should be number of prisonner",()=>{
        assert.isNumber(josephus(5,3),"Not number");
    })
})