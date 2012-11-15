if ('undefined' != typeof require) {
  var sum = require('../lib/operator').sum;
}

describe('Operator', function(){
  describe('sum', function(){
    it('should return correct number when', function(){
      expect(sum(1,2)).toEqual(3);
      expect(sum(3,9)).toEqual(12);
    })
    
    it('should return the correct summary when have negative', function(){
      expect(sum(1,-2)).toEqual(-1);
      expect(sum(-4,9)).toEqual(5);
    })
  })
})