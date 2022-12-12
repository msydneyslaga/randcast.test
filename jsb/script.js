var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define("weatherapi", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Weatherapi = void 0;
    class Weatherapi {
        constructor(apikey, useragent) {
            this.endpoint = "http://api.weatherapi.com/v1";
            this.apikey = apikey;
            this.useragent = useragent;
        }
        ;
    }
    exports.Weatherapi = Weatherapi;
    ;
});
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
define("main", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let print = console.log;
    // type city_forecast_pair = [string, Forecast | null];
    // const cities: city_forecast_pair[] =
    // [
    // 	["Arvada", null],
    // 	["Sydney", null],
    // 	["London", null],
    // ];
    function randomForecast() {
        return __awaiter(this, void 0, void 0, function* () {
            // let wapi = new weather.Weatherapi("c2dbbaa646034df9862140728221112", "(puppy.tf, crumb@disroot.org)");
            const response = yield fetch("https://google.com/");
            print(response);
        });
    }
    function sayhi() {
        print("hi :/");
    }
    function main() {
        var _a;
        print("loaded");
        (_a = document.getElementById("forecastbtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", randomForecast);
    }
    main();
});
