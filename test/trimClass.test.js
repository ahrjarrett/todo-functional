const trimClass = require('../public/js/src/trimClass')

describe('trimClass fn:', () => {
  it('should trim the input', () => {
    trimClass('type-info', new RegExp('type-')).should.eql('info')
  })
})
