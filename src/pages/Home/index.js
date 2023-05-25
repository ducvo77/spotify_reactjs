import { useEffect, useState } from "react";
import "./Home.scss";
import * as apis from "../../apis";
import { BsPlayFill } from "../../icon";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataHome = async () => {
      let res = await apis.getAlbum();
      setData(res);
      console.log(res);
    };
    fetchDataHome();
  }, []);

  return (
    <div className="container-home">
      {data?.categories.items.map((item, index) => (
        <div key={index} className="section">
          <div className="section-header">
            <a href="/" className="title-section">
              {item.name}
            </a>
            <a href="/">Hiện tất cả</a>
          </div>
          <div className="section-main">
            <div className="block-item">
              <div className="container-item">
                <div className="thumnail">
                  <img
                    src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                    alt=""
                  />
                  <div className="icon">
                    <div className="bg-circle">
                      <BsPlayFill />
                    </div>
                  </div>
                </div>
                <h4 className="title-item">Peaceful Piano</h4>
                <p className="description">
                  Đây là phần description cho bài hátĐây là phần description cho
                  bài hátĐây là phần description cho bài hátĐây là phần
                  description cho bài hátĐây là phần description cho bài hát
                </p>
              </div>
            </div>
            <div className="block-item">
              <div className="container-item">
                <div className="thumnail">
                  <img
                    src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                    alt=""
                  />
                  <div className="icon">
                    <div className="bg-circle">
                      <BsPlayFill />
                    </div>
                  </div>
                </div>
                <h4 className="title-item">Peaceful Piano</h4>
                <p className="description">
                  Đây là phần description cho bài hátĐây là phần description cho
                  bài hátĐây là phần description cho bài hátĐây là phần
                  description cho bài hátĐây là phần description cho bài hát
                </p>
              </div>
            </div>
            <div className="block-item">
              <div className="container-item">
                <div className="thumnail">
                  <img
                    src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                    alt=""
                  />
                  <div className="icon">
                    <div className="bg-circle">
                      <BsPlayFill />
                    </div>
                  </div>
                </div>
                <h4 className="title-item">Peaceful Piano</h4>
                <p className="description">
                  Đây là phần description cho bài hátĐây là phần description cho
                  bài hátĐây là phần description cho bài hátĐây là phần
                  description cho bài hátĐây là phần description cho bài hát
                </p>
              </div>
            </div>
            <div className="block-item">
              <div className="container-item">
                <div className="thumnail">
                  <img
                    src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                    alt=""
                  />
                  <div className="icon">
                    <div className="bg-circle">
                      <BsPlayFill />
                    </div>
                  </div>
                </div>
                <h4 className="title-item">Peaceful Piano</h4>
                <p className="description">
                  Đây là phần description cho bài hátĐây là phần description cho
                  bài hátĐây là phần description cho bài hátĐây là phần
                  description cho bài hátĐây là phần description cho bài hát
                </p>
              </div>
            </div>
            <div className="block-item">
              <div className="container-item">
                <div className="thumnail">
                  <img
                    src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                    alt=""
                  />
                  <div className="icon">
                    <div className="bg-circle">
                      <BsPlayFill />
                    </div>
                  </div>
                </div>
                <h4 className="title-item">Peaceful Piano</h4>
                <p className="description">
                  Đây là phần description cho bài hátĐây là phần description cho
                  bài hátĐây là phần description cho bài hátĐây là phần
                  description cho bài hátĐây là phần description cho bài hát
                </p>
              </div>
            </div>
            <div className="block-item">
              <div className="container-item">
                <div className="thumnail">
                  <img
                    src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                    alt=""
                  />
                  <div className="icon">
                    <div className="bg-circle">
                      <BsPlayFill />
                    </div>
                  </div>
                </div>
                <h4 className="title-item">Peaceful Piano</h4>
                <p className="description">
                  Đây là phần description cho bài hátĐây là phần description cho
                  bài hátĐây là phần description cho bài hátĐây là phần
                  description cho bài hátĐây là phần description cho bài hát
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
