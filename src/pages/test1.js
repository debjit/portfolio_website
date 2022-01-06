import { useState } from "react";



const FetchData = () => {
    const [data, setData] = useState('')

    function getApiData() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);       
            setData(json);
        });
    }
      
    const data2 = {
        name: 'debjit'
    };
      return (
        <div>
        Name: {data2.name}
        <button onClick={getApiData}>Fetch API Data</button>
        <br />
        <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.userId},{item.title}
            </li>
          ))}
        </ul>
      </div>

        </div>
      )
    
}
export default FetchData;