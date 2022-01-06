import { useState } from "react";

const FetchData = () => {
    const [data, setData] = useState('')
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);       
      });
      
    const data2 = {
        name: 'debjit'
    };
      return (
        <div>
        Name: {data2.name}

        </div>
      )
    
}
export default FetchData;