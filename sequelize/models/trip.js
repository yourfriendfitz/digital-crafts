"use strict";
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define(
    "Trip",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      username: DataTypes.STRING
    },
    {}
  );
  Trip.associate = function(models) {
    // associations can be defined here
  };
  return Trip;
};
