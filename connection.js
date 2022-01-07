const mysql = require("mysql");
const Promise = require("bluebird");
const ConnectionConfig = require("mysql/lib/ConnectionConfig");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "exam",
};

const selectAllUser = async () => {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();
  let sql = `SELECT * FROM user13`;
  const list = await Connection.queryAsync(sql);
  await Connection.endAsync();
  return list;
};

const addUser = async (user) => {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();

  let sql = `INSERT INTO user13 (msg) value (?)`;
  Connection.queryAsync(sql, [user.msg]);

  console.log("msg added!");
  await Connection.endAsync();
};

module.exports = { selectAllUser, addUser };
