import express from 'express';

const app = express();

const PORT = 3000;

app.get('/ping', (req, res) => {
  res.send('Pong Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});