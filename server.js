const express = require('express');
const bodyParser = require('body-parser');
const { encrypt, decrypt, ENCRYPTION_KEY } = require('./encryption'); // Import the key
const app = express();

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle POST requests for encryption
app.post('/encrypt', (req, res) => {
  const text = req.body.text;
  const encrypted = encrypt(text, ENCRYPTION_KEY); // Pass the key to the encrypt function
  res.json({ encryptedText: encrypted });
});

// Handle POST requests for decryption
app.post('/decrypt', (req, res) => {
  const text = req.body.text;
  const decrypted = decrypt(text, ENCRYPTION_KEY); // Pass the key to the decrypt function
  res.json({ decryptedText: decrypted });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
