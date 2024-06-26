const Sequelize = require('sequelize')

let sequelize;

if (process.env.NODE_ENV === undefined) process.env.NODE_ENV = 'run'

if (process.env.NODE_ENV.trim() === 'test') {
    sequelize = new Sequelize('intelliq_api-test', 'root', 'MariaKoilalou2210!', {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        logging: false
    });
}
else {
    sequelize = new Sequelize('intelliq_api', 'root', 'MariaKoilalou2210!', {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        logging: false
    });
}



sequelize.authenticate()
    .then(() => {
        console.log("Success connecting to database!");
    })
    .catch(err => {
        console.error("Unable to connect to the database", err);
    })

module.exports = sequelize;