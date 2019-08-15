"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addConstraint(
      "Comments", // table name
      ["postId"], // < column name
      {
        type: "FOREIGN KEY", //type of constraint
        references: {
          table: "Posts", // table referenced
          field: "id",
          name: "post-id-fk-in-comments"
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.remoiveConstraint(
      "Comments",
      "post-id-fk-in-comments"
    );
  }
};
