module.exports = function(sequelize, DataTypes) {

	const Client = sequelize.define("Client" , {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
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
		},
		address_lat: {
			type: DataTypes.FLOAT,
			validate: { min: -90, max: 90 }
		},
		address_long: {
			type: DataTypes.FLOAT,
			validate: { min: -180, max: 180 }
		} 
	},
	{
		underscored: true
	});

	Client.associate = models => {
	  Client.hasMany(models.Feedback, {
	    onDelete: "cascade"
	  });
	  Client.hasOne(models.User);
	};

	return Client;
};