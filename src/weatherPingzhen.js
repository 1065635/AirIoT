import React from "react";
import styled from "@emotion/styled";
import locationData1 from "./data/平鎮區.json";
import locationData2 from "./data/平鎮區3D.json";

const Cloudy = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-right: 5px;
`;

const Cloudys = styled.div`
  display: inline-block;
`;
const Time = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
`;

const Img = styled.div`
  display: inline-flex;
  justify-content: center;
  img {
    width: 70%;
  }
`;
const Content1 = styled.div`
  margin-top: 20px;
  display: flex;
`;
const Content01 = styled.div`
  display: inline-block;
  width: 15%;
  margin-top: 25px;
`;
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
  background-color: red;
  position: relative;
  min-width: 320px;
  max-width: 450px;
  height: 120px;
  padding: 30px 0px;
`;

const WeatherCard1 = styled.div`
  background: linear-gradient(red, red);
  position: relative;
  min-width: 320px;
  max-width: 450px;
  padding-bottom: 10px;
`;

const WeatherCard2 = styled.div`
  display: flex;
  position: relative;
  min-width: 320px;
  max-width: 450px;
  background-color: rgba(255, 99, 71, 0.9);
`;
const WeatherCard3 = styled.div`
  display: flex;
  position: relative;
  min-width: 320px;
  max-width: 450px;
  background-color: rgba(255, 99, 71, 0.8);
`;
const WeatherCard4 = styled.div`
  display: flex;
  position: relative;
  min-width: 320px;
  max-width: 450px;
  background-color: rgba(255, 99, 71, 0.7);
`;

const Location = styled.div`
  font-size: 50px;
  margin: 10px 20px;
`;

const Description = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 20px;
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;

const Temperature = styled.div`
  font-size: 96px;
  font-weight: 300;
  display: flex;
`;

const Celsius = styled.div`
  font-weight: normal;
  font-size: 42px;
`;

const Humidity = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  margin: 20px;
`;

const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  margin: 20px;
`;

const Section1 = styled.div`
  flex-basis: 80%;
  display: flex;
`;
const Content11 = styled.div`
  flex-basis: 25%;
  padding: 10px;
`;

const Content12 = styled.div`
  flex-basis: 20%;
  padding: 10px;
`;

const Section2 = styled.div`
  flex-basis: 20%;
  display: flex;
`;

const Content21 = styled.div`
  display: flex;
  justify-content: center;
  img {
    padding: 10px;
    width: 40px;
    height: 40px;
  }
`;

const Content22 = styled.div`
  display: block;
  padding: 10px;
`;

const Line = styled.div`
  margin: 5px;
`;

const Line1 = styled.div`
  margin-bottom: 5px;
`;

const Line2 = styled.div`
  margin-top: 5px;
`;

const WeatherApp = () => {
  return (
    <Container>
      <WeatherCard>
        <Location>{locationData1[0].loc_1}</Location>
        <Description>
          <Line>{locationData2[0].today_1}</Line>
          <Line>{locationData2[0].weekday1}</Line>
        </Description>
      </WeatherCard>
      <WeatherCard1>
        <CurrentWeather>
          <Temperature>
            {locationData1[0].temp_1} <Celsius>°C</Celsius>
          </Temperature>
          <Cloudy>
            <img src={locationData1[0].url_1} alt='' />
          </Cloudy>
        </CurrentWeather>
        <Humidity>Humidity : {locationData1[0].humdi_1} %</Humidity>
        <Rain>Rain Possibility : {locationData1[0].rain_1} %</Rain>
        <Content1>
          <Content01>
            <Cloudys>
              <Img>
                <img src={locationData1[1].url_2} alt="1" />
              </Img>
              <Time>{locationData1[1].date_2}:00</Time>
            </Cloudys>
          </Content01>
          <Content01>
            <Cloudys>
              <Img>
                <img src={locationData1[2].url_3} alt="1" />
              </Img>
              <Time>{locationData1[2].date_3}:00</Time>
            </Cloudys>
          </Content01>
          <Content01>
            <Cloudys>
              <Img>
                <img src={locationData1[3].url_4} alt="1" />
              </Img>
              <Time>{locationData1[3].date_4}:00</Time>
            </Cloudys>
          </Content01>
          <Content01>
            <Cloudys>
              <Img>
                <img src={locationData1[4].url_5} alt="1" />
              </Img>
              <Time>{locationData1[4].date_5}:00</Time>
            </Cloudys>
          </Content01>
          <Content01>
            <Cloudys>
              <Img>
                <img src={locationData1[5].url_6} alt="1" />
              </Img>
              <Time>{locationData1[5].date_6}:00</Time>
            </Cloudys>
          </Content01>
          <Content01>
            <Cloudys>
              <Img>
                <img src={locationData1[6].url_7} alt="1" />
              </Img>
              <Time>{locationData1[6].date_7}:00</Time>
            </Cloudys>
          </Content01>
          <Content01>
            <Cloudys>
              <Img>
                <img src={locationData1[7].url_8} alt="1" />
              </Img>
              <Time>{locationData1[7].date_8}:00</Time>
            </Cloudys>
          </Content01>
        </Content1>
      </WeatherCard1>
      <WeatherCard2>
        <Section1>
          <Content11>
            <Line1>{locationData2[1].date_2}</Line1>
            <Line2>{locationData2[1].wType_2}</Line2>
          </Content11>
          <Content12>
            <Line1>{locationData2[1].weekday2}</Line1>
            <Line2>{locationData2[1].rain_2} %</Line2>
          </Content12>
        </Section1>
        <Section2>
          <Content21>
            <img src={locationData2[1].url_2} alt="1" />
          </Content21>
          <Content22>
            <Line1>
              {locationData2[1].tempH_2}°<br></br>
            </Line1>
            <Line2>{locationData2[1].tempL_2}°</Line2>
          </Content22>
        </Section2>
      </WeatherCard2>
      <WeatherCard3>
        <Section1>
          <Content11>
            <Line1>{locationData2[2].date_3}</Line1>
            <Line2>{locationData2[2].wType_3}</Line2>
          </Content11>
          <Content12>
            <Line1>{locationData2[2].weekday3}</Line1>
            <Line2> {locationData2[2].rain_3} %</Line2>
          </Content12>
        </Section1>
        <Section2>
          <Content21>
            <img src={locationData2[2].url_3} alt="1" />
          </Content21>
          <Content22>
            <Line1>
              {locationData2[2].tempH_3}°<br></br>
            </Line1>
            <Line2>{locationData2[2].tempL_3}°</Line2>
          </Content22>
        </Section2>
      </WeatherCard3>
      <WeatherCard4>
        <Section1>
          <Content11>
            <Line1>{locationData2[3].date_4}</Line1>
            <Line2>{locationData2[3].wType_4}</Line2>
          </Content11>
          <Content12>
            <Line1>{locationData2[3].weekday4}</Line1>
            <Line2>{locationData2[3].rain_4} %</Line2>
          </Content12>
        </Section1>
        <Section2>
          <Content21>
            <img src={locationData2[3].url_4} alt="1" />
          </Content21>
          <Content22>
            <Line1>
              {locationData2[3].tempH_4}°<br></br>
            </Line1>
            <Line2>{locationData2[3].tempL_4}°</Line2>
          </Content22>
        </Section2>
      </WeatherCard4>
    </Container>
  );
};

export default WeatherApp;
