import type {NextPage} from "next";
import Image from "next/image";
import {useState} from "react";
import {Container, Row} from "react-bootstrap";
import styles from "../styles/Home.module.css";
import HeadInfo from "../components/Head";

type TopPage = {
    message: string;
    message2: string;
    image: string;
    page: string;
}
const Home: NextPage = () => {
    const topPageItems = [
        {
            message: "豊かな生活",
            message2: "　楽しく過ごそう",
            image: "/image/background/niwa.jpeg",
            page: "/#aboutSite"
        },
    ];
    let topPageItemsNumber:number = 0;
    const [topPage, setTopPage] = useState<TopPage>(topPageItems[topPageItemsNumber]);
    const redoTopPageItem = () => {
        topPageItemsNumber++;
        if (topPageItemsNumber>topPageItems.length) {
            topPageItemsNumber = 0;
        }
        setTopPage(topPageItems[topPageItemsNumber]);
    }
    setInterval(redoTopPageItem,4000);
    return (
        <>
            <HeadInfo title="ホーム" description="一学生がプログラミングをして提供する有用な記事と便利なソフトを集めたひでまるの公式サイト" dir="/"
                      image="/image/ogp/index.png"/>
            <img src={topPage.image} className="fullImage" alt={"BackImage"}/>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src={"/js/changeSize.js"}/>
            <div className={styles.el_box}>
                <div className={styles.shortMessage}>
                    <h2>{topPage.message}<br/>{topPage.message2}</h2>
                    <hr/>
                </div>
                <a href={topPage.page}>
                    <div className={styles.aboutContainer}>
                        <h4>About</h4>
                    </div>
                </a>
            </div>
            <Container className={styles.container}>
                <Row id={"aboutSite"}>
                    <h2>このサイトについて</h2>
                    <p>このサイトは一人の学生が便利なソフトや有益な情報を多くの人に知ってもらいたいという思いを込めて作られたサイトです。<br/>
                        日が経つ度にサイトは更新されるので、定期的に確認してもらうと嬉しいです。</p>
                    <img src={"/image/ogp/index.png"} alt={"このサイトの紹介"}/>
                </Row>
            </Container>
        </>
    );
};

export default Home;
