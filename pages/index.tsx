import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import HeadInfo from "../components/Head";
import ItemUrl from "../components/ItemUrl";
import MyProfile from "../components/MyProfile";
import appList from "../data/appList.json";
import topPageItems from "../data/topPageItem.json";
import { getWindowSize } from "../hooks/getWindowSize";

type TopPage = {
  message: string;
  message2: string;
  image: string;
  page: string;
};

const Home: NextPage = () => {
  const { height, width } = getWindowSize();
  var hidemalTwitter;
  var topPageItemsNumber: number = 0;
  const [topPage, setTopPage] = useState<TopPage>(topPageItems[0]);
  const [reAnim, setReAnim] = useState({
    opacitySix: styles.fullImage,
    flowing: styles.shortMessage,
  });
  useEffect(() => {
    const topImageAnim = setInterval(() => {
      topPageItemsNumber++;
      if (topPageItemsNumber == topPageItems.length) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        topPageItemsNumber = 0;
      }
      setTopPage(topPageItems[topPageItemsNumber]);
      setReAnim(() => {
        return {
          opacitySix: "",
          flowing: "",
        };
      });
      setTimeout(() => {
        setReAnim(() => {
          return {
            opacitySix: styles.fullImage,
            flowing: styles.shortMessage,
          };
        });
      }, 0);
    }, 4500);
    return () => clearInterval(topImageAnim);
  }, []);

  if (600 < width) {
    hidemalTwitter = (
      <Col>
        <div
          className={"overflow-auto p-3 mb-3 mb-md-0 mr-md-3 bg-light"}
          style={{ height: "442.2px" }}
        >
          <a
            className="twitter-timeline"
            href="https://twitter.com/Hidemal_OwO?ref_src=twsrc%5Etfw"
          >
            Tweets by Hidemal_OwO
          </a>
        </div>
      </Col>
    );
  }
  return (
    <>
      <HeadInfo
        title="ホーム"
        description="一学生がプログラミングをして提供する有用な記事と便利なソフトを集めたひでまるの公式サイト"
        dir="/"
        image="/image/ogp/index.png"
      />
      <Image
        src={topPage.image}
        className={reAnim.opacitySix + " " + "fullImage"}
        alt={"BackImage"}
      />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src={"/js/changeSize.js"} />
      <div className={styles.el_box}>
        <div className={reAnim.flowing}>
          <h2>
            {topPage.message}
            <br />
            {topPage.message2}
          </h2>
          <hr />
        </div>
        <Link href={topPage.page} passHref>
          <div className={styles.aboutContainer}>
            <h4>About</h4>
          </div>
        </Link>
      </div>
      ß
      <Container className={styles.container}>
        <Row id={"aboutSite"} className={styles.row}>
          <h2>このサイトについて</h2>
          <p>
            このサイトは一人の学生が便利なソフトや有益な情報を多くの人に知ってもらいたいという思いを込めて作られたサイトです。
            <br />
            日が経つ度にサイトは更新されるので、定期的に確認してもらうと嬉しいです。
          </p>
          <Image src={"/image/ogp/index.png"} alt={"このサイトの紹介"} />
        </Row>
        <Row className={styles.row}>
          <h2>New App</h2>
          <p>「あったらいいな」を実現するウェブアプリをご利用ください!</p>
          {[0, 1, 2].map((i: number, index) => (
            // eslint-disable-next-line react/jsx-key
            <ItemUrl
              title={appList[i].title}
              description={appList[i].description}
              image={appList[i].image}
              url={appList[i].url}
              key={index}
            />
          ))}

          <Button variant="primary" href={"/app"}>
            More App
          </Button>
        </Row>
        <Row className={styles.row}>
          <h2>New Blog</h2>
          <p>正しいかつ価値のある情報を分かりやすくまとめます</p>
          <Button variant="primary" href={"https:/blog.hide0.net"}>
            More Blog
          </Button>
        </Row>
        <Row className={styles.row}>
          <h2>自己紹介</h2>
          <Col>
            <MyProfile />
          </Col>
          {hidemalTwitter}
        </Row>
      </Container>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src={"/js/antiDrag.js"} />
    </>
  );
};

export default Home;
