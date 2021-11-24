import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="box a">USERID</div>
          <div className="box b">POSTS</div>
          {data.length > 0 &&
            data.map((item) => (
              <>
                <div className="box a">{item.userId}</div>
                <div className="box b">{item.body}</div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
