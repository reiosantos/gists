/***
 * Quick Technical task:
Imagine you have a bike and a driving license. You also found a job board with a list of companies offering a job. To get the job, you need to fulfill some requirements. There are 10.000 companies on the job board, 10 examples are as follows:

"Company A" requires an apartment or house, and property insurance.
"Company B" requires 5 door car or 4 door car, and a driver's license and car insurance.
"Company C" requires a social security number and a work permit.
"Company D" requires an apartment or a flat or a house.
"Company E" requires a driver's license and a 2 door car or a 3 door car or a 4 door car or a 5 door car.
"Company F" requires a scooter or a bike, or a motorcycle and a driver's license and motorcycle insurance.
"Company G" requires a massage qualification certificate and a liability insurance.
"Company H" requires a storage place or a garage.
"Company J" doesn't require anything, you can come and start working immediately.
"Company K" requires a PayPal account.

Your task is to write code that will calculate for which companies you can work and for which you can't. You can convert the statements like "Company J requires PayPal account" to whatever form or structure you need. Please use PHP if you are applying for a backend developer, or JavaScript if you are applying for a frontend developer role. Also, please put your code online as a snippet, git repository, gist, etc.
 
 * @type {*[]}
 */
const my_req = ['bike', 'driver_license'];

const avail_companies = {
	A: {must: ['property_insurance'], either: ['apartment', 'house'], and: []},
	B: {must: ['car_insurance', 'driver_license'], either: ['5_door_car', '4_door_car'], and: []},
	C: {must: ['social_security_number', 'social_security_number'], either: [], and: []},
	D: {must: [], either: ['apartment', 'flat', 'house'], and: []},
	E: {
		must: ['driver_license'],
		either: ['2_door_car', '3_door_car', '4_door_car', '5_door_car'],
		and: []
	},
	F: {
		must: ['driver_license'],
		either: ['scooter', 'bike'],
		and: ['motorcycle', 'motorcycle_insurance']
	},
	G: {must: ['massage_qualification_certificate', 'liability_insurance'], either: [], and: []},
	H: {must: [], either: ['storage_place', 'garage'], and: []},
	J: {must: [], either: [], and: []},
	K: {must: ['paypal_account'], either: [], and: []}
};

function companies2WorkFor(companies, i_have) {
	const possibleCompanies = {
		match: [],
		notAMatch: []
	};
	
	for (const key in companies) {
		const must = companies[key].must;
		const either = companies[key].either;
		const and = companies[key].and;
		let match = false;
		
		if (must.length === 0 && either.length === 0) {
			possibleCompanies.match.push(key);
			continue;
		}
		if (must.length === 0 && either.length > 0 && either.some(value => i_have.includes(value))) {
			possibleCompanies.match.push(key);
			continue;
		}
		if (must.length > 0) {
			if (must.every(value => i_have.includes(value))) {
				if (either.length > 0) {
					match = either.some(value => i_have.includes(value));
				} else {
					match = true;
				}
				if (and.length > 0 && and.every(value => i_have.includes(value))) {
					match = true;
				}
			}
		}
		if (match) {
			possibleCompanies.match.push(key);
		} else {
			possibleCompanies.notAMatch.push(key);
		}
	}
	return possibleCompanies;
}

console.log('------companies2WorkFor------');
console.log(companies2WorkFor(avail_companies, my_req));
