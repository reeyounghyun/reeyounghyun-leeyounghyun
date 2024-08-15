import React, { useEffect, useState } from 'react';
function Project() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/path/to/data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.imgUrl} alt={item.title} />
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Project;
