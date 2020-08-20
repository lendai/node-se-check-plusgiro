const checkPlusgiro = require('../src/check-plusgiro')

describe('checkPlusgiro', () => {
  it('should return isValid on legit numbers of different formats', () => {
    expect(checkPlusgiro(2865434).isValid).toEqual(true)
    expect(checkPlusgiro('28 65 43-4').isValid).toEqual(true)
    expect(checkPlusgiro('2865434').isValid).toEqual(true)
    expect(checkPlusgiro('2865-434').isValid).toEqual(true)
    expect(checkPlusgiro('2865 434').isValid).toEqual(true)
    expect(checkPlusgiro('410 54 68-5').isValid).toEqual(true)
    expect(checkPlusgiro('90 20 03-3').isValid).toEqual(true)
    expect(checkPlusgiro('4-2').isValid).toEqual(true)
    expect(checkPlusgiro('4-2').isValid).toEqual(true)
  })

  it('should fail on too short numbers', () => {
    expect(checkPlusgiro().isValid).toEqual(false)
    expect(checkPlusgiro().error).toEqual('TOO_SHORT')
    expect(checkPlusgiro('1').isValid).toEqual(false)
    expect(checkPlusgiro('1').error).toEqual('TOO_SHORT')
  })

  it('should fail on too long numbers', () => {
    expect(checkPlusgiro('123456789').isValid).toEqual(false)
    expect(checkPlusgiro('123456789').error).toEqual('TOO_LONG')
  })

  it('should fail on invalid checksum', () => {
    expect(checkPlusgiro('410 54 68-6').isValid).toEqual(false)
    expect(checkPlusgiro('410 54 68-6').error).toEqual('BAD_CHECKSUM')
  })

  it('should fail on invalid characters', () => {
    expect(checkPlusgiro('daniel').isValid).toEqual(false)
    expect(checkPlusgiro('daniel').error).toEqual('INVALID_CHARACTERS')
  })
})
