require('dotenv').config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 3000

app.listen(port, '127.0.0.1', () => {
  console.log(`Server started at port ${port}`);
});
