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
		},
		address_lat: DataTypes.FLOAT,
		address_long:  DataTypes.FLOAT
	},
	{
		underscored: true
	});

	Client.associate = models => {
	  Client.hasMany(models.Feedback, {
	    onDelete: "cascade"
	  });
	};

	return Client;
};