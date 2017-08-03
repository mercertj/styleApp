module.exports = function(sequelize, DataTypes) {

	const Feedback = sequelize.define("Feedback" , {
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

	Feedback.associate = models => {
		Feedback.belongsTo(models.Client)
		Feedback.belongsTo(models.Stylist)  
	}

	return Feedback;
};