const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);

// DB setup
const db = {};

let sequelize;
if (process.env.JAWSDB_URL) {
  // for Heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL, {});
} else {
  const env = process.env.NODE_ENV || "development";
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const config = require(`${path.resolve(__dirname, "..", "config", "config.json")}`)[env];
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js"))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
