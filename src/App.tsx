import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';

function App() {
  const [name, setName] = useState('');
  const email = 'jennifercampbell@sandiego.gov';
  const ccEmail = 'SKennedy@sandiego.gov,MayorToddGloria@sandiego.gov,sandiego@volosports.com';

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    const subject = 'Beach Volleyball Equity Issue regarding Volo Permits';
    const body = `Council member Campbell, 

I want to shed light on some recent procedural changes the parks and recreation department have made that are impacting your constituents and members of the greater San Diego metro. Permits have been issued to support paid-only regular league play to an organization called VOLO in three of the already limited beach volleyball net areas within South Mission and Ocean Beach. Beach volleyball is one of the fastest growing sports, and has been for the last decade, especially in San Diego. 

These resources, specifically the last 4 courts at South Mission Beach, the courts at The Pit across from Belmont Park, and the poles at Ocean Beach pier, are regularly filled with competitive and social players.  Allowing them to be issued to VOLO for the majority of the day, presents an equity issue, as the only way to participate in VOLO activities is to pay a premium, and the other option is to buy an expensive pop up net. 

These new permit practices have created a divide within the community and our first ask is for your office to figure out a solution that works for all. Our community has many ideas we would be willing to discuss, some are listed below- to centralize communication, please direct all feedback from your office through elisa gipe, gipe.elisa@gmail.Com or (707)484-5961. She will disseminate timely information to our group.

Potential solutions:
- Reserve permanent nets only for occasional events (e.g tournaments, fundraisers, etc), not for regular use by clinics or paid leagues. 
- Renew pop up nets for VOLO back in OB, working with lifeguards for safety
- Offer VOLO pop up permits for fiesta island (large area for groups away from residential properties to minimize complaints)
- Create more permanent nets along the boardwalk to ensure safety (this was the solution for Huntington Beach when they faced a similar problem).

Thank you,
${name}`;
    const mailtoLink = `mailto:${email}?cc=${ccEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <p>
          The City of San Diego has issued VOLO permits to use a majority of the permanent public
          nets every weekend from February 10th to August 4th.
        </p>
        <p>
          The City's unprecedented decision severely limits the community's access to free and
          public nets that the community (and not the city) have primarily paid to maintain.
          Additionally, by not granting VOLO permits to use the pop-up nets they've already invested
          in, VOLO is left with significantly less nets to offer beginners access to San Diego's
          fastest growing sport.
        </p>
        <p>
          Help support both the San Diego public and VOLO intramural volleyball communities by
          sending an email to Council Member Jennifer Campbell.
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Your name"
              value={name}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Your name will be added to the bottom of your drafted email.
            </Form.Text>
          </Form.Group>
        </Form>
        <Button onClick={handleClick}>Draft an Email</Button>
      </Container>
    </Container>
  );
}

export default App;
