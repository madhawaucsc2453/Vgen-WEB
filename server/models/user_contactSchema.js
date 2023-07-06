const { DataTypes } = require('sequelize');
const sequelize = require('./db');

// Define the User model
const userContact = sequelize.define('user_contact', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        foriegnKey:true,
        autoIncrement:true,

    },contactNo:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    timestamps: false,
});

module.exports = userContact;