import {Card} from "react-bootstrap";
import styles from "../styles/ItemUrl.module.css";

type ItemProps = {
    title: string;
    description: string;
    image: string;
    url: string;
}
const ItemUrl = ({title, description, image, url}: ItemProps) => {
    return (
        <>

            <Card style={{width: '18rem'}} className={styles.nolineCenter}>
                <a href={url}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </a>
            </Card>
        </>
    );
}

export default ItemUrl;