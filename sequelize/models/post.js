"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      isPublished: DataTypes.BOOLEAN
    },
    {}
  );
  Post.associate = function(models) {
    // associations can be defined here
    // create one to many relatioship between posts and comments
    models.Post.hasMany(models.Comment, {
      as: "comments",
      foreignKey: "postId"
    });
  };
  return Post;
};
