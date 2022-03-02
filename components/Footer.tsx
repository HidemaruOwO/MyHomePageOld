import styles from "../styles/Footer.module.css";
import appList from "../data/appList.json";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <Row>
          <Col>
            <h1>
              <Link href={"/"}>ホーム</Link>
            </h1>
            <h1>
              <Link href={"/service"}>サービス</Link>
            </h1>
            <h1>
              <Link href={"/policypolicy"}>プライバシーポリシー</Link>
            </h1>
            <h1>
              <Link href={"/profile"}>投稿者プロフィール</Link>
            </h1>
            <h1>
              <Link href={"/form"}>お問い合わせ</Link>
            </h1>
          </Col>
          <Col>
            <h1>
              <Link href={"/app"}>アプリ</Link>
            </h1>
            <Row>
              <Col>
                {[0, 1, 2, 3, 4].map((i: number, index) => {
                  // eslint-disable-next-line react/jsx-key
                  return (
                    <h2 key={index}>
                      <Link href={appList[i].url}>{appList[i].title}</Link>
                    </h2>
                  );
                })}
              </Col>
              <Col>
                {[5, 6, 7, 8, 9].map((i: number, index) => {
                  // eslint-disable-next-line react/jsx-key
                  return (
                    <h2 key={index}>
                      <Link href={appList[i].url}>{appList[i].title}</Link>
                    </h2>
                  );
                })}
              </Col>
            </Row>
          </Col>
          <Col>
            <h1>
              <Link href={"/blog"}>ブログ</Link>
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
