import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/it';
import styled from '@emotion/styled';

interface weatherType {
  [key: string]: any;
  data: { [key: string]: any };
}

const BoxList = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
`;

const SingleBox = styled.div`
  background-color: #e2f6fc;
  border: 1px solid #50c2e3;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  &:hover {
    background-color: #cef4ff;
    cursor: pointer;
  }
`;

const Date = styled.div`
  text-align: center;
  color: #2a34af;
  font-size: 18px;
  font-weight: 600;
`;

const Icon = styled.img`
  text-align: center;
  color: #2a34af;
  font-size: 18px;
  font-weight: 600;
  margin: 10px;
`;

const Temperatures = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Max = styled.div`
  text-align: center;
  color: #545454;
  font-size: 18px;
  font-weight: 600;
`;

const Min = styled.div`
  text-align: center;
  color: #878787;
  font-size: 18px;
  font-weight: 600;
`;

interface IProps {
  ClickHandler: (dateDetails: string) => void;
  data: {
    date: string;
    icon: string;
    min: number;
    max: number;
  }[];
  selectedDate: string;
}
interface IState {}

class FastList extends Component<IProps, IState> {
  state: weatherType = { data: this.props.data };
  componentDidMount() {}

  convertFromFahrenheitToCelsius = (temperature: number): number => {
    return Math.round((temperature - 32) / 1.8);
  };

  render() {
    return this.props.data.length > 0 ? (
      <BoxList className='fast'>
        {this.state.data.map((dayForecast) => (
          <SingleBox
            key={dayForecast.date}
            onClick={() => this.props.ClickHandler(dayForecast.date)}
            style={
              dayForecast.date === this.props.selectedDate
                ? { backgroundColor: '#cef4ff', border: '2px solid #50c2e3' }
                : {}
            }
          >
            <Date>
              {moment(dayForecast.date)
                .locale('it')
                .format('dddd')
                .substring(0, 3) +
                ' ' +
                moment(dayForecast.date)
                  .locale('it')
                  .format('DD')
                  .substring(0, 3)}
            </Date>
            <Icon src={dayForecast.icon} />
            <Temperatures>
              <Max>
                {this.convertFromFahrenheitToCelsius(dayForecast.max)}&deg;
              </Max>
              <Min>
                {this.convertFromFahrenheitToCelsius(dayForecast.min)}&deg;
              </Min>
            </Temperatures>
          </SingleBox>
        ))}
      </BoxList>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default FastList;
