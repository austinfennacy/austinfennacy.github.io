import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

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
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            The City of San Diego has issued permits to VOLO to use a majority of the permanent
            public nets at South Mission Beach, Ocean Beach, & The Pit every weekend from February
            10th to August 4th. This unprecedented decision severely limits the community's access
            to the free and public nets that the community (and not the city) have primarily paid to
            maintain. Additionally, by not allowing VOLO permits to use the pop-up nets they've
            already invested in, this decision seriously limits VOLO from offering scalable access
            to beginners that want to play San Diego's fastest growing sport. Help support both the
            San Diego public and VOLO intramural volleyball communities by sending an email to
            Council Member Jennifer Campbell.
          </p>
          <input type="text" placeholder="Your Name" value={name} onChange={handleChange} />
          <br />
          <Button onClick={handleClick}>Send Email</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
