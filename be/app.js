const express = require('express')
const fileUpload = require('express-fileupload');
const cors = require('cors');
const body_Parser = require('body-parser');

// //cofig app and port
const app = express()
const port = 3003

// //use lib
app.use(cors());
app.use(fileUpload());
app.use(body_Parser.urlencoded({extended: false}));
app.use(body_Parser.json());

require('./app/routers/home.router')(app);

app.get('/', (req, res)=>{
    res.send("hello")
})

app.get('/image/:id', (req, res) => {
    res.download('./app/public/image/' + req.params.id);
  })
  //upload image to backend
  app.post('/image', (req, res) => {
    if(req.file === null){
        return res.status(400).json({message: 'No file uploaded'});
    }
    
    const file = req.files.file;
  
    file.mv(`${__dirname}/app/public/image/${file.name}`, err =>{
        if(err){
            return res.status(500).send(err);
        }
  
        res.json({fileName: file.name, filePath: `/image/${file.name}`});
    });
  });

app.listen(port, ()=>{
    console.log(__dirname)
    console.log("Listening on port: " + port)
})