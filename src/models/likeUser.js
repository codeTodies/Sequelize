import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class LikeUser extends Model {}

LikeUser.init(
  {
    // Không bao gồm khóa chính
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id',
      },
    },
    res_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'restaurants',
        key: 'res_id',
      },
    },
    date_like: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'like_user',
    tableName: 'like_user',
    timestamps: false,
  }
);

export default LikeUser;