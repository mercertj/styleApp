const db = require("../models");
const router = require("express").Router();

const _stylistData = [
	{
		first_name: 'Linda',
		last_name: 'Smith',
		email: 'linda@ucsdext.org',
		bio: "I have been a freelance hairstylist for 1 year, and I consider myself lucky to have such a fun and creative job! It is very important to me that my clients feel confident and comfortable throughout their service; therefore a thorough consultation is always part of the appointment. I can customize your cut, color and style to suit your lifestyle and your aesthetic. I want your style to compliment you and work for you. I love that I can provide a service that is both artistic and practical.",
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
		street_address: '3945 Governor Dr',
		city: 'San Diego',
		state: 'CA',
		zipcode: '92122',
		address_lat: 32.853791,
		address_long: -117.203928
	},
	{
		first_name: 'Peter',
		last_name: 'Griffin',
		email: 'peter@ucsdext.org',
		bio: "I specialize in custom cuts for women, men and children; personalized color, including highlighting and lowlighting; and formal hair designs. I am fully mobile, and bring the salon experience directly to you",
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
		street_address: '5075 Shoreham Pl',
		city: 'San Diego',
		state: 'CA',
		zipcode: '92122',
		address_lat: 32.852727,
		address_long: -117.184973
	},
	{
		first_name: 'Danny',
		last_name: 'Aiello',
		email: 'danny@ucsdext.org',
		bio: "This is Danny's bio.",
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
		street_address: '7405 Bovet Way',
		city: 'San Diego',
		state: 'CA',
		zipcode: '92111',
		address_lat: 32.860259,
		address_long: -117.187881
	},
	{
		first_name: 'Shannon',
		last_name: 'Stein',
		email: 'shanstylist2000@ucsdext.org',
		bio: "My name is Shannon and am a super passionate curly girl who loves working with all types of hair texture. You are a curly girl reading my bio… are you ready for a new wild look? Subtle changes? Don’t hesitate to book your appointment with me and become a part of my family. I would love to meet you soon! ",
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
		street_address: '5987 El Cajon Blvd',
		city: 'San Diego',
		state: 'CA',
		zipcode: '92115',
		address_lat: 32.760458,
		address_long: -117.068455
	}
]

const _clientData = [
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
	},
	{
		first_name: 'Aaron',
		last_name: 'Gaither',
		email: 'aaron@ucsdext.org',
		street_address: '123 object street',
		city: 'San Diego',
		state: 'CA',
		zipcode: '92111'
	}
]

const _reviewData = [
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

const _feedbackData = [
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

const _userData = [{
	username : 'aaron',
	email : 'test@email.com',
	password : 'testpass',
	account_type : 'client',
	client_id: 4
}]

const _insertData = (model, data) => {
	data.forEach( e => model.create(e).then(result => console.log(result.dataValues)).catch(err => console.log(err)));
}

router.get("/create", (req, res) => {
	_insertData(db.Stylist, _stylistData);
	_insertData(db.Client, _clientData);
	_insertData(db.Review, _reviewData);
	_insertData(db.Feedback, _feedbackData);
	_insertData(db.User, _userData);
	res.end();
})

module.exports = router;