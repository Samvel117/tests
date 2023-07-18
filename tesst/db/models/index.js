const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const {  development } = require('../../config/config');
console.log('dbConfig', development)
const baseName = path.basename(__filename);
const db = {};
const sequelize = new Sequelize(development.database, development.username, development.password, {
    dialect: development.dialect
});
fs.readdirSync(__dirname)
    .filter((file) => !file.startsWith('.') && file !== baseName && file.endsWith('.js'))
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.Sequelize = sequelize;
sequelize
    .authenticate()
    .then(() => console.log('database is connected'))
    .catch((err) => {
        throw err;
    });
module.exports = db;
