require('dotenv').config();

const dateBuilder = (d) => {
	let months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	let days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();

	return `${day} ${date} ${month} ${year}`;
};

function App() {
	return (
		<div className='app'>
			<main>
				<div className='search-box'>
					<input
						type='text'
						className='search-bar'
						placeholder='Enter your location'
					/>
				</div>
				<div className='location-box'>
					<div className='location'>New York, US</div>
					<div className='date'>{dateBuilder(new Date())}</div>
				</div>
			</main>
		</div>
	);
}

export default App;
