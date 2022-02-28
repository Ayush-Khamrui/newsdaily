import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "7e76f00001c64ae18ba3cea310aca8a4";
  const country = "in";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};