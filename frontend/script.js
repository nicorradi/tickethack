document.querySelector('#searchTrip').addEventListener('click', function () {
	const departureInput = document.querySelector('#departureInput').value;
    const arrivalInput = document.querySelector('#arrivalInput').value;
    const dateInput = document.querySelector('#dateInput').value;
    console.log(dateInput);
	fetch('http://localhost:3000/trips/getTripsByDate', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ departure : departureInput, arrival : arrivalInput, date : dateInput}),
	}).then(response => response.json())
		.then(data => {
            console.log(data.trips);
            document.querySelector('#boxResults').innerHTML
			if (data.trips.length>0) {
                for (const trip of data.trips){
                document.querySelector('#boxResults').innerHTML += `
                <div class="trip">
                    <p class="arrival">${trip.departure}</p>
                    <p> > </p>
                    <p class="arrival">${trip.arrival}</p>
                    <p class="arrival">${trip.date}</p>
                    <p class="arrival">${trip.price}</p>
                    <p>€</p>
                    <button class="button" id="bookButton">Book</button>
                </div>
                `;
                }
            }
				//updateDeleteCityEventListener();
			})

});
