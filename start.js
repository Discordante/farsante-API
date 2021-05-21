const app = require('./app.js')
const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`Ready! Listen on port ${port}`);
})