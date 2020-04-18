import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/bands';
const apiUrlSortByName = 'http://localhost:5000/api/bands?sort=name';

const Bandlist = () => {
  const [bands, setBands] = useState([]);
  const [url, setUrl] = useState(apiUrl);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      console.log(result.data.data);
      setBands(result.data.data);
    };
    fetchData();
  }, [url]);

  const sortByName = () => {
    setUrl(apiUrlSortByName);
  };

  return (
    <Fragment>
      <button onClick={sortByName}>Sort by name</button>
      <ul>
        {bands.map((band) => (
          <li key={band.id}>
            <a
              href={`http://localhost:5000/uploads/${band.photo}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {band.name}
            </a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Bandlist;
