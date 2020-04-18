import React, { useState } from 'react';

const Bandlist = () => {
  const [data, setData] = useState({
    bands: [
      {
        genres: ['Pop', 'Folk', 'Other'],
        _id: '5e85fdbee9a4d607a8ef778e',
        name: 'Iron Maiden',
        address: 'Leyton',
        description: 'Paul is the man',
        createdAt: '2020-04-02T14:59:10.547Z',
        user: '5e8c47909b8eb6322478e04a',
      },
      {
        genres: ['Rock', 'Other'],
        _id: '5e8606fee5e9492ec0628104',
        name: 'Motorhead',
        address: 'Hammersmith',
        description: 'Lemmy, Phil, Eddie',
        createdAt: '2020-04-02T15:38:38.459Z',
        user: '5e8c47909b8eb6322478e04a',
      },
      {
        genres: ['Rock'],
        _id: '5e860748e5e9492ec0628106',
        name: 'AC DC',
        address: 'Sydney',
        description: 'Bon is God',
        createdAt: '2020-04-02T15:39:52.376Z',
        user: '5e8c47909b8eb6322478e04a',
      },
      {
        genres: ['Rock', 'Pop', 'Folk', 'Other'],
        _id: '5e86cbd3640699334483bc5d',
        name: 'Loup Garou',
        address: 'Katerini',
        description: 'Lalalalo',
        createdAt: '2020-04-03T05:38:27.723Z',
        user: '5e8c47909b8eb6322478e04a',
      },
      {
        genres: ['Folk', 'Rock', 'Other'],
        _id: '5e874b7309cde04f347b0ae2',
        name: 'Booter Camper',
        address: '220 Pawtucket St, Lowell, MA 01854',
        description: 'Got a valid address',
        createdAt: '2020-04-03T14:42:59.377Z',
        slug: 'loup-graou',
        user: '5e8c47909b8eb6322478e04a',
      },
    ],
  });

  return (
    <ul>
      {data.bands.map((band) => (
        <li key={band._id}>
          <a href={band.url}>{band.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Bandlist;
