
const express = require('express'), apps = express();
const path = require('path'), router = express.Router();

router.get('/',(req, res)=>{
res.sendFile(path.join(__dirname + '/index.html'));
})

router.get('/about',(req, res)=>{
// we are directing the server that our page is found
// in a specific directory and we add the name of the
// html.file
res.sendFile(path.join(__dirname + '/about.html'));
})

router.get('/sitemap',(req, res)=>{
res.sendFile(path.join(__dirname + '/site.html'));
})

router.get('/blog',(req, res)=>{
    res.sendFile(path.join(__dirname + '/blog.html'));
    })

apps.use('/',router);
apps.listen(process.env.PORT || 3000)
console.log('Our server is running at port 3000');