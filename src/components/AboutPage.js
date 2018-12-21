import React from 'react';
import Helmet from 'react-helmet';

const About = () => (
  <div>
    <Helmet>
      <title>About</title>
      <meta name="description" content="The page about ..." />
    </Helmet>
    <br/><p>React with apollo and SSR with babel and webpack is awesome !!!</p>
  </div>
);

export default About;
