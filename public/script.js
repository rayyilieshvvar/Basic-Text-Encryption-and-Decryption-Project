const inputText = document.getElementById('input-text');
const encryptButton = document.getElementById('encrypt');
const decryptButton = document.getElementById('decrypt');
const outputField = document.getElementById('output');

encryptButton.addEventListener('click', async () => {
  const text = inputText.value;
  const response = await fetch('http://localhost:3000/encrypt', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  const result = await response.json();
  outputField.value = result.encryptedText;
});

decryptButton.addEventListener('click', async () => {
  const text = inputText.value;
  const response = await fetch('http://localhost:3000/decrypt', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  const result = await response.json();
  outputField.value = result.decryptedText;
});
