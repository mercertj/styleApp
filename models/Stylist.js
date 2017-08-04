module.exports = function(sequelize, DataTypes) {

	const Stylist = sequelize.define("Stylist" , {
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
		travel_range: {
			type: DataTypes.INTEGER,
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

	Stylist.associate = models => {
	  Stylist.hasMany(models.Review, {
	    onDelete: "cascade"
	  });
	};

	return Stylist;
};