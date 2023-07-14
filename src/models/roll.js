const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Roll extends Model {}
  Roll.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    role: {
      type: DataTypes.ENUM,
      values: ['ADMIN', 'AUXIL', 'OPERA'],
      defaultValue: 'OPERA',
    },
  }, { sequelize, modelName: 'Roll', timestamps: false });
};
