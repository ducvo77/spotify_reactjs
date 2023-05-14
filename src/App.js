import { useEffect } from "react";
import * as apis from "./apis";

function App() {
  useEffect(() => {
    const fetchDataAlbum = async () => {
      const res = await apis.getAlbum();
      console.log(res);
    };
    fetchDataAlbum();
  }, []);

  return <div className="App">Hello</div>;
}

export default App;
