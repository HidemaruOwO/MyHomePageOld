import type {NextPage} from "next";
import Image from "next/image";
import {useState} from "react";
import {Container, Row, Button} from "react-bootstrap";
import styles from "../styles/Home.module.css";
import HeadInfo from "../components/Head";
import ItemUrl from "../components/ItemUrl";
import appList from "../data/appList";

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
        {
            message: "無限の可能性",
            message2: "　溢れ出る想像力",
            image: "/image/background/minecraft.jpg",
            page: "/minecraft"
        },
        {
            message: "有益な情報",
            message2: "　ひでまるぶろぐ",
            image: "/image/background/laptopPcOnDesk.jpeg",
            page: "https://blog.hide0.net"
        },
        {
            message: "革新的で",
            message2: "　便利なウェブアプリ",
            image: "/image/background/future.jpeg",
            page: "/app"
        }
    ];
    var topPageItemsNumber: number = 0;
    const [topPage, setTopPage] = useState<TopPage>(topPageItems[0]);
    const redoTopPageItem = () => {
        topPageItemsNumber++;
        if (topPageItemsNumber == topPageItems.length) {
            topPageItemsNumber = 0;
        }
        setTopPage(topPageItems[topPageItemsNumber]);
        console.log(topPageItemsNumber + "|" + topPageItems.length);
    }
    //setInterval(redoTopPageItem,4000);
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
                <Row id={"aboutSite"} className={styles.row}>
                    <h2>このサイトについて</h2>
                    <p>このサイトは一人の学生が便利なソフトや有益な情報を多くの人に知ってもらいたいという思いを込めて作られたサイトです。<br/>
                        日が経つ度にサイトは更新されるので、定期的に確認してもらうと嬉しいです。</p>
                    <img src={"/image/ogp/index.png"} alt={"このサイトの紹介"}/>
                </Row>
                <Row className={styles.row}>
                    <h2>New App</h2>
                    <p>「あったらいいな」を実現するウェブアプリをご利用ください!</p>
                    <ItemUrl title={appList[0].title} description={appList[0].description} image={appList[0].image}
                             url={appList[0].url}/>
                    <ItemUrl title={appList[1].title} description={appList[1].description} image={appList[1].image}
                             url={appList[1].url}/>
                    <ItemUrl title={appList[2].title} description={appList[2].description} image={appList[2].image}
                             url={appList[2].url}/>
                    <Button variant="primary" href={"/app"}>More App</Button>
                </Row>
            </Container>
        </>
    );
};

export default Home;
