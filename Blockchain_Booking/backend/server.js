const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./send-email'); 
const cors = require('cors')
const app = express();

app.use(bodyParser.json());

app.use(cors());
app.post('/send-email', sendEmail);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
