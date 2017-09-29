import React from 'react';
import { default as PersonInfo } from './components/Person';

const Person = ({ match }) => <PersonInfo id={match.params.id} />;

export default Person;
