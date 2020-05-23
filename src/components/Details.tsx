import React, { Component } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

const Informations = styled.div`
  background-color: #e2f6fc;
  border: 1px solid #50c2e3;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const SingleInformation = styled.div`
  padding: 10px;
  border-bottom: 1px solid #50c2e3ab;
`;

const SingleInformationLast = styled.div`
  padding: 10px;
`;

interface IProps {
  detailedDay: {
    sunRise: string;
    sunSet: string;
    iconPhrase: string;
    tPercepitaMax: number;
    tPercepitaMin: number;
    PrecipitationProbability: number;
  };
  [key: string]: any;
}
interface IState {
  [key: string]: any;
}

class Details extends Component<IProps, IState> {
  state: IState = {};

  convertFromFahrenheitToCelsius = (temperature: number): number => {
    return Math.round((temperature - 32) / 1.8);
  };

  componentDidMount() {}

  render() {
    return (
      <Informations className='details'>
        <SingleInformation>
          Previsioni: {this.props.detailedDay.iconPhrase}
        </SingleInformation>
        <SingleInformation>
          Alba: {this.props.detailedDay.sunRise}
        </SingleInformation>
        <SingleInformation>
          Tramonto: {this.props.detailedDay.sunSet}
        </SingleInformation>
        <SingleInformation>
          Temperatura percepita Max:{' '}
          {this.convertFromFahrenheitToCelsius(
            this.props.detailedDay.tPercepitaMax
          )}
        </SingleInformation>
        <SingleInformation>
          Temperatura percepita Min:{' '}
          {this.convertFromFahrenheitToCelsius(
            this.props.detailedDay.tPercepitaMin
          )}
        </SingleInformation>
        <SingleInformationLast>
          Precipitazioni: {this.props.detailedDay.PrecipitationProbability}%
        </SingleInformationLast>
      </Informations>
    );
  }
}

export default Details;
