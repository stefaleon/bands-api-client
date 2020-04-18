import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bandlist = () => {
  const [data, setData] = useState({ bands: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/api/bands');
      console.log(result.data.data);
      setData({ bands: result.data.data });
    };
    fetchData();
  }, []);

  return (
    <ul>
      {data.bands.map((band) => (
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
  );
};

export default Bandlist;
