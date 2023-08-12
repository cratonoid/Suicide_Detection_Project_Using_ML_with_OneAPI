const mysql = require('mysql')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password@123',
    database: 'test'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server')
})

//register
function register(username, password, email, fun) {
    let insertQuery = "INSERT INTO ?? (??,??,??) VALUES (?,?,?)"
    let query = mysql.format(insertQuery, ['user', 'username', 'password', 'email', username, password, email]);
    connection.query(query, (err, response) => {
        if (err) {
            console.error(err);
            return;
        }
        fun(response)
    })
}

function login(username, password, fun) {
    let selectQuery = "SELECT * FROM user WHERE username = ? AND password = ?"
    let query = mysql.format(selectQuery, [username, password]);
    console.log(query)
    connection.query(query, (err, response) => {
        if (err) {
            console.error(err)
            return
        }
        if (response.length > 0)
            fun(true)
        else
            fun(false)
    })
}

function insertpost(username, comment, sentiment) {
    let insertQuery = "INSERT INTO ?? (??,??,??) VALUES (?,?,?)"
    console.log(sentiment)
    let query = mysql.format(insertQuery, ['post', 'authorid', 'post', 'sentiment', username, comment, sentiment]);
    connection.query(query, (err, response) => {
        if (err) {
            console.error(err);
            return;
        }
    })
}

function getpost(fun) {
    let selectQuery = "select authorid, post, posted_at from post"
    connection.query(selectQuery, (err, response) => {
        if (err) {
            console.error(err)
            return
        }
        fun(response)
    })
}


//query over all the users and get their suicide vs non-sucide post of last 5 days
function getLastFiveData(fun) {
    let query = "SELECT authorid,SUM(CASE WHEN sentiment = 'suicide' THEN 1 ELSE 0 END) AS suicide_count, SUM(CASE WHEN sentiment IS NULL OR sentiment != 'suicide' THEN 1 ELSE 0 END) AS non_suicide_count FROM post WHERE posted_at >= NOW() - INTERVAL 5 DAY GROUP BY authorid"
    connection.query(query, (err, response) => {
        if (err) {
            console.error(err)
            return
        }
        fun(response)
    })
}


module.exports = { register, login, insertpost, getpost, getLastFiveData };
