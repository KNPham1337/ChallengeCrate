import sequelize, { DataTypes } from "sequelize";
import { DataType, Model, Sequelize } from "sequelize";

// Shows on typescript what the User will have in addition to normal Model stuff
export class User extends Model {
    public id!: number;
    public steamid!: number;
    public name!: string;
}

// The actual function that initializes Models with proper schema
export const initUserModel = (sequelize: Sequelize) => {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            steamid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'User',
            tableName: 'users',
            timestamps: true,
        }
    )
}