const { DataTypes } = require('sequelize');
const sequelize = require('./db');

// Define the User model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,

    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dateJoined: {
        type: DataTypes.DATE,
        allowNull: true
    },
}, {
    timestamps: false,
});

module.exports = User;