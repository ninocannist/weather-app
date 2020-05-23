import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';

import FastList from './components/FastList';
import Details from './components/Details';
import axios from 'axios';
import styled from '@emotion/styled';

interface IProps {}

interface IState {
  data: object[];
  detailsDate: string;
  locationData: { [key: string]: any };
}

const Location = styled.div`
  background-color: #e2f6fc;
  border: 1px solid #50c2e3;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const Informations = styled.div`
  background-color: #e2f6fc;
  border: 1px solid #50c2e3;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

class App extends Component<IProps, IState> {
  state: IState = {
    data: [],
    detailsDate: '',
    locationData: {},
  };

  componentDidMount() {
    if ('geolocation' in navigator) {
      console.log('Geo Available');
      var lat = 45.46091;
      var lng = 9.187634;
      navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
      });
      console.log(lat);
      console.log(lng);
      axios
        .get(
          'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=fjAQMVpT5BZAq8cuSYlph2ZxbVzOnboa&q=' +
            lat +
            ',' +
            lng
        )
        .then((res) => this.setState({ locationData: res.data }))
        .catch((err) => console.error(err));
      this.setState({
        locationData: {
          Version: 1,
          Key: '2580054',
          Type: 'City',
          Rank: 85,
          LocalizedName: 'Maciachini',
          EnglishName: 'Maciachini',
          PrimaryPostalCode: '',
          Region: {
            ID: 'EUR',
            LocalizedName: 'Europe',
            EnglishName: 'Europe',
          },
          Country: {
            ID: 'IT',
            LocalizedName: 'Italy',
            EnglishName: 'Italy',
          },
          AdministrativeArea: {
            ID: '25',
            LocalizedName: 'Lombardy',
            EnglishName: 'Lombardy',
            Level: 1,
            LocalizedType: 'Region',
            EnglishType: 'Region',
            CountryID: 'IT',
          },
          TimeZone: {
            Code: 'CEST',
            Name: 'Europe/Rome',
            GmtOffset: 2.0,
            IsDaylightSaving: true,
            NextOffsetChange: '2020-10-25T01:00:00Z',
          },
          GeoPosition: {
            Latitude: 45.501,
            Longitude: 9.192,
            Elevation: {
              Metric: {
                Value: 132.0,
                Unit: 'm',
                UnitType: 5,
              },
              Imperial: {
                Value: 432.0,
                Unit: 'ft',
                UnitType: 0,
              },
            },
          },
          IsAlias: false,
          ParentCity: {
            Key: '214046',
            LocalizedName: 'Milan',
            EnglishName: 'Milan',
          },
          SupplementalAdminAreas: [
            {
              Level: 2,
              LocalizedName: 'Milano',
              EnglishName: 'Milano',
            },
            {
              Level: 3,
              LocalizedName: 'Milano',
              EnglishName: 'Milano',
            },
          ],
          DataSets: [
            'AirQualityCurrentConditions',
            'AirQualityForecasts',
            'Alerts',
            'ForecastConfidence',
            'MinuteCast',
            'Radar',
          ],
        },
      });
      axios
        .get(
          'http://dataservice.accuweather.com/forecasts/v1/daily/5day/214046?apikey=fjAQMVpT5BZAq8cuSYlph2ZxbVzOnboa&details=true'
        )
        .then((res) => this.setState({ data: res.data.DailyForecasts }));
      this.setState({
        data: [
          {
            Date: '2020-05-22T07:00:00+02:00',
            EpochDate: 1590123600,
            Sun: {
              Rise: '2020-05-22T05:45:00+02:00',
              EpochRise: 1590119100,
              Set: '2020-05-22T20:55:00+02:00',
              EpochSet: 1590173700,
            },
            Moon: {
              Rise: '2020-05-22T05:48:00+02:00',
              EpochRise: 1590119280,
              Set: '2020-05-22T20:42:00+02:00',
              EpochSet: 1590172920,
              Phase: 'New',
              Age: 0,
            },
            Temperature: {
              Minimum: {
                Value: 61.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 82.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 61.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 90.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 61.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 80.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            HoursOfSun: 10.8,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'F',
                UnitType: 18,
              },
              Cooling: {
                Value: 7.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 50,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Particle Pollution',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 9,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 3,
              IconPhrase: 'Partly sunny',
              HasPrecipitation: false,
              ShortPhrase: 'Partly sunny',
              LongPhrase: 'Partly sunny',
              PrecipitationProbability: 4,
              ThunderstormProbability: 1,
              RainProbability: 4,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 4.6,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 134,
                  Localized: 'SE',
                  English: 'SE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 10.4,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 131,
                  Localized: 'SE',
                  English: 'SE',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 28,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
              ShortPhrase: 'Partly cloudy',
              LongPhrase: 'Partly cloudy',
              PrecipitationProbability: 17,
              ThunderstormProbability: 5,
              RainProbability: 17,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 4.6,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 213,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 8.1,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 149,
                  Localized: 'SSE',
                  English: 'SSE',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 45,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=1&lang=en-us',
            Link:
              'http://www.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=1&lang=en-us',
          },
          {
            Date: '2020-05-23T07:00:00+02:00',
            EpochDate: 1590210000,
            Sun: {
              Rise: '2020-05-23T05:44:00+02:00',
              EpochRise: 1590205440,
              Set: '2020-05-23T20:57:00+02:00',
              EpochSet: 1590260220,
            },
            Moon: {
              Rise: '2020-05-23T06:18:00+02:00',
              EpochRise: 1590207480,
              Set: '2020-05-23T21:47:00+02:00',
              EpochSet: 1590263220,
              Phase: 'WaxingCrescent',
              Age: 1,
            },
            Temperature: {
              Minimum: {
                Value: 60.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 84.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 59.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 90.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 59.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 82.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            HoursOfSun: 6.9,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'F',
                UnitType: 18,
              },
              Cooling: {
                Value: 7.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 42,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 8,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 4,
              IconPhrase: 'Intermittent clouds',
              HasPrecipitation: false,
              ShortPhrase: 'Times of clouds and sun',
              LongPhrase: 'Periods of clouds and sunshine',
              PrecipitationProbability: 25,
              ThunderstormProbability: 24,
              RainProbability: 25,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 4.6,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 201,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 9.2,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 220,
                  Localized: 'SW',
                  English: 'SW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 65,
            },
            Night: {
              Icon: 39,
              IconPhrase: 'Partly cloudy w/ showers',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Moderate',
              ShortPhrase: 'A shower early; clearing',
              LongPhrase: 'A shower in the evening; otherwise, becoming clear',
              PrecipitationProbability: 58,
              ThunderstormProbability: 20,
              RainProbability: 58,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 5.8,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 314,
                  Localized: 'NW',
                  English: 'NW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 10.4,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 241,
                  Localized: 'WSW',
                  English: 'WSW',
                },
              },
              TotalLiquid: {
                Value: 0.07,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.07,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 1.0,
              HoursOfRain: 1.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 50,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=2&lang=en-us',
            Link:
              'http://www.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=2&lang=en-us',
          },
          {
            Date: '2020-05-24T07:00:00+02:00',
            EpochDate: 1590296400,
            Sun: {
              Rise: '2020-05-24T05:43:00+02:00',
              EpochRise: 1590291780,
              Set: '2020-05-24T20:58:00+02:00',
              EpochSet: 1590346680,
            },
            Moon: {
              Rise: '2020-05-24T06:55:00+02:00',
              EpochRise: 1590296100,
              Set: '2020-05-24T22:50:00+02:00',
              EpochSet: 1590353400,
              Phase: 'WaxingCrescent',
              Age: 2,
            },
            Temperature: {
              Minimum: {
                Value: 56.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 76.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 56.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 77.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 56.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 74.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            HoursOfSun: 6.1,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'F',
                UnitType: 18,
              },
              Cooling: {
                Value: 1.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 34,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 6,
                Category: 'High',
                CategoryValue: 3,
              },
            ],
            Day: {
              Icon: 4,
              IconPhrase: 'Intermittent clouds',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Light',
              ShortPhrase: 'A thunderstorm in spots',
              LongPhrase:
                'Intervals of clouds and sunshine with a shower or thunderstorm in the area; not as warm',
              PrecipitationProbability: 43,
              ThunderstormProbability: 40,
              RainProbability: 43,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 6.9,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 101,
                  Localized: 'E',
                  English: 'E',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.5,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 113,
                  Localized: 'ESE',
                  English: 'ESE',
                },
              },
              TotalLiquid: {
                Value: 0.2,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.2,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 2.0,
              HoursOfRain: 2.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 69,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
              ShortPhrase: 'Patchy clouds',
              LongPhrase: 'Patchy clouds',
              PrecipitationProbability: 2,
              ThunderstormProbability: 0,
              RainProbability: 2,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 4.6,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 104,
                  Localized: 'ESE',
                  English: 'ESE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 9.2,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 96,
                  Localized: 'E',
                  English: 'E',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 50,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=3&lang=en-us',
            Link:
              'http://www.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=3&lang=en-us',
          },
          {
            Date: '2020-05-25T07:00:00+02:00',
            EpochDate: 1590382800,
            Sun: {
              Rise: '2020-05-25T05:42:00+02:00',
              EpochRise: 1590378120,
              Set: '2020-05-25T20:59:00+02:00',
              EpochSet: 1590433140,
            },
            Moon: {
              Rise: '2020-05-25T07:40:00+02:00',
              EpochRise: 1590385200,
              Set: '2020-05-25T23:48:00+02:00',
              EpochSet: 1590443280,
              Phase: 'WaxingCrescent',
              Age: 3,
            },
            Temperature: {
              Minimum: {
                Value: 56.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 80.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 56.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 86.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 56.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 78.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            HoursOfSun: 10.5,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'F',
                UnitType: 18,
              },
              Cooling: {
                Value: 3.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 42,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 9,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 3,
              IconPhrase: 'Partly sunny',
              HasPrecipitation: false,
              ShortPhrase: 'Sun and some clouds',
              LongPhrase: 'Sun and some clouds',
              PrecipitationProbability: 1,
              ThunderstormProbability: 0,
              RainProbability: 0,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 4.6,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 158,
                  Localized: 'SSE',
                  English: 'SSE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 8.1,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 172,
                  Localized: 'S',
                  English: 'S',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 39,
            },
            Night: {
              Icon: 33,
              IconPhrase: 'Clear',
              HasPrecipitation: false,
              ShortPhrase: 'Clear',
              LongPhrase: 'Clear',
              PrecipitationProbability: 1,
              ThunderstormProbability: 0,
              RainProbability: 1,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 5.8,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 121,
                  Localized: 'ESE',
                  English: 'ESE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 8.1,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 120,
                  Localized: 'ESE',
                  English: 'ESE',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 2,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=4&lang=en-us',
            Link:
              'http://www.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=4&lang=en-us',
          },
          {
            Date: '2020-05-26T07:00:00+02:00',
            EpochDate: 1590469200,
            Sun: {
              Rise: '2020-05-26T05:42:00+02:00',
              EpochRise: 1590464520,
              Set: '2020-05-26T21:00:00+02:00',
              EpochSet: 1590519600,
            },
            Moon: {
              Rise: '2020-05-26T08:33:00+02:00',
              EpochRise: 1590474780,
              Set: '2020-05-27T00:39:00+02:00',
              EpochSet: 1590532740,
              Phase: 'WaxingCrescent',
              Age: 4,
            },
            Temperature: {
              Minimum: {
                Value: 60.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 79.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 59.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 85.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 59.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 77.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            HoursOfSun: 9.2,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'F',
                UnitType: 18,
              },
              Cooling: {
                Value: 5.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 22,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 9,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 3,
              IconPhrase: 'Partly sunny',
              HasPrecipitation: false,
              ShortPhrase: 'Partly sunny and pleasant',
              LongPhrase: 'Partly sunny and pleasant',
              PrecipitationProbability: 1,
              ThunderstormProbability: 0,
              RainProbability: 0,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 5.8,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 124,
                  Localized: 'SE',
                  English: 'SE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 8.1,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 133,
                  Localized: 'SE',
                  English: 'SE',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 37,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
              ShortPhrase: 'Partly cloudy',
              LongPhrase: 'Partly cloudy',
              PrecipitationProbability: 6,
              ThunderstormProbability: 0,
              RainProbability: 6,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 6.9,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 99,
                  Localized: 'E',
                  English: 'E',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.5,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 109,
                  Localized: 'ESE',
                  English: 'ESE',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 39,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=5&lang=en-us',
            Link:
              'http://www.accuweather.com/en/it/milan/214046/daily-weather-forecast/214046?day=5&lang=en-us',
          },
        ],
      });
    } else {
      console.log('Not Available');
    }
  }

  displayDetails = (date) => {
    this.setState({ detailsDate: date });
  };

  render() {
    const cleanDataFast = this.state.data.map(
      (dayDetails: { [key: string]: any }) => {
        return {
          date: dayDetails.Date,
          icon: `../icons/${('0' + dayDetails.Day.Icon).slice(-2)}-s.png`,
          min: dayDetails.Temperature.Minimum.Value,
          max: dayDetails.Temperature.Maximum.Value,
        };
      }
    );

    let cleanDetails = {
      sunRise: '',
      sunSet: '',
      tPercepitaMax: 0,
      iconPhrase: '',
      tPercepitaMin: 0,
      PrecipitationProbability: 0,
    };

    if (this.state.detailsDate) {
      const selectedDay: { [key: string]: any } = this.state.data.filter(
        (day: { [key: string]: any }) => day.Date === this.state.detailsDate
      );
      console.log();
      cleanDetails = {
        sunRise: moment(selectedDay[0].Sun.Rise).format('h:mm:ss a'),
        sunSet: moment(selectedDay[0].Sun.Set).format('h:mm:ss a'),
        iconPhrase: selectedDay[0].Day.IconPhrase,
        tPercepitaMax: selectedDay[0].RealFeelTemperature.Maximum.Value,
        tPercepitaMin: selectedDay[0].RealFeelTemperature.Minimum.Value,
        PrecipitationProbability: selectedDay[0].Day.PrecipitationProbability,
      };
    }

    return (
      <div className='App'>
        {this.state.data.length > 0 ? (
          <>
            <Location className='location'>
              {this.state.locationData.ParentCity.EnglishName},
              {this.state.locationData.Country.EnglishName}
            </Location>
            <FastList
              ClickHandler={(dateDetails) => this.displayDetails(dateDetails)}
              data={cleanDataFast}
              selectedDate={this.state.detailsDate}
            />
            {this.state.detailsDate !== '' ? (
              <Details detailedDay={cleanDetails} />
            ) : (
              <Informations className='details'>No day selected</Informations>
            )}
          </>
        ) : (
          <div>Loading..</div>
        )}
      </div>
    );
  }
}

export default App;
