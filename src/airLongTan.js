import React from "react";
import styled from "@emotion/styled";
import PM25 from "./images/pm25.png";
import locationData3 from "./data/龍潭站realtime.json";

const Container = styled.div`
  background-color: white;
  max-height: 700px;
  min-height: 675px;
  min-width: 320px;
  max-width: 450px;
  display: block;
  color: white;
  font-family: "Sofia", sans-serif;
`;

const WeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(72 118 255);
  min-width: 320px;
  max-width: 450px;
  height: 400px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
`;

const Middle = styled.div`
  display: flex;
  flex-basis: 60%;
  flex-direction: column;
`;

const Level1 = styled.div`
  display: flex;
  flex-basis: 30%;
  font-size: 26px;
  align-items: flex-end;
  justify-content: center;
`;

const Level2 = styled.div`
  display: flex;
  flex-basis: 70%;
  align-items: center;
  img {
    width: 100%;
  }
`;

const Bottom = styled.div`
  flex-basis: 20%;
`;

const WeatherCard1 = styled.div`
  margin-top: 3px;
  display: flex;
  min-width: 320px;
  max-width: 450px;
  height: 80px;
`;

const Section1 = styled.div`
  display: flex;
  width: 50%;
  margin: 1px 2px 1px 0px;
  background-color: rgb(255, 120, 100);
  font-weight: bold;
`;
const Section2 = styled.div`
  display: flex;
  flex-basis: 50%;
  margin: 1px 0px 1px 2px;
  background-color: rgb(255, 120, 100);
  font-weight: bold;
`;

const Section3 = styled.div`
  display: flex;
  width: 50%;
  margin: 1px 2px 1px 0px;
  background-color: rgb(0 205 102);
  font-weight: bold;
`;
const Section4 = styled.div`
  display: flex;
  flex-basis: 50%;
  margin: 1px 0px 1px 2px;
  background-color: rgb(0 205 102);
  font-weight: bold;
`;
const Section5 = styled.div`
  display: flex;
  width: 50%;
  margin: 1px 2px 1px 0px;
  background-color: rgb(0 80 205);
  font-weight: bold;
`;
const Section6 = styled.div`
  display: flex;
  flex-basis: 50%;
  margin: 1px 0px 1px 2px;
  background-color: rgb(0 80 205);
  font-weight: bold;
`;
const Content1 = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  background-color: 30 144 255;
  font-weight: bold;
`;
const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: SlateBlue4;
  font-weight: bold;
`;
const Content11 = styled.div`
  display: inline-flex;
  justify-items: center;
  align-items: center;
  height: 70%;
  font-size: 30px;
  font-weight: bold;
`;

const Content12 = styled.div`
  display: inline-flex;
  justify-items: center;
  align-items: center;
  height: 30%;
  font-size: 18px;
  font-weight: bold;
`;
const Content21 = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  font-size: 30px;
  font-weight: bold;
`;
const Content22 = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  font-weight: bold;
`;

const WeatherCard2 = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
  min-width: 320px;
  max-width: 450px;
  background-color: white;
  height: 80px;
`;
const WeatherCard3 = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
  min-width: 320px;
  max-width: 450px;
  background-color: white;
  height: 80px;
`;

const Location = styled.div`
  flex-basis: 50%;
  font-size: 36px;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

const Line1 = styled.div`
  display: inline-flex;
  align-items: center;
  flex-basis: 50%;
  justify-content: center;
  margin-top: 5px;
`;


const AirTaoyuan = () => {
  return (
    <Container>
      <WeatherCard>
        <Top>
          <Location>桃園市/{locationData3[0].location}</Location>
          <Line1>
            {locationData3[0].Day} {locationData3[0].Time}:00 (更新時間)
          </Line1>
        </Top>
        <Middle>
          <Level1>PM2.5</Level1>
          <Level2>
            <img src={PM25} alt="PM25" />
          </Level2>
        </Middle>
        <Bottom></Bottom>
      </WeatherCard>
      <WeatherCard1>
        <Section1>
          <Content1>
            <Content11>CO</Content11>
            <Content12>良好</Content12>
          </Content1>
          <Content2>
            <Content21>{locationData3[0]["CO"]}</Content21>
            <Content22>µg/m3</Content22>
          </Content2>
        </Section1>
        <Section2>
          <Content1>
            <Content11>SO2</Content11>
            <Content12>良好</Content12>
          </Content1>
          <Content2>
            <Content21>{locationData3[0]["SO2"]}</Content21>
            <Content22>µg/m3</Content22>
          </Content2>
        </Section2>
      </WeatherCard1>
      <WeatherCard2>
        <Section3>
          <Content1>
            <Content11>NO2</Content11>
            <Content12>良好</Content12>
          </Content1>
          <Content2>
            <Content21>{locationData3[0]["NO2"]}</Content21>
            <Content22>µg/m3</Content22>
          </Content2>
        </Section3>
        <Section4>
          <Content1>
            <Content11>O3</Content11>
            <Content12>良好</Content12>
          </Content1>
          <Content2>
            <Content21>{locationData3[0]["O3"]}</Content21>
            <Content22>µg/m3</Content22>
          </Content2>
        </Section4>
      </WeatherCard2>
      <WeatherCard3>
        <Section5>
          <Content1>
            <Content11>溫度</Content11>
            <Content12>良好</Content12>
          </Content1>
          <Content2>
            <Content21>{locationData3[0]["Temp"]}</Content21>
            <Content22>°C</Content22>
          </Content2>
        </Section5>
        <Section6>
          <Content1>
            <Content11>濕度</Content11>
            <Content12>良好</Content12>
          </Content1>
          <Content2>
            <Content21>{locationData3[0]["Humidity"]}</Content21>
            <Content22>%</Content22>
          </Content2>
        </Section6>
      </WeatherCard3>
    </Container>
  );
};

export default AirTaoyuan;
