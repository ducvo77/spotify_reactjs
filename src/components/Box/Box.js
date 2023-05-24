import Button from "../Button/Button";
import "./Box.scss";

function Box() {
  return (
    <div className="container-box">
      <h4>Thưởng thức thư viện</h4>
      <p>
        Đăng nhập để xem các bài hát, podcast, nghệ sĩ và playlist đã lưu trong
        Thư viện.
      </p>
      <div className="button-box">
        <Button className="buttonNormal">
          <span>Để sau</span>
        </Button>
        <Button className="buttonNormal buttonPrimary">
          <span>Đăng nhập</span>
        </Button>
      </div>
    </div>
  );
}

export default Box;
