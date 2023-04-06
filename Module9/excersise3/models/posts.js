const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const User = require("./users");
const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Post.init(
  {
    PostID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    numLiked: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User, //reference to another model
        key: "UserID", //column name of the referenced model
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Post;
