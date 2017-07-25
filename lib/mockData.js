export default{
  "response": {
  "version":"0.1",
  "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
  "conditions": 1
  ,
  "forecast": 1
  ,
  "forecast10day": 1
  ,
  "hourly": 1
  }
	}
  ,	"current_observation": {
		"image": {
		"url":"http://icons.wxug.com/graphics/wu2/logo_130x80.png",
		"title":"Weather Underground",
		"link":"http://www.wunderground.com"
		},
		"display_location": {
		"full":"Denver, CO",
		"city":"Denver",
		"state":"CO",
		"state_name":"Colorado",
		"country":"US",
		"country_iso3166":"US",
		"zip":"80201",
		"magic":"1",
		"wmo":"99999",
		"latitude":"39.74000168",
		"longitude":"-104.98000336",
		"elevation":"1598.1"
		},
		"observation_location": {
		"full":"San Rafael Neighborhood, Denver, Colorado",
		"city":"San Rafael Neighborhood, Denver",
		"state":"Colorado",
		"country":"US",
		"country_iso3166":"US",
		"latitude":"39.751591",
		"longitude":"-104.977402",
		"elevation":"5253 ft"
		},
		"estimated": {
		},
		"station_id":"KCODENVE131",
		"observation_time":"Last Updated on July 25, 4:27 PM MDT",
		"observation_time_rfc822":"Tue, 25 Jul 2017 16:27:17 -0600",
		"observation_epoch":"1501021637",
		"local_time_rfc822":"Tue, 25 Jul 2017 16:32:07 -0600",
		"local_epoch":"1501021927",
		"local_tz_short":"MDT",
		"local_tz_long":"America/Denver",
		"local_tz_offset":"-0600",
		"weather":"Mostly Cloudy",
		"temperature_string":"74.6 F (23.7 C)",
		"temp_f":74.6,
		"temp_c":23.7,
		"relative_humidity":"51%",
		"wind_string":"From the South at 4.5 MPH Gusting to 4.5 MPH",
		"wind_dir":"South",
		"wind_degrees":180,
		"wind_mph":4.5,
		"wind_gust_mph":"4.5",
		"wind_kph":7.2,
		"wind_gust_kph":"7.2",
		"pressure_mb":"1011",
		"pressure_in":"29.85",
		"pressure_trend":"+",
		"dewpoint_string":"55 F (13 C)",
		"dewpoint_f":55,
		"dewpoint_c":13,
		"heat_index_string":"NA",
		"heat_index_f":"NA",
		"heat_index_c":"NA",
		"windchill_string":"NA",
		"windchill_f":"NA",
		"windchill_c":"NA",
		"feelslike_string":"74.6 F (23.7 C)",
		"feelslike_f":"74.6",
		"feelslike_c":"23.7",
		"visibility_mi":"10.0",
		"visibility_km":"16.1",
		"solarradiation":"--",
		"UV":"4","precip_1hr_string":"0.00 in ( 0 mm)",
		"precip_1hr_in":"0.00",
		"precip_1hr_metric":" 0",
		"precip_today_string":"0.00 in (0 mm)",
		"precip_today_in":"0.00",
		"precip_today_metric":"0",
		"icon":"mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"forecast_url":"http://www.wunderground.com/US/CO/Denver.html",
		"history_url":"http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCODENVE131",
		"ob_url":"http://www.wunderground.com/cgi-bin/findweather/getForecast?query=39.751591,-104.977402",
		"nowcast":""
	}
		,
	"forecast":{
		"txt_forecast": {
		"date":"3:20 PM MDT",
		"forecastday": [
		{
		"period":0,
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"title":"Tuesday",
		"fcttext":"Thunderstorms likely early. Lows overnight in the mid 60s.",
		"fcttext_metric":"Thunderstorms likely early. Low 18C.",
		"pop":"80"
		}
		,
		{
		"period":1,
		"icon":"nt_chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
		"title":"Tuesday Night",
		"fcttext":"Thunderstorms early, then partly cloudy after midnight. Low around 65F. Winds NW at 10 to 15 mph. Chance of rain 80%.",
		"fcttext_metric":"Scattered thunderstorms early, then partly cloudy after midnight. Low 18C. Winds NW at 15 to 25 km/h. Chance of rain 50%.",
		"pop":"80"
		}
		,
		{
		"period":2,
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"title":"Wednesday",
		"fcttext":"Partly cloudy in the morning. Thunderstorms developing later in the day. High 81F. Winds N at 10 to 15 mph. Chance of rain 80%.",
		"fcttext_metric":"Partly cloudy early with thunderstorms becoming likely during the afternoon. High 27C. Winds N at 10 to 15 km/h. Chance of rain 80%.",
		"pop":"80"
		}
		,
		{
		"period":3,
		"icon":"nt_mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"title":"Wednesday Night",
		"fcttext":"Considerable cloudiness. A stray shower or thunderstorm is possible. Low 64F. Winds SSE at 5 to 10 mph.",
		"fcttext_metric":"Mostly cloudy. A stray shower or thunderstorm is possible. Low 18C. Winds light and variable.",
		"pop":"20"
		}
		,
		{
		"period":4,
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"title":"Thursday",
		"fcttext":"Mostly cloudy in the morning with scattered thunderstorms developing later in the day. High 83F. Winds SE at 5 to 10 mph. Chance of rain 40%.",
		"fcttext_metric":"Mostly cloudy in the morning with scattered thunderstorms developing later in the day. High 28C. Winds SE at 10 to 15 km/h. Chance of rain 40%.",
		"pop":"40"
		}
		,
		{
		"period":5,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Thursday Night",
		"fcttext":"Cloudy skies early, followed by partial clearing. A stray afternoon thunderstorm is possible. Low 64F. Winds SSW at 5 to 10 mph.",
		"fcttext_metric":"Cloudy skies early, then partly cloudy after midnight. A stray afternoon thunderstorm is possible. Low 18C. Winds SSW at 10 to 15 km/h.",
		"pop":"20"
		}
		,
		{
		"period":6,
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"title":"Friday",
		"fcttext":"Partly cloudy in the morning followed by scattered thunderstorms in the afternoon. High 88F. Winds NE at 5 to 10 mph. Chance of rain 40%.",
		"fcttext_metric":"Partly cloudy in the morning followed by scattered thunderstorms in the afternoon. High 31C. Winds NE at 10 to 15 km/h. Chance of rain 40%.",
		"pop":"40"
		}
		,
		{
		"period":7,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Friday Night",
		"fcttext":"Some clouds early will give way to generally clear conditions overnight. A stray afternoon thunderstorm is possible. Low near 65F. Winds SW at 5 to 10 mph.",
		"fcttext_metric":"Partly cloudy skies. A stray afternoon thunderstorm is possible. Low 18C. Winds WSW at 10 to 15 km/h.",
		"pop":"20"
		}
		,
		{
		"period":8,
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"title":"Saturday",
		"fcttext":"Partly cloudy early. Scattered thunderstorms developing in the afternoon. High 86F. Winds N at 5 to 10 mph. Chance of rain 40%.",
		"fcttext_metric":"Partly cloudy with afternoon showers or thunderstorms. High near 30C. Winds N at 10 to 15 km/h. Chance of rain 40%.",
		"pop":"40"
		}
		,
		{
		"period":9,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Saturday Night",
		"fcttext":"Partly cloudy. A stray afternoon thunderstorm is possible. Low 64F. Winds SW at 5 to 10 mph.",
		"fcttext_metric":"A few clouds from time to time. A stray afternoon thunderstorm is possible. Low 18C. Winds SW at 10 to 15 km/h.",
		"pop":"20"
		}
		,
		{
		"period":10,
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"title":"Sunday",
		"fcttext":"Partial cloudiness early, with scattered showers and thunderstorms in the afternoon. High 82F. Winds NNE at 5 to 10 mph. Chance of rain 50%.",
		"fcttext_metric":"Partly cloudy in the morning followed by scattered thunderstorms in the afternoon. High 28C. Winds NNE at 10 to 15 km/h. Chance of rain 50%.",
		"pop":"50"
		}
		,
		{
		"period":11,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Sunday Night",
		"fcttext":"Partly to mostly cloudy. A stray shower or thunderstorm is possible. Low 63F. Winds SW at 5 to 10 mph.",
		"fcttext_metric":"Mostly cloudy skies early will become partly cloudy late. A stray shower or thunderstorm is possible. Low 17C. Winds SW at 10 to 15 km/h.",
		"pop":"20"
		}
		,
		{
		"period":12,
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"title":"Monday",
		"fcttext":"Partial cloudiness early, with scattered showers and thunderstorms in the afternoon. High 82F. Winds SSE at 10 to 15 mph. Chance of rain 60%.",
		"fcttext_metric":"Partly cloudy early. Scattered thunderstorms developing in the afternoon. High 28C. Winds SSE at 15 to 25 km/h. Chance of rain 60%.",
		"pop":"60"
		}
		,
		{
		"period":13,
		"icon":"nt_chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
		"title":"Monday Night",
		"fcttext":"Partly to mostly cloudy skies with scattered thunderstorms before midnight. Low 61F. Winds SSW at 5 to 10 mph. Chance of rain 60%.",
		"fcttext_metric":"Scattered thunderstorms during the evening, then partly cloudy overnight. Low 16C. Winds SSW at 10 to 15 km/h. Chance of rain 60%.",
		"pop":"60"
		}
		,
		{
		"period":14,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Tuesday",
		"fcttext":"Except for a few afternoon clouds, mainly sunny. High 84F. SSE winds shifting to N at 10 to 15 mph.",
		"fcttext_metric":"A few isolated thunderstorms developing during the afternoon under partly cloudy skies. High 29C. Winds N at 10 to 15 km/h. Chance of rain 30%.",
		"pop":"20"
		}
		,
		{
		"period":15,
		"icon":"nt_chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
		"title":"Tuesday Night",
		"fcttext":"Isolated thunderstorms in the evening. Clear skies overnight. Low 61F. Winds SW at 5 to 10 mph. Chance of rain 30%.",
		"fcttext_metric":"Isolated thunderstorms in the evening. Clear skies overnight. Low 16C. Winds SW at 10 to 15 km/h. Chance of rain 30%.",
		"pop":"30"
		}
		,
		{
		"period":16,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Wednesday",
		"fcttext":"Plentiful sunshine. High 87F. Winds N at 10 to 15 mph.",
		"fcttext_metric":"Generally sunny. High 31C. Winds NNE at 10 to 15 km/h.",
		"pop":"10"
		}
		,
		{
		"period":17,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Wednesday Night",
		"fcttext":"Clear skies. Low 61F. Winds SW at 5 to 10 mph.",
		"fcttext_metric":"Mainly clear. Low 16C. Winds SW at 10 to 15 km/h.",
		"pop":"10"
		}
		,
		{
		"period":18,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Thursday",
		"fcttext":"Generally sunny. High 89F. Winds N at 5 to 10 mph.",
		"fcttext_metric":"Sunshine. High 32C. Winds N at 10 to 15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":19,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Thursday Night",
		"fcttext":"Mostly clear skies. Low 61F. Winds SSW at 5 to 10 mph.",
		"fcttext_metric":"Mostly clear skies. Low 16C. Winds SW at 10 to 15 km/h.",
		"pop":"10"
		}
		]
		},
		"simpleforecast": {
		"forecastday": [
		{"date":{
	"epoch":"1501030800",
	"pretty":"7:00 PM MDT on July 25, 2017",
	"day":25,
	"month":7,
	"year":2017,
	"yday":205,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"July",
	"monthname_short":"Jul",
	"weekday_short":"Tue",
	"weekday":"Tuesday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":1,
		"high": {
		"fahrenheit":"88",
		"celsius":"31"
		},
		"low": {
		"fahrenheit":"65",
		"celsius":"18"
		},
		"conditions":"Chance of a Thunderstorm",
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"skyicon":"",
		"pop":80,
		"qpf_allday": {
		"in": 0.14,
		"mm": 4
		},
		"qpf_day": {
		"in": null,
		"mm": null
		},
		"qpf_night": {
		"in": 0.14,
		"mm": 4
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": null,
		"cm": null
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "South",
		"degrees": 0
		},
		"avewind": {
		"mph": 9,
		"kph": 14,
		"dir": "SSW",
		"degrees": 0
		},
		"avehumidity": 48,
		"maxhumidity": 56,
		"minhumidity": 34
		}
		,
		{"date":{
	"epoch":"1501117200",
	"pretty":"7:00 PM MDT on July 26, 2017",
	"day":26,
	"month":7,
	"year":2017,
	"yday":206,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"July",
	"monthname_short":"Jul",
	"weekday_short":"Wed",
	"weekday":"Wednesday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":2,
		"high": {
		"fahrenheit":"81",
		"celsius":"27"
		},
		"low": {
		"fahrenheit":"64",
		"celsius":"18"
		},
		"conditions":"Chance of a Thunderstorm",
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"skyicon":"",
		"pop":80,
		"qpf_allday": {
		"in": 0.15,
		"mm": 4
		},
		"qpf_day": {
		"in": 0.15,
		"mm": 4
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "N",
		"degrees": 5
		},
		"avewind": {
		"mph": 10,
		"kph": 16,
		"dir": "N",
		"degrees": 5
		},
		"avehumidity": 59,
		"maxhumidity": 73,
		"minhumidity": 44
		}
		,
		{"date":{
	"epoch":"1501203600",
	"pretty":"7:00 PM MDT on July 27, 2017",
	"day":27,
	"month":7,
	"year":2017,
	"yday":207,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"July",
	"monthname_short":"Jul",
	"weekday_short":"Thu",
	"weekday":"Thursday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":3,
		"high": {
		"fahrenheit":"83",
		"celsius":"28"
		},
		"low": {
		"fahrenheit":"64",
		"celsius":"18"
		},
		"conditions":"Chance of a Thunderstorm",
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"skyicon":"",
		"pop":40,
		"qpf_allday": {
		"in": 0.07,
		"mm": 2
		},
		"qpf_day": {
		"in": 0.07,
		"mm": 2
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 10,
		"kph": 16,
		"dir": "SE",
		"degrees": 130
		},
		"avewind": {
		"mph": 9,
		"kph": 14,
		"dir": "SE",
		"degrees": 130
		},
		"avehumidity": 59,
		"maxhumidity": 78,
		"minhumidity": 43
		}
		,
		{"date":{
	"epoch":"1501290000",
	"pretty":"7:00 PM MDT on July 28, 2017",
	"day":28,
	"month":7,
	"year":2017,
	"yday":208,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"July",
	"monthname_short":"Jul",
	"weekday_short":"Fri",
	"weekday":"Friday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":4,
		"high": {
		"fahrenheit":"88",
		"celsius":"31"
		},
		"low": {
		"fahrenheit":"65",
		"celsius":"18"
		},
		"conditions":"Chance of a Thunderstorm",
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"skyicon":"",
		"pop":40,
		"qpf_allday": {
		"in": 0.02,
		"mm": 1
		},
		"qpf_day": {
		"in": 0.02,
		"mm": 1
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 10,
		"kph": 16,
		"dir": "NE",
		"degrees": 54
		},
		"avewind": {
		"mph": 7,
		"kph": 11,
		"dir": "NE",
		"degrees": 54
		},
		"avehumidity": 53,
		"maxhumidity": 75,
		"minhumidity": 31
		}
		,
		{"date":{
	"epoch":"1501376400",
	"pretty":"7:00 PM MDT on July 29, 2017",
	"day":29,
	"month":7,
	"year":2017,
	"yday":209,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"July",
	"monthname_short":"Jul",
	"weekday_short":"Sat",
	"weekday":"Saturday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":5,
		"high": {
		"fahrenheit":"86",
		"celsius":"30"
		},
		"low": {
		"fahrenheit":"64",
		"celsius":"18"
		},
		"conditions":"Chance of a Thunderstorm",
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"skyicon":"",
		"pop":40,
		"qpf_allday": {
		"in": 0.03,
		"mm": 1
		},
		"qpf_day": {
		"in": 0.02,
		"mm": 1
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 10,
		"kph": 16,
		"dir": "N",
		"degrees": 353
		},
		"avewind": {
		"mph": 9,
		"kph": 14,
		"dir": "N",
		"degrees": 353
		},
		"avehumidity": 51,
		"maxhumidity": 70,
		"minhumidity": 31
		}
		,
		{"date":{
	"epoch":"1501462800",
	"pretty":"7:00 PM MDT on July 30, 2017",
	"day":30,
	"month":7,
	"year":2017,
	"yday":210,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"July",
	"monthname_short":"Jul",
	"weekday_short":"Sun",
	"weekday":"Sunday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":6,
		"high": {
		"fahrenheit":"82",
		"celsius":"28"
		},
		"low": {
		"fahrenheit":"63",
		"celsius":"17"
		},
		"conditions":"Chance of a Thunderstorm",
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"skyicon":"",
		"pop":50,
		"qpf_allday": {
		"in": 0.06,
		"mm": 2
		},
		"qpf_day": {
		"in": 0.06,
		"mm": 2
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 10,
		"kph": 16,
		"dir": "NNE",
		"degrees": 26
		},
		"avewind": {
		"mph": 9,
		"kph": 14,
		"dir": "NNE",
		"degrees": 26
		},
		"avehumidity": 52,
		"maxhumidity": 70,
		"minhumidity": 37
		}
		,
		{"date":{
	"epoch":"1501549200",
	"pretty":"7:00 PM MDT on July 31, 2017",
	"day":31,
	"month":7,
	"year":2017,
	"yday":211,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"July",
	"monthname_short":"Jul",
	"weekday_short":"Mon",
	"weekday":"Monday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":7,
		"high": {
		"fahrenheit":"82",
		"celsius":"28"
		},
		"low": {
		"fahrenheit":"61",
		"celsius":"16"
		},
		"conditions":"Chance of a Thunderstorm",
		"icon":"chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"skyicon":"",
		"pop":60,
		"qpf_allday": {
		"in": 0.24,
		"mm": 6
		},
		"qpf_day": {
		"in": 0.16,
		"mm": 4
		},
		"qpf_night": {
		"in": 0.08,
		"mm": 2
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "SSE",
		"degrees": 152
		},
		"avewind": {
		"mph": 11,
		"kph": 18,
		"dir": "SSE",
		"degrees": 152
		},
		"avehumidity": 56,
		"maxhumidity": 73,
		"minhumidity": 37
		}
		,
		{"date":{
	"epoch":"1501635600",
	"pretty":"7:00 PM MDT on August 01, 2017",
	"day":1,
	"month":8,
	"year":2017,
	"yday":212,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"August",
	"monthname_short":"Aug",
	"weekday_short":"Tue",
	"weekday":"Tuesday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":8,
		"high": {
		"fahrenheit":"84",
		"celsius":"29"
		},
		"low": {
		"fahrenheit":"61",
		"celsius":"16"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":20,
		"qpf_allday": {
		"in": 0.02,
		"mm": 1
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.02,
		"mm": 1
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "N",
		"degrees": 9
		},
		"avewind": {
		"mph": 10,
		"kph": 16,
		"dir": "N",
		"degrees": 9
		},
		"avehumidity": 56,
		"maxhumidity": 79,
		"minhumidity": 35
		}
		,
		{"date":{
	"epoch":"1501722000",
	"pretty":"7:00 PM MDT on August 02, 2017",
	"day":2,
	"month":8,
	"year":2017,
	"yday":213,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"August",
	"monthname_short":"Aug",
	"weekday_short":"Wed",
	"weekday":"Wednesday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":9,
		"high": {
		"fahrenheit":"87",
		"celsius":"31"
		},
		"low": {
		"fahrenheit":"61",
		"celsius":"16"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "N",
		"degrees": 11
		},
		"avewind": {
		"mph": 10,
		"kph": 16,
		"dir": "N",
		"degrees": 11
		},
		"avehumidity": 46,
		"maxhumidity": 68,
		"minhumidity": 25
		}
		,
		{"date":{
	"epoch":"1501808400",
	"pretty":"7:00 PM MDT on August 03, 2017",
	"day":3,
	"month":8,
	"year":2017,
	"yday":214,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"August",
	"monthname_short":"Aug",
	"weekday_short":"Thu",
	"weekday":"Thursday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":10,
		"high": {
		"fahrenheit":"89",
		"celsius":"32"
		},
		"low": {
		"fahrenheit":"61",
		"celsius":"16"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 10,
		"kph": 16,
		"dir": "N",
		"degrees": 350
		},
		"avewind": {
		"mph": 8,
		"kph": 13,
		"dir": "N",
		"degrees": 350
		},
		"avehumidity": 41,
		"maxhumidity": 63,
		"minhumidity": 22
		}
		]
		}
	}
		,
	"hourly_forecast": [
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "25","mday_padded": "25","yday": "205","isdst": "1","epoch": "1501023600","pretty": "5:00 PM MDT on July 25, 2017","civil": "5:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "79", "metric": "26"},
		"dewpoint": {"english": "53", "metric": "12"},
		"condition": "Chance of a Thunderstorm",
		"icon": "chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"fctcode": "14",
		"sky": "80",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "WNW", "degrees": "285"},
		"wx": "Scattered Thunderstorms",
		"uvi": "2",
		"humidity": "41",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "79", "metric": "26"},
		"qpf": {"english": "0.02", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "55",
		"mslp": {"english": "29.8", "metric": "1009"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "25","mday_padded": "25","yday": "205","isdst": "1","epoch": "1501027200","pretty": "6:00 PM MDT on July 25, 2017","civil": "6:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "77", "metric": "25"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Chance of a Thunderstorm",
		"icon": "chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"fctcode": "14",
		"sky": "76",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "WNW", "degrees": "284"},
		"wx": "Scattered Thunderstorms",
		"uvi": "1",
		"humidity": "44",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "77", "metric": "25"},
		"qpf": {"english": "0.06", "metric": "2"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "43",
		"mslp": {"english": "29.81", "metric": "1009"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "25","mday_padded": "25","yday": "205","isdst": "1","epoch": "1501030800","pretty": "7:00 PM MDT on July 25, 2017","civil": "7:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "75", "metric": "24"},
		"dewpoint": {"english": "56", "metric": "13"},
		"condition": "Chance of a Thunderstorm",
		"icon": "chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
		"fctcode": "14",
		"sky": "83",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "W", "degrees": "273"},
		"wx": "Scattered Thunderstorms",
		"uvi": "0",
		"humidity": "51",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "75", "metric": "24"},
		"qpf": {"english": "0.01", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "37",
		"mslp": {"english": "29.81", "metric": "1009"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "25","mday_padded": "25","yday": "205","isdst": "1","epoch": "1501034400","pretty": "8:00 PM MDT on July 25, 2017","civil": "8:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "74", "metric": "23"},
		"dewpoint": {"english": "55", "metric": "13"},
		"condition": "Thunderstorm",
		"icon": "tstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
		"fctcode": "15",
		"sky": "86",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "W", "degrees": "271"},
		"wx": "Thunderstorms",
		"uvi": "0",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "74", "metric": "23"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "70",
		"mslp": {"english": "29.84", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "25","mday_padded": "25","yday": "205","isdst": "1","epoch": "1501038000","pretty": "9:00 PM MDT on July 25, 2017","civil": "9:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "73", "metric": "23"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Chance of a Thunderstorm",
		"icon": "chancetstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
		"fctcode": "14",
		"sky": "85",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "WNW", "degrees": "291"},
		"wx": "Scattered Thunderstorms",
		"uvi": "0",
		"humidity": "53",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "73", "metric": "23"},
		"qpf": {"english": "0.03", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "56",
		"mslp": {"english": "29.86", "metric": "1011"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "25","mday_padded": "25","yday": "205","isdst": "1","epoch": "1501041600","pretty": "10:00 PM MDT on July 25, 2017","civil": "10:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "72", "metric": "22"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
		"fctcode": "4",
		"sky": "85",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "WNW", "degrees": "296"},
		"wx": "Cloudy",
		"uvi": "0",
		"humidity": "55",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "72", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "21",
		"mslp": {"english": "29.87", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "25","mday_padded": "25","yday": "205","isdst": "1","epoch": "1501045200","pretty": "11:00 PM MDT on July 25, 2017","civil": "11:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "71", "metric": "22"},
		"dewpoint": {"english": "55", "metric": "13"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "77",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "WNW", "degrees": "295"},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "56",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "71", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.88", "metric": "1012"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501048800","pretty": "12:00 AM MDT on July 26, 2017","civil": "12:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "70", "metric": "21"},
		"dewpoint": {"english": "54", "metric": "12"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "72",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NW", "degrees": "314"},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "56",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "70", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.9", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501052400","pretty": "1:00 AM MDT on July 26, 2017","civil": "1:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "70", "metric": "21"},
		"dewpoint": {"english": "55", "metric": "13"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "70",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NNW", "degrees": "329"},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "59",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "70", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.91", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501056000","pretty": "2:00 AM MDT on July 26, 2017","civil": "2:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "69", "metric": "21"},
		"dewpoint": {"english": "56", "metric": "13"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "60",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "N", "degrees": "354"},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "62",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "69", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.92", "metric": "1013"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501059600","pretty": "3:00 AM MDT on July 26, 2017","civil": "3:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "56", "metric": "13"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "34",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "NNW", "degrees": "339"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "66",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.94", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501063200","pretty": "4:00 AM MDT on July 26, 2017","civil": "4:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "56", "metric": "13"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "33",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "NNW", "degrees": "339"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "67",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.95", "metric": "1014"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501066800","pretty": "5:00 AM MDT on July 26, 2017","civil": "5:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "56", "metric": "13"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "45",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "NNW", "degrees": "335"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "69",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.97", "metric": "1015"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501070400","pretty": "6:00 AM MDT on July 26, 2017","civil": "6:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "57", "metric": "14"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "42",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NNW", "degrees": "337"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "72",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.99", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501074000","pretty": "7:00 AM MDT on July 26, 2017","civil": "7:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "57", "metric": "14"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "38",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "N", "degrees": "0"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "73",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "30.03", "metric": "1017"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501077600","pretty": "8:00 AM MDT on July 26, 2017","civil": "8:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "57", "metric": "14"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "49",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "N", "degrees": "3"},
		"wx": "Partly Cloudy",
		"uvi": "1",
		"humidity": "69",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "20",
		"mslp": {"english": "30.05", "metric": "1018"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501081200","pretty": "9:00 AM MDT on July 26, 2017","civil": "9:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "70", "metric": "21"},
		"dewpoint": {"english": "57", "metric": "14"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "50",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "NNE", "degrees": "17"},
		"wx": "Partly Cloudy",
		"uvi": "2",
		"humidity": "65",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "70", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "8",
		"mslp": {"english": "30.06", "metric": "1018"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501084800","pretty": "10:00 AM MDT on July 26, 2017","civil": "10:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "72", "metric": "22"},
		"dewpoint": {"english": "57", "metric": "14"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "43",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNE", "degrees": "18"},
		"wx": "Partly Cloudy",
		"uvi": "5",
		"humidity": "59",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "72", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "30.06", "metric": "1018"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501088400","pretty": "11:00 AM MDT on July 26, 2017","civil": "11:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "76", "metric": "24"},
		"dewpoint": {"english": "57", "metric": "14"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "45",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NNE", "degrees": "14"},
		"wx": "Partly Cloudy",
		"uvi": "7",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "76", "metric": "24"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "30.04", "metric": "1017"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501092000","pretty": "12:00 PM MDT on July 26, 2017","civil": "12:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "78", "metric": "26"},
		"dewpoint": {"english": "57", "metric": "14"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"fctcode": "3",
		"sky": "63",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NNE", "degrees": "12"},
		"wx": "Mostly Cloudy",
		"uvi": "7",
		"humidity": "48",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "78", "metric": "26"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "30.03", "metric": "1017"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501095600","pretty": "1:00 PM MDT on July 26, 2017","civil": "1:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "80", "metric": "27"},
		"dewpoint": {"english": "56", "metric": "13"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"fctcode": "3",
		"sky": "65",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "N", "degrees": "8"},
		"wx": "Mostly Cloudy",
		"uvi": "7",
		"humidity": "44",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "81", "metric": "27"},
		"feelslike": {"english": "80", "metric": "27"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "17",
		"mslp": {"english": "30.01", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501099200","pretty": "2:00 PM MDT on July 26, 2017","civil": "2:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "79", "metric": "26"},
		"dewpoint": {"english": "57", "metric": "14"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"fctcode": "3",
		"sky": "74",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "N", "degrees": "4"},
		"wx": "Mostly Cloudy",
		"uvi": "7",
		"humidity": "48",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "79", "metric": "26"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "24",
		"mslp": {"english": "30.0", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501102800","pretty": "3:00 PM MDT on July 26, 2017","civil": "3:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "78", "metric": "26"},
		"dewpoint": {"english": "57", "metric": "14"},
		"condition": "Thunderstorm",
		"icon": "tstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
		"fctcode": "15",
		"sky": "75",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "N", "degrees": "353"},
		"wx": "Thunderstorms",
		"uvi": "6",
		"humidity": "48",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "78", "metric": "26"},
		"qpf": {"english": "0.04", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "62",
		"mslp": {"english": "30.0", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501106400","pretty": "4:00 PM MDT on July 26, 2017","civil": "4:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "77", "metric": "25"},
		"dewpoint": {"english": "58", "metric": "14"},
		"condition": "Thunderstorm",
		"icon": "tstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
		"fctcode": "15",
		"sky": "75",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "N", "degrees": "350"},
		"wx": "Thunderstorms",
		"uvi": "4",
		"humidity": "51",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "77", "metric": "25"},
		"qpf": {"english": "0.07", "metric": "2"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "65",
		"mslp": {"english": "30.0", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501110000","pretty": "5:00 PM MDT on July 26, 2017","civil": "5:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "75", "metric": "24"},
		"dewpoint": {"english": "59", "metric": "15"},
		"condition": "Thunderstorm",
		"icon": "tstorms",
		"icon_url":"http://icons.wxug.com/i/c/k/tstorms.gif",
		"fctcode": "15",
		"sky": "75",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "N", "degrees": "6"},
		"wx": "Thunderstorms",
		"uvi": "2",
		"humidity": "58",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "75", "metric": "24"},
		"qpf": {"english": "0.05", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "66",
		"mslp": {"english": "30.01", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501113600","pretty": "6:00 PM MDT on July 26, 2017","civil": "6:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "74", "metric": "23"},
		"dewpoint": {"english": "58", "metric": "14"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
		"fctcode": "4",
		"sky": "82",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "N", "degrees": "2"},
		"wx": "Cloudy",
		"uvi": "1",
		"humidity": "58",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "74", "metric": "23"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "19",
		"mslp": {"english": "30.01", "metric": "1016"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501117200","pretty": "7:00 PM MDT on July 26, 2017","civil": "7:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "74", "metric": "23"},
		"dewpoint": {"english": "59", "metric": "15"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
		"fctcode": "4",
		"sky": "85",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NW", "degrees": "309"},
		"wx": "Cloudy",
		"uvi": "0",
		"humidity": "60",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "74", "metric": "23"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "30.03", "metric": "1017"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501120800","pretty": "8:00 PM MDT on July 26, 2017","civil": "8:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "74", "metric": "23"},
		"dewpoint": {"english": "58", "metric": "14"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
		"fctcode": "4",
		"sky": "87",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "SSW", "degrees": "212"},
		"wx": "Cloudy",
		"uvi": "0",
		"humidity": "59",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "74", "metric": "23"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "30.04", "metric": "1017"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501124400","pretty": "9:00 PM MDT on July 26, 2017","civil": "9:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "72", "metric": "22"},
		"dewpoint": {"english": "58", "metric": "14"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
		"fctcode": "4",
		"sky": "86",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "WNW", "degrees": "295"},
		"wx": "Cloudy",
		"uvi": "0",
		"humidity": "63",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "72", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "30.06", "metric": "1018"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501128000","pretty": "10:00 PM MDT on July 26, 2017","civil": "10:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "71", "metric": "22"},
		"dewpoint": {"english": "59", "metric": "15"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
		"fctcode": "4",
		"sky": "85",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "WSW", "degrees": "252"},
		"wx": "Cloudy",
		"uvi": "0",
		"humidity": "65",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "71", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "30.09", "metric": "1019"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "26","mday_padded": "26","yday": "206","isdst": "1","epoch": "1501131600","pretty": "11:00 PM MDT on July 26, 2017","civil": "11:00 PM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "70", "metric": "21"},
		"dewpoint": {"english": "59", "metric": "15"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
		"fctcode": "4",
		"sky": "85",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "WSW", "degrees": "241"},
		"wx": "Cloudy",
		"uvi": "0",
		"humidity": "67",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "70", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "30.09", "metric": "1019"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "27","mday_padded": "27","yday": "207","isdst": "1","epoch": "1501135200","pretty": "12:00 AM MDT on July 27, 2017","civil": "12:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "69", "metric": "21"},
		"dewpoint": {"english": "58", "metric": "14"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
		"fctcode": "4",
		"sky": "85",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "E", "degrees": "93"},
		"wx": "Cloudy",
		"uvi": "0",
		"humidity": "69",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "69", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "13",
		"mslp": {"english": "30.09", "metric": "1019"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "27","mday_padded": "27","yday": "207","isdst": "1","epoch": "1501138800","pretty": "1:00 AM MDT on July 27, 2017","civil": "1:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "59", "metric": "15"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
		"fctcode": "4",
		"sky": "81",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "ESE", "degrees": "106"},
		"wx": "Cloudy",
		"uvi": "0",
		"humidity": "73",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "17",
		"mslp": {"english": "30.09", "metric": "1019"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "27","mday_padded": "27","yday": "207","isdst": "1","epoch": "1501142400","pretty": "2:00 AM MDT on July 27, 2017","civil": "2:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "58", "metric": "14"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "77",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "SSE", "degrees": "149"},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "70",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "30.08", "metric": "1019"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "27","mday_padded": "27","yday": "207","isdst": "1","epoch": "1501146000","pretty": "3:00 AM MDT on July 27, 2017","civil": "3:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "58", "metric": "14"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "67",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "SSE", "degrees": "149"},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "72",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "30.08", "metric": "1019"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "7","mon_padded": "07","mon_abbrev": "Jul","mday": "27","mday_padded": "27","yday": "207","isdst": "1","epoch": "1501149600","pretty": "4:00 AM MDT on July 27, 2017","civil": "4:00 AM","month_name": "July","month_name_abbrev": "Jul","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "58", "metric": "14"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "64",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "ESE", "degrees": "104"},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "73",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "10",
		"mslp": {"english": "30.08", "metric": "1019"}
		}
	]
}
