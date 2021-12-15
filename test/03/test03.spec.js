import chai from 'chai';
import { chessboard } from '../../03/test03.js';
const assert = chai.assert;


describe("#chessboard()",()=>{
    let chess= chessboard();
    it("should return array", ()=>{
        assert.isArray(chess,"Not array");
    })

    it("should return length array", ()=>{
        assert.strictEqual(chess.length, 10 ,"Count not equal");
    })

    it("should find same string",()=>{
        assert.match(chess[0],/# # # #/, "first regex not match");
        assert.match(chess[1],/ # # # #/,"second regex not  match");
    })

    it("should is a string in array",()=>{
        assert.isString(chess[0], "first regex not match"); 
        assert.isString(chess[1], "first regex not match");
    })

    it("should find the first element in array",()=>{
        assert.strictEqual(chess.shift()," # # # #","Not first element");
    })

    it("should find the last element in array",()=>{
        assert.strictEqual(chess.pop()," # # # #","Not first element");
    })
})