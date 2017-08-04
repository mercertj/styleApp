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
			allowNull: false,
			validate: {
				isEmail: true
			}
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
		cut: DataTypes.Boolean,
		blow_dry: DataTypes.Boolean,
		color: DataTypes.Boolean,
		highlights: DataTypes.Boolean,
		lowlights: DataTypes.Boolean,
		ombre: DataTypes.Boolean,
		balayage: DataTypes.Boolean,
		hair_do: DataTypes.Boolean,
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

	Stylist.associate = models => {
	  Stylist.hasMany(models.Review, {
	    onDelete: "cascade"
	  });
	};

	return Stylist;
};