module.exports = function(sequelize, DataTypes) {
 
	const User = sequelize.define("User" , {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [6, 30]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		account_type: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		underscored: true
	});



	return User;
};