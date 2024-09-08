// Predefined mapping of IATA codes to latitude and longitude
const airportCoordinates = {
    "TIV": { lat: 42.404722, lon: 18.723333 }, // Tivat Airport, Montenegro
    "LGW": { lat: 51.153660, lon: -0.182370 }, // London Gatwick
    "STN": { lat: 51.885, lon: 0.235 }, // London Stansted
    "OSL": { lat: 60.193901, lon: 11.1004 }, // Oslo Airport, Gardermoen
    "HEL": { lat: 60.317222, lon: 24.963056 }, // Helsinki Airport
    "TOS": { lat: 69.683056, lon: 18.918056 }, // Tromsø Airport
    "ARN": { lat: 59.651911, lon: 17.918333 }, // Stockholm Arlanda
    "LHR": { lat: 51.470020, lon: -0.454295 }, // London Heathrow
    "CDG": { lat: 49.009724, lon: 2.547926 }, // Paris Charles de Gaulle
    "AMS": { lat: 52.308613, lon: 4.768113 }, // Amsterdam Schiphol
    "FRA": { lat: 50.037933, lon: 8.562152 }, // Frankfurt Airport
    "MAD": { lat: 40.493556, lon: -3.566200 }, // Adolfo Suárez Madrid-Barajas
    "FCO": { lat: 41.804503, lon: 12.250154 }, // Rome Fiumicino
    "MUC": { lat: 48.353783, lon: 11.786086 }, // Munich Airport
    "BCN": { lat: 41.297362, lon: 2.083333 }, // Barcelona Airport
    "DUB": { lat: 53.421333, lon: -6.270075 }, // Dublin Airport
    "BRU": { lat: 50.901393, lon: 4.484444 }, // Brussels Airport
    "ZRH": { lat: 47.458176, lon: 8.561145 }, // Zurich Airport
    "VIE": { lat: 48.110278, lon: 16.569722 }, // Vienna International Airport
    "CPH": { lat: 55.617978, lon: 12.656111 }, // Copenhagen Airport
    "ARN": { lat: 59.651911, lon: 17.918333 }, // Stockholm Arlanda
    "OSL": { lat: 60.193928, lon: 11.100261 }, // Oslo Gardermoen
    "HEL": { lat: 60.317222, lon: 24.963056 }, // Helsinki Airport
    "WAW": { lat: 52.165556, lon: 20.967222 }, // Warsaw Chopin Airport
    "ATH": { lat: 37.936389, lon: 23.947222 }, // Athens International Airport
    "BUD": { lat: 47.436944, lon: 19.198611 }, // Budapest Ferenc Liszt
    "PRG": { lat: 50.100556, lon: 14.26 }, // Václav Havel Airport Prague
    "LYS": { lat: 45.720278, lon: 5.081389 }, // Lyon-Saint Exupéry Airport
    "NCE": { lat: 43.658056, lon: 7.215556 }, // Nice Côte d'Azur Airport
    "DUS": { lat: 51.289222, lon: 6.766388 }, // Düsseldorf Airport
    "TXL": { lat: 52.559722, lon: 13.287222 }, // Berlin Tegel Airport
    "HAM": { lat: 53.630556, lon: 9.988889 }, // Hamburg Airport
    "MRS": { lat: 43.439722, lon: 5.221389 }, // Marseille Provence Airport
    "VLC": { lat: 39.489444, lon: -0.481389 }, // Valencia Airport
    "EDI": { lat: 55.950556, lon: -3.372222 }, // Edinburgh Airport
    "BGO": { lat: 60.293056, lon: 5.218056 }, // Bergen Airport
    "RIX": { lat: 56.922222, lon: 23.971389 }, // Riga Airport
    "TLL": { lat: 59.413056, lon: 24.832222 }, // Tallinn Airport
    "KBP": { lat: 50.345556, lon: 30.894444 }, // Boryspil International Airport
    "LIS": { lat: 38.774722, lon: -9.134167 }, // Lisbon Airport
    "OTP": { lat: 44.571111, lon: 26.085278 }, // Henri Coandă International Airport
    "SOF": { lat: 42.696389, lon: 23.411389 }, // Sofia Airport
    "BEG": { lat: 44.819444, lon: 20.309167 }, // Belgrade Nikola Tesla Airport
    "SKP": { lat: 41.961389, lon: 21.576389 }, // Skopje International Airport
    "TGD": { lat: 42.359722, lon: 19.251944 }, // Podgorica Airport
    "DBV": { lat: 42.561389, lon: 18.261944 }, // Dubrovnik Airport
    "ZAG": { lat: 45.742222, lon: 16.068056 }, // Zagreb Airport
    "SJJ": { lat: 43.821389, lon: 18.331111 }, // Sarajevo International Airport
    "KIV": { lat: 47.464444, lon: 28.566944 }, // Chișinău International Airport
    "BTS": { lat: 48.167222, lon: 17.212222 }, // Bratislava Airport
    "RHO": { lat: 36.405833, lon: 28.086389 }, // Rhodes International Airport
    "HER": { lat: 35.339444, lon: 25.180833 }, // Heraklion Airport
    "KGS": { lat: 36.364167, lon: 27.141389 }, // Kos Airport
    "TLV": { lat: 32.005556, lon: 34.880833 }, // Tel Aviv Ben Gurion Airport
    "DXB": { lat: 25.252778, lon: 55.364444 }, // Dubai International Airport
    "RUH": { lat: 24.958056, lon: 46.700000 }, // Riyadh King Khalid Airport
    "KWI": { lat: 29.226111, lon: 47.969444 }, // Kuwait City Airport
    "GYD": { lat: 40.467222, lon: 50.046389 }, // Baku Heydar Aliyev Airport
    "EVN": { lat: 40.147222, lon: 44.395833 }, // Yerevan Zvartnots Airport
    "TLN": { lat: 43.744722, lon: 6.974722 }, // Toulon-Hyères Airport
    "BRS": { lat: 51.382778, lon: -2.719444 }, // Bristol Airport
    "LBA": { lat: 53.865000, lon: -1.657222 }, // Leeds Bradford Airport
    "CWL": { lat: 51.396111, lon: -3.343056 }, // Cardiff Airport
    "BOH": { lat: 50.780556, lon: -1.842222 }, // Bournemouth Airport
    "SEN": { lat: 51.570833, lon: 0.710278 }, // London Southend Airport
    "BHD": { lat: 54.618056, lon: -5.872222 }, // George Best Belfast City Airport
    "DLM": { lat: 36.713889, lon: 28.792222 }, // Dalaman Airport
    "BJV": { lat: 37.247222, lon: 27.673056 }, // Bodrum-Milas Airport
    "AYT": { lat: 36.898056, lon: 30.798056 }, // Antalya Airport
    "IST": { lat: 41.262222, lon: 28.727222 }, // Istanbul Airport
    "ESB": { lat: 40.128056, lon: 32.995278 }, // Ankara Esenboğa Airport
    "ADB": { lat: 38.292222, lon: 27.157222 }, // Izmir Adnan Menderes Airport
    "KYA": { lat: 37.973056, lon: 32.484722 }, // Konya Airport
    "CGN": { lat: 50.865278, lon: 7.142222 }, // Cologne Bonn Airport
    "NUE": { lat: 49.498056, lon: 11.068056 }, // Nuremberg Airport
    "HAJ": { lat: 52.461389, lon: 9.685833 }, // Hannover Airport
    "SXF": { lat: 52.392222, lon: 13.503056 }, // Berlin Schönefeld Airport
    "BER": { lat: 52.366667, lon: 13.503056 }, // Berlin Brandenburg Airport
    "TXL": { lat: 52.559722, lon: 13.287222 }, // Berlin Tegel Airport
    "VIE": { lat: 48.110278, lon: 16.569722 }, // Vienna International Airport
    "LJU": { lat: 46.223056, lon: 14.457222 }, // Ljubljana Jože Pučnik Airport
    "RJK": { lat: 45.216389, lon: 14.570833 }, // Rijeka Airport
    "SPU": { lat: 43.538056, lon: 16.298056 }, // Split Airport
    "ZAD": { lat: 44.111389, lon: 15.346389 }, // Zadar Airport
    "PIS": { lat: 43.683333, lon: 10.392222 }, // Pisa International Airport
    "FLR": { lat: 43.810278, lon: 11.205000 }, // Florence Airport
    "BGY": { lat: 45.673056, lon: 9.705833 }, // Orio al Serio International Airport
    "PMO": { lat: 38.175000, lon: 13.091389 }, // Palermo Airport
    "BDS": { lat: 40.620278, lon: 17.952222 }, // Brindisi Airport
    "TRN": { lat: 45.200000, lon: 7.649722 }, // Turin Airport
    "MXP": { lat: 45.630278, lon: 8.728056 }, // Milan Malpensa Airport
    "LIN": { lat: 45.466389, lon: 9.272222 }, // Milan Linate Airport
    "VCE": { lat: 45.505556, lon: 12.351944 }, // Venice Marco Polo Airport
    "GVA": { lat: 46.238056, lon: 6.108056 }, // Geneva Airport
    "BRN": { lat: 46.914722, lon: 7.488056 }, // Bern Airport
    "LUG": { lat: 46.005833, lon: 8.951944 }, // Lugano Airport
    "SUI": { lat: 47.465833, lon: 9.411944 }, // St. Gallen-Altenrhein Airport
    "LUX": { lat: 49.611389, lon: 6.219444 }, // Luxembourg Airport
    "BOD": { lat: 44.831944, lon: -0.706944 }, // Bordeaux-Mérignac Airport
};

