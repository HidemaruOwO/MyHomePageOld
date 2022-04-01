import type {NextPage} from "next";
import {Container, Row, Col, Button} from "react-bootstrap";

import HeadInfo from "../../components/Head";
import appList from "../../data/appList.json";
import ItemUrl from "../../components/ItemUrl";
import {useState} from "react";

const App: NextPage = () => {
    const [itemNumber, setItemNumber] = useState<number[]>([...Array(12)].map((_, i) => i));
    const onClickMore = () => {
        setItemNumber([...Array(appList.length)].map((_, i) => i));
    };
    return (
        <>
            <HeadInfo title={"Slim App"} description={"無料で使える便利なウェブアプリ"} dir={"app"} image={"/image/ogp/SlimApp.png"}/>
            <div className={"headerBlock"}/>
            <Container>
                <Row>
                    <h2 className={"heading"}>AppList</h2>
                    <p>気になったアプリを選択してください</p>
                    {
                        itemNumber.map((i: number, index: number) => (
                            <Col key={index} style={{padding: "3px"}}>
                                <ItemUrl
                                    title={appList[i].title}
                                    description={appList[i].description}
                                    image={appList[i].image}
                                    url={appList[i].url}
                                />
                            </Col>
                        ))
                    }
                    <Button variant="outline-primary" onClick={onClickMore}>More</Button>
                </Row>
            </Container>
        </>
    );
};

export default App;
