const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))
//파일 링크시 루트폴더: public

const path = require('path');
const router = express.Router();

//현주
router.get('/01container', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/01container.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/02utility', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/02utility.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/03utility', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/03utility.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/04grid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/04grid.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/05grid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/05grid.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/06typography', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/06typography.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/07typography', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/07typography.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/08table', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/08table.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/09table', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/09table.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/10image', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/10image.html'));
    //__dirname : It will resolve to your project folder.
    });


// 인식
// 루트폴더: test_git
router.get('/inchic/02', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/02.html'));
    //__dirname : It will resolve to your project folder.
    });


app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

