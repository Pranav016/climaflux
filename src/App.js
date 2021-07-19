require('dotenv').config();

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
			</main>
		</div>
	);
}

export default App;
