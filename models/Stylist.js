module.exports = function(sequelize, DataTypes) {

	const Stylist = sequelize.define("Stylist" , {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		Last_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		bio: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		experience: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		phone_number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		speciality: {
			type: DataTypes.STRING,
			allowNull: false
		},
		street_address: {
			type: DataTypes.STRING,
			allowNull: false
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false
		},
		zipcode:{
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	return Stylist;
};