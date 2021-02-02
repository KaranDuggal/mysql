module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("Users", {
      firstname: {
        type: Sequelize.STRING,
        allowNull:false,
        len: [2,20], 
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull:false,
        len: [2,20], 
      },
      phonenumber: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            isEmail: true
        },
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      role: {
        type: Sequelize.STRING,
        isIn:[['admin','seller','buyer']],
        default:'buyer',
        allowNull:false,
      },
    });
  
    return users;
  };
  