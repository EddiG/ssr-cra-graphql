import React from 'react';
import Person from 'components/Person';

const PersonPage = ({ match }) => <Person id={match && match.params.id} />;

export default PersonPage;
