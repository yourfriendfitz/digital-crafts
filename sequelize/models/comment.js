"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      subject: DataTypes.STRING,
      body: DataTypes.STRING,
      postId: DataTypes.INTEGER
    },
    {}
  );
  Comment.associate = function(models) {
    // associations can be defined here
    // one to one relationship comment to post
    models.Comment.belongsTo(models.Post, { as: "post", foreignKey: "postId" });
  };
  return Comment;
};
