require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const personSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	age: Number,
	favoriteFoods: [String],
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
	name: 'name@gmail.com',
	age: 6,
	favoriteFoods: ['banana, apple, orange'],
});

var createAndSavePerson = function (done) {
	var janeFonda = new Person({
		name: 'Jane Fonda',
		age: 84,
		favoriteFoods: ['eggs', 'fish', 'fresh fruit'],
	});

	janeFonda.save(function (err, data) {
		if (err) return console.error(err);
		done(null, data);
	});
};

const createManyPeople = (arrayOfPeople, done) => {
	Person.create(arrayOfPeople, function (err, data) {
		if (err) {
			done(err);
		} else {
			done(null, data);
		}
	});
};
// const filter = JSON.parse('{"name": "r@nd0mN4m3"}');

const findPeopleByName = (personName, done) => {
	Person.find({ name: personName }, function (err, personFound) {
		if (err) {
			done(err);
		} else {
			done(null, personFound);
		}
	});
};

const findOneByFood = (food, done) => {
	Person.findOne({ favoriteFoods: food }, function (err, data) {
		if (err) {
			console.error(err);
		} else {
			done(null, data);
		}
	});
};

// findPeopleByName(filter, function (err, data) {
// 	if (err) {
// 		console.error(err);
// 		// Handle the error
// 	} else {
// 		// The person has been found
// 		console.log(data);
// 	}
// });
// var done;

// var createAndSavePerson = (done) => {
// 	const person = new Person({
// 		name: 'John',
// 		age: 6,
// 		favoriteFoods: ['banana', 'apple', 'orange'],
// 	});

// 	person.save(function (err, data) {
// 		if (err) return console.error(err);
// 		done(null, data);
// 	});
// };

// createAndSavePerson((err, data) => {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}
// 	console.log(data);
// });

// let Person;

// const createAndSavePerson = (done) => {
// 	done(null /*, data*/);
// };

// const createManyPeople = (arrayOfPeople, done) => {
// 	done(null /*, data*/);
// };

const findPersonById = (personId, done) => {
	done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
	const foodToAdd = 'hamburger';

	done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
	const ageToSet = 20;

	done(null /*, data*/);
};

const removeById = (personId, done) => {
	done(null /*, data*/);
};

const removeManyPeople = (done) => {
	const nameToRemove = 'Mary';

	done(null /*, data*/);
};

const queryChain = (done) => {
	const foodToSearch = 'burrito';

	done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
