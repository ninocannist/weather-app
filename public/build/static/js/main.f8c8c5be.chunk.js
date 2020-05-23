(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{22:function(e,a,i){e.exports=i(48)},27:function(e,a,i){},28:function(e,a,i){},48:function(e,a,i){"use strict";i.r(a);var t=i(0),n=i.n(t),o=i(19),r=i.n(o),l=(i(27),i(5)),u=i(6),c=i(7),s=i(8),y=i(1),p=(i(28),i(4)),d=i.n(p),m=(i(30),i(2));function h(){var e=Object(y.a)(["\n  text-align: center;\n  color: #878787;\n  font-size: 18px;\n  font-weight: 600;\n"]);return h=function(){return e},e}function g(){var e=Object(y.a)(["\n  text-align: center;\n  color: #545454;\n  font-size: 18px;\n  font-weight: 600;\n"]);return g=function(){return e},e}function U(){var e=Object(y.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 50% 50%;\n"]);return U=function(){return e},e}function T(){var e=Object(y.a)(["\n  text-align: center;\n  color: #2a34af;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 10px;\n"]);return T=function(){return e},e}function V(){var e=Object(y.a)(["\n  text-align: center;\n  color: #2a34af;\n  font-size: 18px;\n  font-weight: 600;\n"]);return V=function(){return e},e}function P(){var e=Object(y.a)(["\n  background-color: #e2f6fc;\n  border: 1px solid #50c2e3;\n  padding: 10px;\n  margin: 10px;\n  border-radius: 5px;\n  &:hover {\n    background-color: #cef4ff;\n    cursor: pointer;\n  }\n"]);return P=function(){return e},e}function b(){var e=Object(y.a)(["\n  width: 100%;\n  display: inline-grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n"]);return b=function(){return e},e}var S=m.a.div(b()),f=m.a.div(P()),E=m.a.div(V()),w=m.a.img(T()),C=m.a.div(U()),D=m.a.div(g()),v=m.a.div(h()),L=function(e){Object(s.a)(i,e);var a=Object(c.a)(i);function i(){var e;Object(l.a)(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={data:e.props.data},e.convertFromFahrenheitToCelsius=function(e){return Math.round((e-32)/1.8)},e}return Object(u.a)(i,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return this.props.data.length>0?n.a.createElement(S,{className:"fast"},this.state.data.map((function(a){return n.a.createElement(f,{key:a.date,onClick:function(){return e.props.ClickHandler(a.date)},style:a.date===e.props.selectedDate?{backgroundColor:"#cef4ff",border:"2px solid #50c2e3"}:{}},n.a.createElement(E,null,d()(a.date).locale("it").format("dddd").substring(0,3)+" "+d()(a.date).locale("it").format("DD").substring(0,3)),n.a.createElement(w,{src:a.icon}),n.a.createElement(C,null,n.a.createElement(D,null,e.convertFromFahrenheitToCelsius(a.max),"\xb0"),n.a.createElement(v,null,e.convertFromFahrenheitToCelsius(a.min),"\xb0")))}))):n.a.createElement("div",null,"Loading...")}}]),i}(t.Component);function R(){var e=Object(y.a)(["\n  padding: 10px;\n"]);return R=function(){return e},e}function O(){var e=Object(y.a)(["\n  padding: 10px;\n  border-bottom: 1px solid #50c2e3ab;\n"]);return O=function(){return e},e}function M(){var e=Object(y.a)(["\n  background-color: #e2f6fc;\n  border: 1px solid #50c2e3;\n  padding: 10px;\n  margin: 10px;\n  border-radius: 5px;\n"]);return M=function(){return e},e}var I=m.a.div(M()),F=m.a.div(O()),H=m.a.div(R()),x=function(e){Object(s.a)(i,e);var a=Object(c.a)(i);function i(){var e;Object(l.a)(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={},e.convertFromFahrenheitToCelsius=function(e){return Math.round((e-32)/1.8)},e}return Object(u.a)(i,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement(I,{className:"details"},n.a.createElement(F,null,"Previsioni: ",this.props.detailedDay.iconPhrase),n.a.createElement(F,null,"Alba: ",this.props.detailedDay.sunRise),n.a.createElement(F,null,"Tramonto: ",this.props.detailedDay.sunSet),n.a.createElement(F,null,"Temperatura percepita Max:"," ",this.convertFromFahrenheitToCelsius(this.props.detailedDay.tPercepitaMax)),n.a.createElement(F,null,"Temperatura percepita Min:"," ",this.convertFromFahrenheitToCelsius(this.props.detailedDay.tPercepitaMin)),n.a.createElement(H,null,"Precipitazioni: ",this.props.detailedDay.PrecipitationProbability,"%"))}}]),i}(t.Component),N=i(9),A=i.n(N);function W(){var e=Object(y.a)(["\n  background-color: #e2f6fc;\n  border: 1px solid #50c2e3;\n  padding: 10px;\n  margin: 10px;\n  border-radius: 5px;\n"]);return W=function(){return e},e}function z(){var e=Object(y.a)(["\n  background-color: #e2f6fc;\n  border: 1px solid #50c2e3;\n  padding: 10px;\n  margin: 10px;\n  border-radius: 5px;\n"]);return z=function(){return e},e}var k=m.a.div(z()),j=m.a.div(W()),G=function(e){Object(s.a)(i,e);var a=Object(c.a)(i);function i(){var e;Object(l.a)(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={data:[],detailsDate:"",locationData:{}},e.displayDetails=function(a){e.setState({detailsDate:a})},e}return Object(u.a)(i,[{key:"componentDidMount",value:function(){var e=this;if("geolocation"in navigator){console.log("Geo Available");var a=45.46091,i=9.187634;navigator.geolocation.getCurrentPosition((function(e){a=e.coords.latitude,i=e.coords.longitude})),console.log(a),console.log(i),A.a.get("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=fjAQMVpT5BZAq8cuSYlph2ZxbVzOnboa&q="+a+","+i).then((function(a){return e.setState({locationData:a.data})})).catch((function(e){return console.error(e)})),this.setState({locationData:{Version:1,Key:"2580054",Type:"City",Rank:85,LocalizedName:"Maciachini",EnglishName:"Maciachini",PrimaryPostalCode:"",Region:{ID:"EUR",LocalizedName:"Europe",EnglishName:"Europe"},Country:{ID:"IT",LocalizedName:"Italy",EnglishName:"Italy"},AdministrativeArea:{ID:"25",LocalizedName:"Lombardy",EnglishName:"Lombardy",Level:1,LocalizedType:"Region",EnglishType:"Region",CountryID:"IT"},TimeZone:{Code:"CEST",Name:"Europe/Rome",GmtOffset:2,IsDaylightSaving:!0,NextOffsetChange:"2020-10-25T01:00:00Z"},GeoPosition:{Latitude:45.501,Longitude:9.192,Elevation:{Metric:{Value:132,Unit:"m",UnitType:5},Imperial:{Value:432,Unit:"ft",UnitType:0}}},IsAlias:!1,ParentCity:{Key:"214046",LocalizedName:"Milan",EnglishName:"Milan"},SupplementalAdminAreas:[{Level:2,LocalizedName:"Milano",EnglishName:"Milano"},{Level:3,LocalizedName:"Milano",EnglishName:"Milano"}],DataSets:["AirQualityCurrentConditions","AirQualityForecasts","Alerts","ForecastConfidence","MinuteCast","Radar"]}}),A.a.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/214046?apikey=fjAQMVpT5BZAq8cuSYlph2ZxbVzOnboa&details=true").then((function(a){return e.setState({data:a.data.DailyForecasts})})),this.setState({data:[{Date:"2020-05-22T07:00:00+02:00",EpochDate:1590123600,Sun:{Rise:"2020-05-22T05:45:00+02:00",EpochRise:1590119100,Set:"2020-05-22T20:55:00+02:00",EpochSet:1590173700},Moon:{Rise:"2020-05-22T05:48:00+02:00",EpochRise:1590119280,Set:"2020-05-22T20:42:00+02:00",EpochSet:1590172920,Phase:"New",Age:0},Temperature:{Minimum:{Value:61,Unit:"F",UnitType:18},Maximum:{Value:82,Unit:"F",UnitType:18}},RealFeelTemperature:{Minimum:{Value:61,Unit:"F",UnitType:18},Maximum:{Value:90,Unit:"F",UnitType:18}},RealFeelTemperatureShade:{Minimum:{Value:61,Unit:"F",UnitType:18},Maximum:{Value:80,Unit:"F",UnitType:18}},HoursOfSun:10.8,DegreeDaySummary:{Heating:{Value:0,Unit:"F",UnitType:18},Cooling:{Value:7,Unit:"F",UnitType:18}},AirAndPollen:[{Name:"AirQuality",Value:50,Category:"Good",CategoryValue:1,Type:"Particle Pollution"},{Name:"Grass",Value:0,Category:"Low",CategoryValue:1},{Name:"Mold",Value:0,Category:"Low",CategoryValue:1},{Name:"Ragweed",Value:0,Category:"Low",CategoryValue:1},{Name:"Tree",Value:0,Category:"Low",CategoryValue:1},{Name:"UVIndex",Value:9,Category:"Very High",CategoryValue:4}],Day:{Icon:3,IconPhrase:"Partly sunny",HasPrecipitation:!1,ShortPhrase:"Partly sunny",LongPhrase:"Partly sunny",PrecipitationProbability:4,ThunderstormProbability:1,RainProbability:4,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:4.6,Unit:"mi/h",UnitType:9},Direction:{Degrees:134,Localized:"SE",English:"SE"}},WindGust:{Speed:{Value:10.4,Unit:"mi/h",UnitType:9},Direction:{Degrees:131,Localized:"SE",English:"SE"}},TotalLiquid:{Value:0,Unit:"in",UnitType:1},Rain:{Value:0,Unit:"in",UnitType:1},Snow:{Value:0,Unit:"in",UnitType:1},Ice:{Value:0,Unit:"in",UnitType:1},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:28},Night:{Icon:35,IconPhrase:"Partly cloudy",HasPrecipitation:!1,ShortPhrase:"Partly cloudy",LongPhrase:"Partly cloudy",PrecipitationProbability:17,ThunderstormProbability:5,RainProbability:17,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:4.6,Unit:"mi/h",UnitType:9},Direction:{Degrees:213,Localized:"SSW",English:"SSW"}},WindGust:{Speed:{Value:8.1,Unit:"mi/h",UnitType:9},Direction:{Degrees:149,Localized:"SSE",English:"SSE"}},TotalLiquid:{Value:0,Unit:"in",UnitType:1},Rain:{Value:0,Unit:"in",UnitType:1},Snow:{Value:0,Unit:"in",UnitType:1},Ice:{Value:0,Unit:"in",UnitType:1},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:45},Sources:["AccuWeather"],MobileLink:"http://m.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=1&lang=en-us",Link:"http://www.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=1&lang=en-us"},{Date:"2020-05-23T07:00:00+02:00",EpochDate:159021e4,Sun:{Rise:"2020-05-23T05:44:00+02:00",EpochRise:1590205440,Set:"2020-05-23T20:57:00+02:00",EpochSet:1590260220},Moon:{Rise:"2020-05-23T06:18:00+02:00",EpochRise:1590207480,Set:"2020-05-23T21:47:00+02:00",EpochSet:1590263220,Phase:"WaxingCrescent",Age:1},Temperature:{Minimum:{Value:60,Unit:"F",UnitType:18},Maximum:{Value:84,Unit:"F",UnitType:18}},RealFeelTemperature:{Minimum:{Value:59,Unit:"F",UnitType:18},Maximum:{Value:90,Unit:"F",UnitType:18}},RealFeelTemperatureShade:{Minimum:{Value:59,Unit:"F",UnitType:18},Maximum:{Value:82,Unit:"F",UnitType:18}},HoursOfSun:6.9,DegreeDaySummary:{Heating:{Value:0,Unit:"F",UnitType:18},Cooling:{Value:7,Unit:"F",UnitType:18}},AirAndPollen:[{Name:"AirQuality",Value:42,Category:"Good",CategoryValue:1,Type:"Ozone"},{Name:"Grass",Value:0,Category:"Low",CategoryValue:1},{Name:"Mold",Value:0,Category:"Low",CategoryValue:1},{Name:"Ragweed",Value:0,Category:"Low",CategoryValue:1},{Name:"Tree",Value:0,Category:"Low",CategoryValue:1},{Name:"UVIndex",Value:8,Category:"Very High",CategoryValue:4}],Day:{Icon:4,IconPhrase:"Intermittent clouds",HasPrecipitation:!1,ShortPhrase:"Times of clouds and sun",LongPhrase:"Periods of clouds and sunshine",PrecipitationProbability:25,ThunderstormProbability:24,RainProbability:25,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:4.6,Unit:"mi/h",UnitType:9},Direction:{Degrees:201,Localized:"SSW",English:"SSW"}},WindGust:{Speed:{Value:9.2,Unit:"mi/h",UnitType:9},Direction:{Degrees:220,Localized:"SW",English:"SW"}},TotalLiquid:{Value:0,Unit:"in",UnitType:1},Rain:{Value:0,Unit:"in",UnitType:1},Snow:{Value:0,Unit:"in",UnitType:1},Ice:{Value:0,Unit:"in",UnitType:1},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:65},Night:{Icon:39,IconPhrase:"Partly cloudy w/ showers",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Moderate",ShortPhrase:"A shower early; clearing",LongPhrase:"A shower in the evening; otherwise, becoming clear",PrecipitationProbability:58,ThunderstormProbability:20,RainProbability:58,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:5.8,Unit:"mi/h",UnitType:9},Direction:{Degrees:314,Localized:"NW",English:"NW"}},WindGust:{Speed:{Value:10.4,Unit:"mi/h",UnitType:9},Direction:{Degrees:241,Localized:"WSW",English:"WSW"}},TotalLiquid:{Value:.07,Unit:"in",UnitType:1},Rain:{Value:.07,Unit:"in",UnitType:1},Snow:{Value:0,Unit:"in",UnitType:1},Ice:{Value:0,Unit:"in",UnitType:1},HoursOfPrecipitation:1,HoursOfRain:1,HoursOfSnow:0,HoursOfIce:0,CloudCover:50},Sources:["AccuWeather"],MobileLink:"http://m.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=2&lang=en-us",Link:"http://www.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=2&lang=en-us"},{Date:"2020-05-24T07:00:00+02:00",EpochDate:1590296400,Sun:{Rise:"2020-05-24T05:43:00+02:00",EpochRise:1590291780,Set:"2020-05-24T20:58:00+02:00",EpochSet:1590346680},Moon:{Rise:"2020-05-24T06:55:00+02:00",EpochRise:1590296100,Set:"2020-05-24T22:50:00+02:00",EpochSet:1590353400,Phase:"WaxingCrescent",Age:2},Temperature:{Minimum:{Value:56,Unit:"F",UnitType:18},Maximum:{Value:76,Unit:"F",UnitType:18}},RealFeelTemperature:{Minimum:{Value:56,Unit:"F",UnitType:18},Maximum:{Value:77,Unit:"F",UnitType:18}},RealFeelTemperatureShade:{Minimum:{Value:56,Unit:"F",UnitType:18},Maximum:{Value:74,Unit:"F",UnitType:18}},HoursOfSun:6.1,DegreeDaySummary:{Heating:{Value:0,Unit:"F",UnitType:18},Cooling:{Value:1,Unit:"F",UnitType:18}},AirAndPollen:[{Name:"AirQuality",Value:34,Category:"Good",CategoryValue:1,Type:"Ozone"},{Name:"Grass",Value:0,Category:"Low",CategoryValue:1},{Name:"Mold",Value:0,Category:"Low",CategoryValue:1},{Name:"Ragweed",Value:0,Category:"Low",CategoryValue:1},{Name:"Tree",Value:0,Category:"Low",CategoryValue:1},{Name:"UVIndex",Value:6,Category:"High",CategoryValue:3}],Day:{Icon:4,IconPhrase:"Intermittent clouds",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Light",ShortPhrase:"A thunderstorm in spots",LongPhrase:"Intervals of clouds and sunshine with a shower or thunderstorm in the area; not as warm",PrecipitationProbability:43,ThunderstormProbability:40,RainProbability:43,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:6.9,Unit:"mi/h",UnitType:9},Direction:{Degrees:101,Localized:"E",English:"E"}},WindGust:{Speed:{Value:11.5,Unit:"mi/h",UnitType:9},Direction:{Degrees:113,Localized:"ESE",English:"ESE"}},TotalLiquid:{Value:.2,Unit:"in",UnitType:1},Rain:{Value:.2,Unit:"in",UnitType:1},Snow:{Value:0,Unit:"in",UnitType:1},Ice:{Value:0,Unit:"in",UnitType:1},HoursOfPrecipitation:2,HoursOfRain:2,HoursOfSnow:0,HoursOfIce:0,CloudCover:69},Night:{Icon:35,IconPhrase:"Partly cloudy",HasPrecipitation:!1,ShortPhrase:"Patchy clouds",LongPhrase:"Patchy clouds",PrecipitationProbability:2,ThunderstormProbability:0,RainProbability:2,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:4.6,Unit:"mi/h",UnitType:9},Direction:{Degrees:104,Localized:"ESE",English:"ESE"}},WindGust:{Speed:{Value:9.2,Unit:"mi/h",UnitType:9},Direction:{Degrees:96,Localized:"E",English:"E"}},TotalLiquid:{Value:0,Unit:"in",UnitType:1},Rain:{Value:0,Unit:"in",UnitType:1},Snow:{Value:0,Unit:"in",UnitType:1},Ice:{Value:0,Unit:"in",UnitType:1},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:50},Sources:["AccuWeather"],MobileLink:"http://m.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=3&lang=en-us",Link:"http://www.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=3&lang=en-us"},{Date:"2020-05-25T07:00:00+02:00",EpochDate:1590382800,Sun:{Rise:"2020-05-25T05:42:00+02:00",EpochRise:1590378120,Set:"2020-05-25T20:59:00+02:00",EpochSet:1590433140},Moon:{Rise:"2020-05-25T07:40:00+02:00",EpochRise:1590385200,Set:"2020-05-25T23:48:00+02:00",EpochSet:1590443280,Phase:"WaxingCrescent",Age:3},Temperature:{Minimum:{Value:56,Unit:"F",UnitType:18},Maximum:{Value:80,Unit:"F",UnitType:18}},RealFeelTemperature:{Minimum:{Value:56,Unit:"F",UnitType:18},Maximum:{Value:86,Unit:"F",UnitType:18}},RealFeelTemperatureShade:{Minimum:{Value:56,Unit:"F",UnitType:18},Maximum:{Value:78,Unit:"F",UnitType:18}},HoursOfSun:10.5,DegreeDaySummary:{Heating:{Value:0,Unit:"F",UnitType:18},Cooling:{Value:3,Unit:"F",UnitType:18}},AirAndPollen:[{Name:"AirQuality",Value:42,Category:"Good",CategoryValue:1,Type:"Ozone"},{Name:"Grass",Value:0,Category:"Low",CategoryValue:1},{Name:"Mold",Value:0,Category:"Low",CategoryValue:1},{Name:"Ragweed",Value:0,Category:"Low",CategoryValue:1},{Name:"Tree",Value:0,Category:"Low",CategoryValue:1},{Name:"UVIndex",Value:9,Category:"Very High",CategoryValue:4}],Day:{Icon:3,IconPhrase:"Partly sunny",HasPrecipitation:!1,ShortPhrase:"Sun and some clouds",LongPhrase:"Sun and some clouds",PrecipitationProbability:1,ThunderstormProbability:0,RainProbability:0,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:4.6,Unit:"mi/h",UnitType:9},Direction:{Degrees:158,Localized:"SSE",English:"SSE"}},WindGust:{Speed:{Value:8.1,Unit:"mi/h",UnitType:9},Direction:{Degrees:172,Localized:"S",English:"S"}},TotalLiquid:{Value:0,Unit:"in",UnitType:1},Rain:{Value:0,Unit:"in",UnitType:1},Snow:{Value:0,Unit:"in",UnitType:1},Ice:{Value:0,Unit:"in",UnitType:1},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:39},Night:{Icon:33,IconPhrase:"Clear",HasPrecipitation:!1,ShortPhrase:"Clear",LongPhrase:"Clear",PrecipitationProbability:1,ThunderstormProbability:0,RainProbability:1,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:5.8,Unit:"mi/h",UnitType:9},Direction:{Degrees:121,Localized:"ESE",English:"ESE"}},WindGust:{Speed:{Value:8.1,Unit:"mi/h",UnitType:9},Direction:{Degrees:120,Localized:"ESE",English:"ESE"}},TotalLiquid:{Value:0,Unit:"in",UnitType:1},Rain:{Value:0,Unit:"in",UnitType:1},Snow:{Value:0,Unit:"in",UnitType:1},Ice:{Value:0,Unit:"in",UnitType:1},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:2},Sources:["AccuWeather"],MobileLink:"http://m.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=4&lang=en-us",Link:"http://www.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=4&lang=en-us"},{Date:"2020-05-26T07:00:00+02:00",EpochDate:1590469200,Sun:{Rise:"2020-05-26T05:42:00+02:00",EpochRise:1590464520,Set:"2020-05-26T21:00:00+02:00",EpochSet:1590519600},Moon:{Rise:"2020-05-26T08:33:00+02:00",EpochRise:1590474780,Set:"2020-05-27T00:39:00+02:00",EpochSet:1590532740,Phase:"WaxingCrescent",Age:4},Temperature:{Minimum:{Value:60,Unit:"F",UnitType:18},Maximum:{Value:79,Unit:"F",UnitType:18}},RealFeelTemperature:{Minimum:{Value:59,Unit:"F",UnitType:18},Maximum:{Value:85,Unit:"F",UnitType:18}},RealFeelTemperatureShade:{Minimum:{Value:59,Unit:"F",UnitType:18},Maximum:{Value:77,Unit:"F",UnitType:18}},HoursOfSun:9.2,DegreeDaySummary:{Heating:{Value:0,Unit:"F",UnitType:18},Cooling:{Value:5,Unit:"F",UnitType:18}},AirAndPollen:[{Name:"AirQuality",Value:22,Category:"Good",CategoryValue:1,Type:"Ozone"},{Name:"Grass",Value:0,Category:"Low",CategoryValue:1},{Name:"Mold",Value:0,Category:"Low",CategoryValue:1},{Name:"Ragweed",Value:0,Category:"Low",CategoryValue:1},{Name:"Tree",Value:0,Category:"Low",CategoryValue:1},{Name:"UVIndex",Value:9,Category:"Very High",CategoryValue:4}],Day:{Icon:3,IconPhrase:"Partly sunny",HasPrecipitation:!1,ShortPhrase:"Partly sunny and pleasant",LongPhrase:"Partly sunny and pleasant",PrecipitationProbability:1,ThunderstormProbability:0,RainProbability:0,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:5.8,Unit:"mi/h",UnitType:9},Direction:{Degrees:124,Localized:"SE",English:"SE"}},WindGust:{Speed:{Value:8.1,Unit:"mi/h",UnitType:9},Direction:{Degrees:133,Localized:"SE",English:"SE"}},TotalLiquid:{Value:0,Unit:"in",UnitType:1},Rain:{Value:0,Unit:"in",UnitType:1},Snow:{Value:0,Unit:"in",UnitType:1},Ice:{Value:0,Unit:"in",UnitType:1},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:37},Night:{Icon:35,IconPhrase:"Partly cloudy",HasPrecipitation:!1,ShortPhrase:"Partly cloudy",LongPhrase:"Partly cloudy",PrecipitationProbability:6,ThunderstormProbability:0,RainProbability:6,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:6.9,Unit:"mi/h",UnitType:9},Direction:{Degrees:99,Localized:"E",English:"E"}},WindGust:{Speed:{Value:11.5,Unit:"mi/h",UnitType:9},Direction:{Degrees:109,Localized:"ESE",English:"ESE"}},TotalLiquid:{Value:0,Unit:"in",UnitType:1},Rain:{Value:0,Unit:"in",UnitType:1},Snow:{Value:0,Unit:"in",UnitType:1},Ice:{Value:0,Unit:"in",UnitType:1},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:39},Sources:["AccuWeather"],MobileLink:"http://m.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=5&lang=en-us",Link:"http://www.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=5&lang=en-us"}]})}else console.log("Not Available")}},{key:"render",value:function(){var e=this,a=this.state.data.map((function(e){return{date:e.Date,icon:"../icons/".concat(("0"+e.Day.Icon).slice(-2),"-s.png"),min:e.Temperature.Minimum.Value,max:e.Temperature.Maximum.Value}})),i={sunRise:"",sunSet:"",tPercepitaMax:0,iconPhrase:"",tPercepitaMin:0,PrecipitationProbability:0};if(this.state.detailsDate){var t=this.state.data.filter((function(a){return a.Date===e.state.detailsDate}));console.log(),i={sunRise:d()(t[0].Sun.Rise).format("h:mm:ss a"),sunSet:d()(t[0].Sun.Set).format("h:mm:ss a"),iconPhrase:t[0].Day.IconPhrase,tPercepitaMax:t[0].RealFeelTemperature.Maximum.Value,tPercepitaMin:t[0].RealFeelTemperature.Minimum.Value,PrecipitationProbability:t[0].Day.PrecipitationProbability}}return n.a.createElement("div",{className:"App"},this.state.data.length>0?n.a.createElement(n.a.Fragment,null,n.a.createElement(k,{className:"location"},this.state.locationData.ParentCity.EnglishName,",",this.state.locationData.Country.EnglishName),n.a.createElement(L,{ClickHandler:function(a){return e.displayDetails(a)},data:a,selectedDate:this.state.detailsDate}),""!==this.state.detailsDate?n.a.createElement(x,{detailedDay:i}):n.a.createElement(j,{className:"details"},"No day selected")):n.a.createElement("div",null,"Loading.."))}}]),i}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f8c8c5be.chunk.js.map