'use strict';

const crypto = require('crypto');

const ENCRYPTION_KEY = crypto.randomBytes(32); // Generate a 32-byte key
const IV_LENGTH = 16; // Length of the initialization vector

function encrypt(text, key) {
  const iv = crypto.randomBytes(IV_LENGTH); // Generate a random initialization vector
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`; // Return the initialization vector and the encrypted text
}

function decrypt(text, key) {
  const [iv, encrypted] = text.split(':');
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = { decrypt, encrypt, ENCRYPTION_KEY }; // Export the key for use in server.js
