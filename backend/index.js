const express = require('express');
const app = express();
const port = 3001;

const chromiumRoutes = require('./routes/chromium');

app.use('/api/chromium', chromiumRoutes);

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
