module.exports = function(sequelize, DataTypes) {

	const Review = sequelize.define("Review" , {
		body: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				min: 0,
				max: 5
			}
		}
	},
	{
		underscored: true
	});

	Review.associate = models => {
		Review.belongsTo(models.Stylist)
		Review.belongsTo(models.Client)  
	}

	return Review;
};