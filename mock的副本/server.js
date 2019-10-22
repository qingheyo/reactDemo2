let express = require("express")

let app = express();

let router = express();

app.get('/',function(req,res) {
    res.send('hello,world');
});

router.use("/test",require('./test'));

app.use('/api',router);

app.listen(3001)