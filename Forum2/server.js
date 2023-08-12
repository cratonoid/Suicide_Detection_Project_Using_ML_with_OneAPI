const { escapeRegExpChars } = require('ejs/lib/utils');
const express = require('express');
const mysql = require("mysql")
const { exec, execSync } = require("child_process");
const nodemailer = require('nodemailer');

const mysqlconnection = require("./mysqlconnection")

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Middleware to parse JSON bodies


app.set('view engine', 'ejs');

app.listen(3000)

app.use('/assets', express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('login', { root: __dirname });
})

app.post('/login', (req, res) => {
    data = req.body
    console.log(data)
    mysqlconnection.login(data.username, data.pswd, (response) => {
        if (response) {
            res.cookie('username', data.username)
            res.redirect('/main')
        }
        else
            res.redirect('/')
    })
})

app.get('/registration', (req, res) => {
    res.render('registration', { title: "Registration" })
})

app.post('/register', (req, res) => {
    data = req.body
    console.log(data)
    mysqlconnection.register(data.txt, data.pswd, data.email, (response) => {
        res.redirect('/main')
    })
})

app.get('/main', (req, res) => {
    mysqlconnection.getpost((response) => {
        threads = JSON.parse(JSON.stringify(response));
        res.render('index', { threads })
    })


})

app.post('/postcomment', (req, res) => {
    data = req.body
    console.log(data.comment)
    const command = `python pythonanalysis.py "${data.comment}"`
    exec(command, async (err, stdout, stderr) => {
        if (err) {
            console.log("error!!")
            console.log(err.message)
        }
        var sentiment
        console.log(stdout)
        if (stdout.includes("1"))
            sentiment = "suicide"
        else
            sentiment = "non-suicide"

        mysqlconnection.insertpost(data.username, data.comment, sentiment)
    })
})

app.get('/analyse', (req, res) => {
    mysqlconnection.getLastFiveData((response) => {
        post_anal = JSON.parse(JSON.stringify(response));
        const names = [];
        for (const entry of post_anal) {
            var total_post = entry.suicide_count + entry.non_suicide_count
            var percen = entry.suicide_count / total_post
            if (percen >= 0.50) {
                names.push({
                    authorid: entry.authorid,
                    percentage: percen
                });
            };
        }
        console.log(names)
        res.status(200).json(names);

    })
});






