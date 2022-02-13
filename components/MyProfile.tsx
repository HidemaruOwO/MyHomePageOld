import {Card} from "react-bootstrap";
import styles from "../styles/Sns.module.css";

const MyProfile = () => {
    return (
        <>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="/image/slime_squre_icon.png"/>
                <Card.Body>
                    <Card.Title>ひでまる</Card.Title>
                    <Card.Text>
                        プログラミングや数学、ガジェットが好きな中学一年生
                        <ul className={styles.follow_me}>
                            <li><a href="https://twitter.com/Hidemal_OwO"/></li>
                            <li><a href="https://github.com/HidemaruOwO"/></li>
                            <li><a href="https://www.youtube.com/channel/UCm_uhOgGNCv1Sv-PxP952Eg"/></li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default MyProfile;