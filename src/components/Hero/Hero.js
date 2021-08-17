import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome to <br/>
          My Personal Portfolio
      </SectionTitle>
      <SectionText>
       I am a Front-End Developer And I can help you build your own projects.
      </SectionText>
      <Button onClick={()=> window.location = 'https://gmail.com'} >Learn More</Button>
    </LeftSection>
  </section>
);

export default Hero;