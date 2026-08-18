const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

//connecting mysql with my vs code
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'durdana3105'
});


try{
connection.query("SHOW TABLES",(err,result)=>
{
  if(err) throw err;
    console.log(result);
});
} catch(err){
  console.log(err)
}
connection.end();//to automatically close the server of mysql


//to run mysql in our cli-terminal
//--      {mysql -u root -p}


//to create fake data
let createRandomUser= ()=> {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
// console.log(createRandomUser());