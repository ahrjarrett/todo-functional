const inc = require('../public/js/internal/_inc')
let counter = 0

describe('increment fn:', () => {
  it('should increment a number', () => {
    inc(1).should.eql(2)
    inc(10).should.eql(11)
  })

  it('should increment a variable w/o mutating it', () => {
    inc(counter).should.eql(1)
    inc(counter).should.eql(1)
  })

})


