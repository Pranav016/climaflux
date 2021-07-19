import { useState } from 'react';

require('dotenv').config();

function App() {
	const [Query, setQuery] = useState('');
	const [Weather, setWeather] = useState(null);

	const search = (e) => {
		if (e.key === 'Enter') {
			fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${Query}&units=metric&appid=${process.env.REACT_APP_KEY}`
			)
				.then((response) => response.json())
				.then((data) => {
					setQuery('');
					setWeather(data);
				})
				.catch((err) => console.log(err));
		}
	};

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

	return (
		<div
			className={
				Weather
					? typeof (Weather.main !== 'undefined')
						? Weather.main.temp > 16
							? 'app warm'
							: 'app'
						: 'app'
					: 'app'
			}>
			<main>
				<div className='search-box'>
					<input
						type='text'
						className='search-bar'
						placeholder='Enter your location'
						onChange={(e) => setQuery(e.target.value)}
						value={Query}
						onKeyPress={search}
					/>
				</div>
				{Weather && typeof Weather.main !== 'undefined' && (
					<>
						<div className='location-box'>
							<div className='location'>
								{Weather.name}, {Weather.sys.country}
							</div>
							<div className='date'>
								{dateBuilder(new Date())}
							</div>
						</div>
						<div className='weather-box'>
							<div className='temp'>
								{Math.round(Weather.main.temp)}°C
							</div>
							<div className='weather'>
								{Weather.weather[0].main}
							</div>
						</div>
					</>
				)}
			</main>
		</div>
	);
}

export default App;
