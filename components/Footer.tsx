import styles from "../styles/Footer.module.css";
import appList from "../data/appList.json";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <Row>
          <Col>
            <h1>
              <a href={"/"}>ホーム</a>
            </h1>
            <h1>
              <a href={"/service"}>サービス</a>
            </h1>
            <h1>
              <a href={"/policypolicy"}>プライバシーポリシー</a>
            </h1>
            <h1>
              <a href={"/profile"}>投稿者プロフィール</a>
            </h1>
            <h1>
              <a href={"/form"}>お問い合わせ</a>
            </h1>
          </Col>
          <Col>
            <h1>
              <a href={"/app"}>アプリ</a>
            </h1>
            <Row>
              <Col>
                {[0, 1, 2, 3, 4].map((i: number, index) => {
                  // eslint-disable-next-line react/jsx-key
                  return (
                    <h2 key={index}>
                      <a href={appList[i].url}>{appList[i].title}</a>
                    </h2>
                  );
                })}
              </Col>
              <Col>
                {[5, 6, 7, 8, 9].map((i: number, index) => {
                  // eslint-disable-next-line react/jsx-key
                  return (
                    <h2 key={index}>
                      <a href={appList[i].url}>{appList[i].title}</a>
                    </h2>
                  );
                })}
              </Col>
            </Row>
          </Col>
          <Col>
            <h1>
              <a href={"/blog"}>ブログ</a>
            </h1>
          </Col>
          <div className={styles.copy_light}>
            <small>© 2022 HIDEMAL inc.</small>
          </div>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
