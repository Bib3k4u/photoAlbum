const express = require('express');
const multer = require('multer');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
app.use(cors());

// Configure multer to store uploaded files in memory
const upload = multer({ storage: multer.memoryStorage() });

// Connect to the MongoDB database
const client = new MongoClient('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect();

// Define the endpoint for handling file uploads
app.post('/upload', upload.array('images'), async (req, res) => {
  const db = client.db();

  try {
    const result = await db.collection('images').insertMany(req.files.map(file => ({
      name: file.originalname,
      data: file.buffer,
    })));

    res.json({
      success: true,
      message: `${result.insertedCount} images uploaded successfully.`,
    });
  } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).json({
      success: false,
      message: 'Error uploading images.',
    });
  }
});

// Define the endpoint for retrieving all images
app.get('/images', async (req, res) => {
    const db = client.db();
  
    try {
      const results = await db.collection('images').find().toArray();
  
      if (!results) {
        return res.status(404).send('Images not found');
      }
  
      const imageData = results.map(result => {
        return {
          id: result._id,
          data: result.data.toString('base64'),
        };
      });
  
      res.json(imageData);
    } catch (error) {
      console.error('Error retrieving images:', error);
      res.status(500).send('Error retrieving images');
    }
  });
// app.get('/images', (req, res) => {
//     const db = client.db();
//     db.collection('images').find().toArray((err, result) => {
//       if (err) return console.log(err)
//       res.send(result)
//     })
//   })
  
//  / app.use(cors({
//     origin: 'http://localhost:3000'
//   }));
  
// Start the server
app.listen(5000, () => {
  console.log('Server started on port 3000');
});

