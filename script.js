const joke = {
  categories: [],
  created_at: "2020-01-05 13:42:25.905626",
  id: "tK3Dil0ETaW-Ik10yJ06qQ",
  updated_at: "2020-01-05 13:42:25.905626",
  url: "https://api.chucknorris.io/jokes/tK3Dil0ETaW-Ik10yJ06qQ",
  value:
    "Chuck Norris can spam faster than anyone in the whole world. The speed is 0. that means infinity words per second.",
};

async function fetchJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const dataxxxxx = await response.json();

  console.log(dataxxxxx.created_at);
  return dataxxxxx.value;
}

// function getJoke() {
//   console.log("function started");

//   setTimeout(async () => {
//     const joke = await fetchJoke();
//     console.log(joke);
//   }, 1000);
// }

fetchJoke();

// async function fetchWeather(lat, lon, API_key) {
//   let data = await fetch(
//     `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_key}`
//   );
//   let response = await data.json();
//   console.log(response);
// }

// fetchWeather(18.5204, 73.8567, "f9960a951cd989cd9750b87ef73755db");
