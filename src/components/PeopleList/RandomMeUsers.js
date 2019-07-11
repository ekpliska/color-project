import React from 'react';
import DataComponent from './DataComponent';
import PeopleList from './PeopleList';

const RandomMeUsers = DataComponent(PeopleList, "https://randomuser.me/api/");

export default RandomMeUsers;