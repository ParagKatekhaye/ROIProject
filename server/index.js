const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const roiRoutes = require('./routes/roi');

const app = express();

mongoose.connect('mongodb://localhost:27017/roiData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.use('/api/roi', roiRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
