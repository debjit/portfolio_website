import { useState } from "react";

const FetchData = () => {
    const [data, setData] = useState('')
    fetch("https://dry-bird-b7f1.debjit.workers.dev/")
      .then((response) => response.json())
      .then((json) => {
        setData(json);       
      });
      return (
        <div>
        Name: {data.name}

        </div>
      )
    
}
export default FetchData;