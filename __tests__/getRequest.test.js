const app = require('../app.js')
const supertest = require('supertest')
const request = supertest(app)

describe('Test http GET request.', () => {

  it('Gets the test endpoint', async done => {
    // Sends GET Request to /randomName endpoint
    const res = await request.get('/randomName')
    expect(res.status).toBe(200)
    done()
  })
  
  it('Gets the test endpoint', async done => {
    // Sends GET Request to /maleName endpoint
    const res = await request.get('/maleName')
    expect(res.status).toBe(200)
    done()
  })
  
  it('Gets the test endpoint', async done => {
    // Sends GET Request to /femaleName endpoint
    const res = await request.get('/femaleName')
    expect(res.status).toBe(200)
    done()
  })
  
  it('Gets the test endpoint', async done => {
    // Sends GET Request to /lastName endpoint
    const res = await request.get('/lastName')
    expect(res.status).toBe(200)
    done()
  })
})