import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import resumeRoutes from './routes/resumeRoutes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, '../public')));

app.use('/', resumeRoutes);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});