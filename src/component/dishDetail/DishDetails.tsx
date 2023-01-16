import {DishesType} from "../../pages/dishes/Dishes";
import React from "react";
import {Card, Col, Image, Row} from "antd";

type Props = {
    dish:DishesType
}

const DishDetails:React.FC<Props> = (props:Props)=>{
    return (
        <Card style={{margin:5}}>
            <Row>
                <Col span={18}>
                    {props.dish.dish}
                </Col>
                <Col span={6}>
                    <Image src={props.dish.imgUrl}/>
                </Col>
            </Row>
        </Card>
    )
}

export default DishDetails;