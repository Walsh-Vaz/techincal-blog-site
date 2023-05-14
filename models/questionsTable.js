const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const UserTable = require("./userTable");
const blogTable = require("./blogTable");

class questionTable extends Model{}

questionTable.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false
        },

        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: UserTable,
                key: "id",
            },
        },

        blogId: {
            type: DataTypes.INTEGER,
            references: {
                model: blogTable,
                key: "id",
            },
        },


        
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "blogTable",
    }
);

module.exports = questionTable;

