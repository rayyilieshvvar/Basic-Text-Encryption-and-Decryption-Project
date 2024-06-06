# Text Encryption Project

This project provides a simple web interface for encrypting and decrypting text using AES-256 CBC encryption.

## Prerequisites

- Node.js: Make sure you have Node.js installed on your system. You can download and install it from the official Node.js website: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- npm (or yarn): npm (Node Package Manager) is the package manager for Node.js. It comes bundled with Node.js, so you don't need to install it separately. Alternatively, you can use yarn, which is another popular package manager for Node.js.

## Dependencies

The project depends on the following packages:

- express: A popular Node.js web framework for building web applications.
- body-parser: A middleware package for parsing JSON bodies in Express.js.
- crypto: A built-in Node.js module for cryptography.

These dependencies are listed in the `package.json` file and will be installed automatically when you run `npm install` or `yarn install`.

## Setup

1. Clone the repository:
git clone https://github.com/your-username/encryption-project.git

2. Navigate to the project directory:
cd encryption-project

3. Install dependencies:
npm install
or
yarn install

## Running the Project

1. Start the server:
npm start
or
yarn start

2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000). You should see the web application running.

## Usage

1. Enter the text you want to encrypt or decrypt into the "Text" field.
2. Click the "Encrypt" button to encrypt the text.
3. Click the "Decrypt" button to decrypt the text.
4. The result will be displayed in the "Result" field.

## Explanation

- `index.html`: The front-end code for the web application.
- `styles.css`: Styles the HTML elements.
- `script.js`: Handles user interactions and sends data to the server.
- `encryption.js`: Contains the encryption and decryption logic.
- `server.js`: Sets up the server and handles API requests.
- `package.json`: Contains project dependencies and scripts.

Please note that this project is a simple example for demonstration purposes and is not suitable for handling sensitive data. In production environments, it is recommended to use a more secure method for managing encryption keys, such as a dedicated key management system.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please feel free to open a pull request.
