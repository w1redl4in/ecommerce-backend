import express from 'express';
import router from './routes'

const app = express();

app.use(express.json())
app.use(router)

app.get('/', (req, res) => res.json({ message: 'ok' }));

app.listen(3333, () => console.log('Subiu'));

export default app
