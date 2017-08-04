const db = require("../models");

const stylistData = [
	{
		first_name: 'Lina',
		last_name: 'Shamoon',
		email: 'lina@ucsdext.org',
		bio: "This is Lina's bio.",
		experience: 1,
		phone_number: '619-123-4567',
		cut: true,
		blow_dry: false,
		color: true,
		highlights: true,
		lowlights: true,
		ombre: false,
		balayage: false,
		hair_do: true,
		travel_range: 10,
		street_address: '123 Undefined Street',
		city: 'San Diego',
		state: 'CA',
		zipcode: '92111'
	},
	{
		first_name: 'Tom',
		last_name: 'Mercer',
		email: 'tom@ucsdext.org',
		bio: "This is Tom's bio.",
		experience: 2,
		phone_number: '619-321-4567',
		cut: true,
		blow_dry: true,
		color: true,
		highlights: true,
		lowlights: true,
		ombre: true,
		balayage: true,
		hair_do: true,
		travel_range: 20,
		street_address: '123 NaN Street',
		city: 'San Diego',
		state: 'CA',
		zipcode: '92111'
	},
	{
		first_name: 'Fabio',
		last_name: 'Aiello',
		email: 'fabio@ucsdext.org',
		bio: "This is Fabio's bio.",
		experience: 3,
		phone_number: '619-321-7654',
		cut: true,
		blow_dry: false,
		color: false,
		highlights: false,
		lowlights: false,
		ombre: true,
		balayage: false,
		hair_do: true,
		travel_range: 30,
		street_address: '123 Null Street',
		city: 'San Diego',
		state: 'CA',
		zipcode: '92111'
	}
]

const clientData = [
	{
		first_name: 'Margaret',
		last_name: 'Choi',
		email: 'margaret@ucsdext.org',
		street_address: '123 Let Street',
		city: 'San Diego',
		state: 'CA',
		zipcode: '92111'
	},
	{
		first_name: 'Alex',
		last_name: 'Melancon',
		email: 'alex@ucsdext.org',
		street_address: '123 Const Street',
		city: 'San Diego',
		state: 'CA',
		zipcode: '92111'
	},
	{
		first_name: 'Fahad',
		last_name: 'Rahman',
		email: 'fahad@ucsdext.org',
		street_address: '123 Arrow Street',
		city: 'San Diego',
		state: 'CA',
		zipcode: '92111'
	}
]

const reviewData = [
	{
		body: 'this is review 1',
		rating: '1',
		stylist_id: 1,
		client_id: 1
	},
	{
		body: 'this is review 2',
		rating: '2',
		stylist_id: 1,
		client_id: 2
	},
	{
		body: 'this is review 3',
		rating: '3',
		stylist_id: 1,
		client_id: 3
	},
	{
		body: 'this is review 4',
		rating: '1',
		stylist_id: 2,
		client_id: 1
	},
	{
		body: 'this is review 5',
		rating: '2',
		stylist_id: 2,
		client_id: 2
	},
	{
		body: 'this is review 6',
		rating: '3',
		stylist_id: 2,
		client_id: 3
	},
	{
		body: 'this is review 7',
		rating: '1',
		stylist_id: 3,
		client_id: 1
	},
	{
		body: 'this is review 8',
		rating: '2',
		stylist_id: 3,
		client_id: 2
	},
	{
		body: 'this is review 9',
		rating: '3',
		stylist_id: 3,
		client_id: 3
	}
]

const feedbackData = [
	{
		body: 'this is feedback 1',
		rating: '1',
		stylist_id: 1,
		client_id: 1
	},
	{
		body: 'this is feedback 2',
		rating: '2',
		stylist_id: 1,
		client_id: 2
	},
	{
		body: 'this is feedback 3',
		rating: '3',
		stylist_id: 1,
		client_id: 3
	},
	{
		body: 'this is feedback 4',
		rating: '1',
		stylist_id: 2,
		client_id: 1
	},
	{
		body: 'this is feedback 5',
		rating: '2',
		stylist_id: 2,
		client_id: 2
	},
	{
		body: 'this is feedback 6',
		rating: '3',
		stylist_id: 2,
		client_id: 3
	},
	{
		body: 'this is feedback 7',
		rating: '1',
		stylist_id: 3,
		client_id: 1
	},
	{
		body: 'this is feedback 8',
		rating: '2',
		stylist_id: 3,
		client_id: 2
	},
	{
		body: 'this is feedback 9',
		rating: '3',
		stylist_id: 3,
		client_id: 3
	}
]

const insertData = (model, data) => {
	data.forEach( e => model.create(e).then(result => console.log(result.dataValues)).catch(err => console.log(err)));
}

module.exports = app => {

	app.get("/api/test/create", (req, res) => {
		insertData(db.Stylist, stylistData);
		insertData(db.Client, clientData);
		insertData(db.Review, reviewData);
		insertData(db.Feedback, feedbackData);
		res.end();
	})

}