// Function to calculate the distance between two points using the Haversine formula
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

// Function to convert degrees to radians
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// Function to calculate flight time
function calculateFlightTime(departureIATA, arrivalIATA) {
    const departure = airportCoordinates[departureIATA.toUpperCase()];
    const arrival = airportCoordinates[arrivalIATA.toUpperCase()];
  
    if (!departure || !arrival) {
      return "Invalid IATA code(s). Please try again.";
    }
  
    const distance = getDistanceFromLatLonInKm(
      departure.lat,
      departure.lon,
      arrival.lat,
      arrival.lon
    );
  
    const flightTimeHours = distance / 800; // Assume 800 km/h average speed
    const flightTimeMinutes = flightTimeHours * 60;
  
    // Add 15 minutes to the flight time
    const totalFlightTimeMinutes = Math.round(flightTimeMinutes) + 17;
  
    const totalFlightTimeHours = Math.floor(totalFlightTimeMinutes / 60);
    const remainingMinutes = totalFlightTimeMinutes % 60;
  
    return `The flight time from ${departureIATA} to ${arrivalIATA} is approximately ${totalFlightTimeHours} hours and ${remainingMinutes} minutes.`;
  }

// Event listener for the button click
document.getElementById("calculate").addEventListener("click", function() {
    const departureIATA = document.getElementById("departure").value;
    const arrivalIATA = document.getElementById("arrival").value;
    const flightTimeMessage = calculateFlightTime(departureIATA, arrivalIATA);
    document.getElementById("flightTime").innerHTML = flightTimeMessage;
});