{"filter":false,"title":"users.js","tooltip":"/routes/users.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":73,"column":25},"end":{"row":73,"column":26},"action":"insert","lines":[";"],"id":1466}],[{"start":{"row":67,"column":24},"end":{"row":67,"column":25},"action":"remove","lines":["s"],"id":1467}],[{"start":{"row":67,"column":23},"end":{"row":67,"column":24},"action":"remove","lines":["t"],"id":1468}],[{"start":{"row":67,"column":22},"end":{"row":67,"column":23},"action":"remove","lines":["s"],"id":1469}],[{"start":{"row":67,"column":21},"end":{"row":67,"column":22},"action":"remove","lines":["i"],"id":1470}],[{"start":{"row":67,"column":20},"end":{"row":67,"column":21},"action":"remove","lines":["l"],"id":1471}],[{"start":{"row":67,"column":20},"end":{"row":67,"column":21},"action":"insert","lines":["i"],"id":1472}],[{"start":{"row":67,"column":21},"end":{"row":67,"column":22},"action":"insert","lines":["n"],"id":1473}],[{"start":{"row":67,"column":22},"end":{"row":67,"column":23},"action":"insert","lines":["d"],"id":1474}],[{"start":{"row":67,"column":23},"end":{"row":67,"column":24},"action":"insert","lines":["e"],"id":1475}],[{"start":{"row":67,"column":24},"end":{"row":67,"column":25},"action":"insert","lines":["x"],"id":1476}],[{"start":{"row":34,"column":28},"end":{"row":34,"column":33},"action":"remove","lines":["lists"],"id":1478},{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"insert","lines":["i"]}],[{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"insert","lines":["n"],"id":1479}],[{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"insert","lines":["d"],"id":1480}],[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["e"],"id":1481}],[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"insert","lines":["x"],"id":1482}],[{"start":{"row":67,"column":14},"end":{"row":67,"column":15},"action":"insert","lines":["/"],"id":1483}],[{"start":{"row":59,"column":0},"end":{"row":68,"column":3},"action":"remove","lines":["passport.authenticate('local', {failureRedirect: '/users/login' } ), function(req,res,next)","{","  var vm= {","        ","        title:' Post your Ad',","        //firstname: 'Bharat'","        firstname: req.user ? req.user.firstname : null","    };","  res.render('/lists/index', vm);","});"],"id":1484},{"start":{"row":59,"column":0},"end":{"row":63,"column":6},"action":"insert","lines":[" passport.authenticate('local', {","    failureRedirect: '/', ","    successRedirect: '/orders',","    failureFlash: 'Invalid credentials'","  }));"]}],[{"start":{"row":61,"column":23},"end":{"row":61,"column":29},"action":"remove","lines":["orders"],"id":1485},{"start":{"row":61,"column":23},"end":{"row":61,"column":24},"action":"insert","lines":["l"]}],[{"start":{"row":61,"column":24},"end":{"row":61,"column":25},"action":"insert","lines":["i"],"id":1486}],[{"start":{"row":61,"column":25},"end":{"row":61,"column":26},"action":"insert","lines":["s"],"id":1487}],[{"start":{"row":61,"column":26},"end":{"row":61,"column":27},"action":"insert","lines":["t"],"id":1488}],[{"start":{"row":61,"column":27},"end":{"row":61,"column":28},"action":"insert","lines":["s"],"id":1489}],[{"start":{"row":62,"column":3},"end":{"row":62,"column":39},"action":"remove","lines":[" failureFlash: 'Invalid credentials'"],"id":1490}],[{"start":{"row":62,"column":2},"end":{"row":62,"column":3},"action":"remove","lines":[" "],"id":1491}],[{"start":{"row":62,"column":0},"end":{"row":62,"column":2},"action":"remove","lines":["  "],"id":1492}],[{"start":{"row":61,"column":30},"end":{"row":62,"column":0},"action":"remove","lines":["",""],"id":1493}],[{"start":{"row":61,"column":29},"end":{"row":61,"column":30},"action":"remove","lines":[","],"id":1494}],[{"start":{"row":68,"column":4},"end":{"row":68,"column":5},"action":"insert","lines":["r"],"id":1495}],[{"start":{"row":68,"column":5},"end":{"row":68,"column":6},"action":"insert","lines":["e"],"id":1496}],[{"start":{"row":68,"column":6},"end":{"row":68,"column":7},"action":"insert","lines":["t"],"id":1497}],[{"start":{"row":68,"column":7},"end":{"row":68,"column":8},"action":"insert","lines":["u"],"id":1498}],[{"start":{"row":68,"column":8},"end":{"row":68,"column":9},"action":"insert","lines":["r"],"id":1499}],[{"start":{"row":68,"column":9},"end":{"row":68,"column":10},"action":"insert","lines":["n"],"id":1500}],[{"start":{"row":68,"column":10},"end":{"row":68,"column":11},"action":"insert","lines":[" "],"id":1501}],[{"start":{"row":61,"column":28},"end":{"row":61,"column":29},"action":"insert","lines":["/"],"id":1502}],[{"start":{"row":61,"column":29},"end":{"row":61,"column":30},"action":"insert","lines":["i"],"id":1503}],[{"start":{"row":61,"column":30},"end":{"row":61,"column":31},"action":"insert","lines":["n"],"id":1504}],[{"start":{"row":61,"column":31},"end":{"row":61,"column":32},"action":"insert","lines":["d"],"id":1505}],[{"start":{"row":61,"column":32},"end":{"row":61,"column":33},"action":"insert","lines":["e"],"id":1506}],[{"start":{"row":61,"column":33},"end":{"row":61,"column":34},"action":"insert","lines":["x"],"id":1507}],[{"start":{"row":61,"column":22},"end":{"row":61,"column":23},"action":"remove","lines":["/"],"id":1508}],[{"start":{"row":61,"column":22},"end":{"row":61,"column":23},"action":"insert","lines":["/"],"id":1509}],[{"start":{"row":61,"column":33},"end":{"row":61,"column":34},"action":"remove","lines":["x"],"id":1520}],[{"start":{"row":61,"column":32},"end":{"row":61,"column":33},"action":"remove","lines":["e"],"id":1521}],[{"start":{"row":61,"column":31},"end":{"row":61,"column":32},"action":"remove","lines":["d"],"id":1522}],[{"start":{"row":61,"column":30},"end":{"row":61,"column":31},"action":"remove","lines":["n"],"id":1523}],[{"start":{"row":61,"column":29},"end":{"row":61,"column":30},"action":"remove","lines":["i"],"id":1524}],[{"start":{"row":61,"column":29},"end":{"row":61,"column":30},"action":"insert","lines":["g"],"id":1525}],[{"start":{"row":61,"column":30},"end":{"row":61,"column":31},"action":"insert","lines":["e"],"id":1526}],[{"start":{"row":61,"column":31},"end":{"row":61,"column":32},"action":"insert","lines":["t"],"id":1527}],[{"start":{"row":61,"column":32},"end":{"row":61,"column":33},"action":"insert","lines":["a"],"id":1528}],[{"start":{"row":61,"column":33},"end":{"row":61,"column":34},"action":"insert","lines":["d"],"id":1529}],[{"start":{"row":61,"column":33},"end":{"row":61,"column":34},"action":"remove","lines":["d"],"id":1530}],[{"start":{"row":61,"column":32},"end":{"row":61,"column":33},"action":"remove","lines":["a"],"id":1531}],[{"start":{"row":61,"column":31},"end":{"row":61,"column":32},"action":"remove","lines":["t"],"id":1532}],[{"start":{"row":61,"column":30},"end":{"row":61,"column":31},"action":"remove","lines":["e"],"id":1533}],[{"start":{"row":61,"column":29},"end":{"row":61,"column":30},"action":"remove","lines":["g"],"id":1534}],[{"start":{"row":61,"column":28},"end":{"row":61,"column":29},"action":"remove","lines":["/"],"id":1535}],[{"start":{"row":61,"column":28},"end":{"row":61,"column":29},"action":"insert","lines":["/"],"id":1536}],[{"start":{"row":61,"column":29},"end":{"row":61,"column":30},"action":"insert","lines":["g"],"id":1537}],[{"start":{"row":61,"column":30},"end":{"row":61,"column":31},"action":"insert","lines":["e"],"id":1538}],[{"start":{"row":61,"column":31},"end":{"row":61,"column":32},"action":"insert","lines":["t"],"id":1539}],[{"start":{"row":61,"column":32},"end":{"row":61,"column":33},"action":"insert","lines":["a"],"id":1540}],[{"start":{"row":61,"column":33},"end":{"row":61,"column":34},"action":"insert","lines":["d"],"id":1541}],[{"start":{"row":61,"column":34},"end":{"row":61,"column":35},"action":"insert","lines":["s"],"id":1542}],[{"start":{"row":61,"column":34},"end":{"row":61,"column":35},"action":"remove","lines":["s"],"id":1543}],[{"start":{"row":61,"column":33},"end":{"row":61,"column":34},"action":"remove","lines":["d"],"id":1544}],[{"start":{"row":61,"column":32},"end":{"row":61,"column":33},"action":"remove","lines":["a"],"id":1545}],[{"start":{"row":61,"column":31},"end":{"row":61,"column":32},"action":"remove","lines":["t"],"id":1546}],[{"start":{"row":61,"column":30},"end":{"row":61,"column":31},"action":"remove","lines":["e"],"id":1547}],[{"start":{"row":61,"column":29},"end":{"row":61,"column":30},"action":"remove","lines":["g"],"id":1548}],[{"start":{"row":61,"column":29},"end":{"row":61,"column":30},"action":"insert","lines":["p"],"id":1549}],[{"start":{"row":61,"column":30},"end":{"row":61,"column":31},"action":"insert","lines":["o"],"id":1550}],[{"start":{"row":61,"column":31},"end":{"row":61,"column":32},"action":"insert","lines":["s"],"id":1551}],[{"start":{"row":61,"column":32},"end":{"row":61,"column":33},"action":"insert","lines":["t"],"id":1552}],[{"start":{"row":61,"column":33},"end":{"row":61,"column":34},"action":"insert","lines":["a"],"id":1553}],[{"start":{"row":61,"column":34},"end":{"row":61,"column":35},"action":"insert","lines":["d"],"id":1554}],[{"start":{"row":61,"column":35},"end":{"row":61,"column":36},"action":"insert","lines":["s"],"id":1555}],[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"remove","lines":["x"],"id":1556}],[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"remove","lines":["e"],"id":1557}],[{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"remove","lines":["d"],"id":1558}],[{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"remove","lines":["n"],"id":1559}],[{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"remove","lines":["i"],"id":1560}],[{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"insert","lines":["p"],"id":1561}],[{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"insert","lines":["o"],"id":1562}],[{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"insert","lines":["s"],"id":1563}],[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["t"],"id":1564}],[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"insert","lines":["a"],"id":1565}],[{"start":{"row":34,"column":33},"end":{"row":34,"column":34},"action":"insert","lines":["d"],"id":1566}],[{"start":{"row":34,"column":34},"end":{"row":34,"column":35},"action":"insert","lines":["s"],"id":1567}],[{"start":{"row":68,"column":25},"end":{"row":68,"column":26},"action":"insert","lines":["."],"id":1568}],[{"start":{"row":64,"column":0},"end":{"row":69,"column":3},"action":"remove","lines":["router.get('/logout', function (req, res, next)","{","    req.logout();","    req.session.destroy();","    return req.redirect('./');","});"],"id":1569},{"start":{"row":64,"column":0},"end":{"row":68,"column":3},"action":"insert","lines":["router.get('/logout', function(req, res, next) {","  req.logout();","  req.session.destroy();","  res.redirect('/');","});"]}],[{"start":{"row":8,"column":2},"end":{"row":8,"column":36},"action":"remove","lines":["res.send('I should get smethinm');"],"id":1570},{"start":{"row":8,"column":2},"end":{"row":8,"column":36},"action":"insert","lines":[" res.render('users/register', vm);"]}],[{"start":{"row":8,"column":33},"end":{"row":8,"column":34},"action":"remove","lines":["m"],"id":1571}],[{"start":{"row":8,"column":32},"end":{"row":8,"column":33},"action":"remove","lines":["v"],"id":1572}],[{"start":{"row":8,"column":31},"end":{"row":8,"column":32},"action":"remove","lines":[" "],"id":1573}],[{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"remove","lines":[","],"id":1574}],[{"start":{"row":8,"column":2},"end":{"row":8,"column":32},"action":"remove","lines":[" res.render('users/register');"],"id":1575},{"start":{"row":8,"column":2},"end":{"row":11,"column":35},"action":"insert","lines":["ar vm = {","    title: 'Create an account'","  };","  res.render('users/register', vm);"]}],[{"start":{"row":12,"column":3},"end":{"row":13,"column":0},"action":"remove","lines":["",""],"id":1576}],[{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"insert","lines":["v"],"id":1577}]]},"ace":{"folds":[],"customSyntax":"javascript","scrolltop":0,"scrollleft":0,"selection":{"start":{"row":24,"column":40},"end":{"row":24,"column":41},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":5,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1445261884915,"hash":"526dc1e12065744ace0dc02447ee339abf572b29"}