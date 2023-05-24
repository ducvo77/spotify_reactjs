import { useEffect } from "react";
import "./Home.scss";
import * as apis from "../../apis";

function Home() {
  useEffect(() => {
    const fetchDataHome = async () => {
      let res = await apis.getAlbum();
      console.log(res);
    };
    fetchDataHome();
  }, []);
  return <div className="container-home">Home</div>;
}

export default Home;
