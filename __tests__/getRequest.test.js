const app = require('../app.js')
const supertest = require('supertest')
const request = supertest(app)

describe('Test http GET request.', () => {


  /* ------------ People endpoint ---------- */

  // Sends GET Request to /randomName endpoint
  it('Test /randomName endpoint', async done => {
    const res = await request.get('/randomName')
    expect(res.status).toBe(200)
    done()
  })
  
  // Sends GET Request to /maleName endpoint
  it('Test /maleName endpoint', async done => {
    const res = await request.get('/maleName')
    expect(res.status).toBe(200)
    done()
  })
  
  // Sends GET Request to /femaleName endpoint
  it('Test /femaleName endpoint', async done => {
    const res = await request.get('/femaleName')
    expect(res.status).toBe(200)
    done()
  })
  
  // Sends GET Request to /lastName endpoint
  it('Test /lastName endpoint', async done => {
    const res = await request.get('/lastName')
    expect(res.status).toBe(200)
    done()
  })

    /* ------------ Contact endpoint ---------- */

  // Sends GET Request to /dni endpoint
  it('Test /phoneNumber endpoint', async done => {
    const res = await request.get('/phoneNumber')
    expect(res.status).toBe(200)
    done()
  })


  /* ------------ Documentation endpoint ---------- */

  // Sends GET Request to /dni endpoint
  it('Test /dni endpoint', async done => {
    const res = await request.get('/dni')
    expect(res.status).toBe(200)
    done()
  })


  /* ------------ Places endpoint ---------- */

  // Sends GET Request to /randomCity endpoint
  it('Test /randomCity endpoint', async done => {
    const res = await request.get('/randomCity')
    expect(res.status).toBe(200)
    done()
  })

    // Sends GET Request to /randomMunicipality endpoint
    it('Test /randomMunicipality endpoint', async done => {
      const res = await request.get('/randomMunicipality')
      expect(res.status).toBe(200)
      done()
    })

})