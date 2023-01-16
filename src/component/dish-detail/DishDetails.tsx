import React from "react";
import {Col, Divider, Image, Row, Typography} from "antd";
import {DishesType} from "../../pages/dishes/Dishes";
import "./DishDetails.css"

type Props = {
  dish: DishesType
}

const {Text} = Typography;
const DishDetails: React.FC<Props> = (props: Props) => {
  return (
      <div className={"dish-detail-area"}>
        <Row>
          <Col span={18}>
              <Text strong style={{fontSize:"initial"}}>
                  {props.dish.dish}
              </Text>
            <br/>
            <Text style={{color:"#777777"}}>
              {props.dish.description}
            </Text>
            <br/>
              <Text>
                  HK$ {props.dish.price}
              </Text>
          </Col>
          <Col span={6}>
            <Image src={props.dish.imgUrl}/>
          </Col>
        </Row>
        <Divider className={"dish-detail-divider"}/>
      </div>
  )
}

export default DishDetails;