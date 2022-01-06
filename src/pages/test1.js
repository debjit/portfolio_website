import react, { useState } from "react";



const FetchData = () => {
  const [data, setData] = useState([]);

  const getApiData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);       
        setData(json);
        console.log(data);
      });
  }

  return (
    <div>
      <button onClick={getApiData}>Fetch API Data</button>
      <br />
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.userId} | {item.title}
            </li>
          ))
          }
        </ul>
      </div>

    </div>
  )

}
export default FetchData;