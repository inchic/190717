const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))
//파일 링크시 루트폴더: public

const path = require('path');
const router = express.Router();


//index
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

//현주
router.get('/hyunjoo/01container', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/01container.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/hyunjoo/02utility', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/02utility.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/hyunjoo/03utility', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/03utility.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/hyunjoo/04grid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/04grid.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/hyunjoo/05grid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/05grid.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/hyunjoo/06typography', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/06typography.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/hyunjoo/07typography', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/07typography.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/hyunjoo/08table', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/08table.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/hyunjoo/09table', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/09table.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/hyunjoo/10image', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/10image.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/hyunjoo/11button', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/11button.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/hyunjoo/12carousel', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/12carousel.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/hyunjoo/13try', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/13try.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/hyunjoo/14dropdown', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/14dropdown.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/hyunjoo/15navbar', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/15navbar.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/hyunjoo/17input', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/17input.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/hyunjoo/18input', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/18input.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/hyunjoo/19try', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/19try.html'));
    //__dirname : It will resolve to your project folder.
    });
router.get('/hyunjoo/20try', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/20try.html'));
    //__dirname : It will resolve to your project folder.
    });

//값 받아오기
router.get('/17input', function (req, res) {
    console.log(req.query);
    res.send('Request parameters :'+req.query.password+','+req.query.email+','+req.query.status+','+req.query.status.vehicle1)
    });
router.get('/18input', function (req, res) {
    console.log(req.query);
    res.send('Request parameters :'+req.query.username+','+req.query.clever)
    });
router.get('/19try', function (req, res) {
    console.log(req.query);
    res.send('Request parameters :'+req.query.email+','+req.query.password+','+req.query.info)
    });
router.get('/20try', function (req, res) {
    console.log(req.query);
    res.send('Request parameters :'+req.query.email+','+req.query.password+','+req.query.check)
    });


// 인식
// 루트폴더: test_git
router.get('/inchic/01container', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/01container.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/inchic/02utility', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/02utility.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/03utility', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/03utility.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/04grid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/04grid.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('inchic/05grid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/05grid.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/06typography', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/06typography.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/07typography', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/07typography.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/08table', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/08table.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/09table', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/09table.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/10image', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/10image.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/inchic/15trymain', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/15trymain.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/17navbar', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/17navbar copy.html'));
    //__dirname : It will resolve to your project folder.
});





app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

