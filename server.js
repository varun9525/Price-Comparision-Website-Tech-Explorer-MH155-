const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const amazon = require('./amazon_data.json');
const flipkart = require('./flipkart.json');

app.use(cors());

app.get('/getamazon', async (req, res) => {
  try {
    console.log('hit');
    res.json(amazon);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/getflipkart', async (req, res) => {
  try {
    console.log('hit');
    res.json(flipkart);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// app.get('/flip', (req, res) => {
//   res.json({
//     "Title": "Apple iPhone 15 (Black, 128 GB)",
//     "Price": "₹69,999",
//     "Rating": "4.64.44.64.64.25455555545"
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
