const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: false },
        hash: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false }, //1 added email
        avatar: { type: DataTypes.STRING, allowNull: true }, //1 added email
        dob: { type: DataTypes.DATEONLY, allowNull: false }, //1 added email
        address: { type: DataTypes.STRING, allowNull: false }, //1 added email
        country: { type: DataTypes.STRING, allowNull: false } //1 added email
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}