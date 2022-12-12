import * as weather from "./weatherapi";

let print = console.log;
// type city_forecast_pair = [string, Forecast | null];

// const cities: city_forecast_pair[] =
// [
// 	["Arvada", null],
// 	["Sydney", null],
// 	["London", null],
// ];

async function randomForecast(): Promise<void>
{
	// let wapi = new weather.Weatherapi("c2dbbaa646034df9862140728221112", "(puppy.tf, crumb@disroot.org)");
	const response = await fetch("https://google.com/");

	print(response);
}

function sayhi(): void
{
	print("hi :/");
}

function main(): void
{
	print("loaded");

	document.getElementById("forecastbtn")
		?.addEventListener("click", randomForecast);
}

main();

