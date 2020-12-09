import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ message: 'ok' }));

app.listen(3333, () => console.log('Subiu'));
