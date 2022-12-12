export class Weatherapi
{
	readonly apikey: string;
	readonly useragent: string;
	readonly endpoint = "http://api.weatherapi.com/v1";


	constructor(apikey: string, useragent: string)
	{
		this.apikey = apikey;
		this.useragent = useragent;
	};
};

// export class Forecast
// {
// 	city: string;
// 	region: string;
// 	country: string;

// 	temp_c: number;
// 	temp_f: number;

// 	condition_text: string;

// 	wind_kph: number;
// 	precip_mm: number;
// 	cloud: number;

// 	constructor(city: string, wapi: Weatherapi)
// 	{
		
// 	}
// };

