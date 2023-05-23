import "./Box.scss";

function Box() {
  return (
    <div className="container-box">
      <h4>Thưởng thức thư viện</h4>
      <p>
        Đăng nhập để xem các bài hát, podcast, nghệ sĩ và playlist đã lưu trong
        Thư viện.
      </p>
      <div>
        <button>Để sau</button>
        <button className="buttonPrimary">Đăng nhập</button>
      </div>
    </div>
  );
}

export default Box;
