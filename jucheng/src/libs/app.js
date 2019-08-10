var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // 数据库名字
    database: 'test'
});
// 执行连接
connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     // console.log('The solution is: ', results[0].solution);
// });
// 执行关闭
connection.end();