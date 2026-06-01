import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const resumeData = JSON.parse(
  readFileSync(join(__dirname, '../../public/data/resume.json'), 'utf-8')
);

export function getResume(req, res) {
  res.render('index', { data: resumeData });
}