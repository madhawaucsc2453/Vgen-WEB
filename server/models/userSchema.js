const { DataTypes } = require('sequelize');
const sequelize = require('./db');

// Define the User model
const User = sequelize.define('user',{
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,

    },
    homeNo:{
        type: DataTypes.STRING,
        allowNull: true
    },street:{
        type: DataTypes.STRING,
        allowNull: true
    },
    city:{
        type: DataTypes.STRING,
        allowNull: true
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: true
    },password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    userRole: {
        type: DataTypes.STRING,
        allowNull: true
    }
    // },profilePicture:{
    //     type: DataTypes.STRING,
    //     allowNull: true
    // },
  
}, {
   timestamps:false,
});

module.exports = User;