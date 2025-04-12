import { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Animation from './Animation';
function Weather() {
  const [searchString, setSearchString] = useState('');
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [imageVisible, setImageVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherType, setWeatherType] = useState('');
  useEffect(() => {
    async function fetchCities() {
      if (searchString && searchString.length > 2) {
        let resp = await fetch(`https://city-api-liard.vercel.app/getCity/${searchString}`)
        let data = await resp.json();
        setCities(data);
      }
    }
    fetchCities();
  }, [searchString])
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={6}>
            <Typeahead
              placeholder='enter a city here'
              onInputChange={(text) => {
                setSearchString(text);
              }}
              onChange={async (selected) => {
                setCity(selected);
                if (selected && selected[0]) {
                  setSelectedCity(selected[0].split('-')[0]);
                  let resp = await fetch(`https://wttr.in/${selected[0].split('-')[0]}?format=%C`)
                  let data = await resp.text()
                  setWeatherType(data.toLowerCase());
                  setImageVisible(true);
                }
              }}
              options={cities}
              selected={city}
            />
          </Col>
        </Row>
      </Container>
      {imageVisible &&
        <div>
          <hr />
          <Container fluid>
            <Row>
              <Col xs={6}>
                <Animation weatherType={weatherType} />
              </Col>
              <br/>
              </Row>
              <Row>
              <Col>
                <Image src={`https://wttr.in/${selectedCity}_2Fq.png`} fluid />
              </Col>
            </Row>
          </Container>
        </div>
      }
    </>

  )
}

export default Weather;