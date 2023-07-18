const { DataTypes} = require('sequelize');

const usersModel = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updateAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
};

const usersOptions = {
    timestamps: false,
    schema: 'public',
    freezeTableName: true,
};

module.exports = (seq) => {
    const model = seq.define('Users', usersModel, usersOptions);

    return model;
};
