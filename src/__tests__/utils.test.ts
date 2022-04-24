import { expect } from 'chai'
import * as u from '../utils'

describe(`utils`, () => {
  describe(`clearArr`, () => {
    it(`should empty the array`, () => {
      expect(u.clearArr([1, 2])).to.have.lengthOf(0)
    })

    it(`should keep the reference`, () => {
      const arr = [1, 2]
      expect(u.clearArr(arr)).to.eq(arr)
    })
  })

  describe(`cloneDeep`, () => {
    it(`should deeply clone objects`, () => {
      const obj = {
        a: {
          b: {
            c: {
              d: [1, 2, 3],
              e: {
                f: [
                  '0',
                  'z',
                  () => {},
                  { i: { j: { k: [{ myName: 'Chris' }] } } },
                ],
              },
            },
          },
        },
      }
      const result = u.cloneDeep(obj)
      expect(result).not.to.eq(obj)
      expect(result).to.deep.eq(obj)
    })
  })

  {
    const obj = {
      a: {
        b: {
          c: {
            d: [1, 2, 3],
            e: {
              f: [
                '0',
                'z',
                () => {},
                { i: { j: { k: [{ myName: 'Chris' }] } } },
              ],
            },
          },
        },
      },
    }

    describe(`get`, () => {
      it(`should retrieve the value in objects`, () => {
        const obj = { doc: { user: { firstName: 'Mike' } } }
        expect(u.get(obj, 'doc')).to.eq(obj.doc)
        expect(u.get(obj, 'doc.user.firstName')).to.eq('Mike')
      })

      it(`should retrieve the value in arrays`, () => {
        const obj = { doc: { user: { names: ['Apple', 'Mike'] } } }
        expect(u.get(obj, 'doc.user.names.1')).to.eq('Mike')
      })

      it(`should deeply retrieve values rotating between objects and arrays`, () => {
        expect(u.get(obj, 'a.b.c.e.f.3.i.j.k.0.myName')).to.eq('Chris')
      })
    })

    describe(`has`, () => {
      it(`should return true`, () => {
        const obj = { doc: { user: { firstName: 'Mike' } } }
        expect(u.has(obj, 'doc')).to.be.true
        expect(u.has(obj, 'doc.user.firstName')).to.be.true
      })

      it(`should return true`, () => {
        expect(u.has({ ff: 'a' }, 'ff')).to.be.true
      })

      it(`should return false`, () => {
        expect(u.has({ '': '' }, '')).to.be.true
      })

      it(`should return false`, () => {
        expect(u.has({ ff: '' }, '')).to.be.false
      })

      it(`should return false`, () => {
        expect(u.has({ ff: 'a' }, '')).to.be.false
      })

      it(`should return false`, () => {
        expect(u.has({ ff: 'a' }, 'fff')).to.be.false
      })

      it(`should return true`, () => {
        expect(u.has(obj, 'a.b.c.e.f.3.i.j.k.0.myName')).be.true
      })

      it(`should return true`, () => {
        expect(u.has(obj, 'a.b.c.e.f.3')).be.true
      })

      it(`should return false`, () => {
        expect(u.has(obj, 'a.b.c.e.f.3.a.j.k.0.myName')).to.be.false
      })

      it(`should return false`, () => {
        expect(u.has(obj, 'f.3.a.j.k.0.myName')).to.be.false
      })
    })
  }

  describe(`isIn`, () => {
    it(`should return true if key is a path of an object`, () => {
      expect(u.isIn('a', { a: '' })).to.be.true
    })
  })

  describe(`parseDataURI`, () => {
    it(`should return the expected base64, ext and mimeType`, () => {
      const base64 =
        'R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
      const ext = 'gif'
      const mimeType = `image/${ext}`
      const dataURI = `data:${mimeType};base64,${base64}`
      const result = u.parseDataURI(dataURI)
      expect(result).to.have.property('base64', base64)
      expect(result).to.have.property('ext', ext)
      expect(result).to.have.property('mimeType', mimeType)
    })
  })

  describe(`pick`, () => {
    it(`should return a copy of an object with properties picked from the object`, () => {
      const obj = {
        profile: {
          user: { firstName: 'Chris', age: 31 },
        },
        favoriteColors: ['red', 'blue'],
      }
      expect(u.pick(obj, 'profile'))
        .to.have.property('profile')
        .deep.eq(obj.profile)
    })
  })

  // describe(`toPath`, () => {
  //   it(`should return SignIn.formData.password as a path`, () => {
  //     const paths = u.toPath('SignIn.formData.password')
  //     expect(paths).to.be.an('array')
  //     expect(paths).to.have.length(3)
  //   })
  // })

  describe(`unixify`, () => {
    it(`should convert all back slashes to forward slashes`, () => {
      expect(u.unixify(`C:\\Users\\Chris\\desktop`)).to.eq(
        `C:/Users/Chris/desktop`,
      )
    })
  })

  describe(`upperFirst`, () => {
    it(`should convert the first letter to upper case`, () => {
      expect(u.upperFirst('abcDd')).to.eq('AbcDd')
    })
  })
})
