/* eslint-env mocha */
import getFilename from './filename'
import assert from 'assert'

describe('getFilename', () => {
  it('adds .pdf if title w/o ext and no url', () => {
    assert.equal('title.pdf', getFilename('title'))
  })
  it('gets ext from url if title w/o ext', () => {
    assert.equal('title.jpg', getFilename('title', 'http://foo.com/file.jpg'))
  })
  it('returns title if title has ext', () => {
    assert.equal('title.jpeg', getFilename('title.jpeg', 'http://foo.com/file.jpg'))
  })
  it('no title, only url', () => {
    assert.equal('file.jpg', getFilename(undefined, 'http://foo.com/file.jpg?query'))
    assert.equal('file.pdf', getFilename(undefined, 'http://foo.com/file.php?query'))
  })
})
