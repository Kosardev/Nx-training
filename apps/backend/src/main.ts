import express from 'express';
import * as path from 'path';
import * as fs from 'fs';
import { FormInput, FormEntry, CountResponse } from '@org/shared';
import { randomUUID } from 'crypto';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(process.cwd(), 'apps/backend/data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function loadData(): FormEntry[] {
  if (!fs.existsSync(DB_FILE)) return [];
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
}

function saveData(data: FormEntry[]) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

app.post('/api/submit', (req, res) => {
  const input: FormInput = req.body;

  const newEntry: FormEntry = {
    id: randomUUID(),
    name: input.name,
    email: input.email,
    createdAt: new Date().toISOString(),
  };

  const list = loadData();
  list.push(newEntry);

  saveData(list);

  res.json(newEntry);
});

app.get('/api/count', (req, res) => {
  const list = loadData();

  const response: CountResponse = {
    count: list.length,
  };

  res.json(response);
});

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});