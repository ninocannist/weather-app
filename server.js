const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Allow cross-origin
app.use(cors());

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on porto ${PORT}`));
