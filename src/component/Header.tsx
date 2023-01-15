import React, {useContext} from "react";
import {Col, Row, Typography} from "antd";
import "./Header.css"
import {LeftOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import SeatContext from "../common/SeatContext";

const Header: React.FC = () => {

  const navigate = useNavigate();
  const {seatId} = useContext(SeatContext);
  const {Text} = Typography;

  const backOnClick = () => {
    navigate("/");
  }

  console.log("rerender")

  return (
      <Row className={"header-row"}>
        <Col span={2} onClick={backOnClick}>
          <LeftOutlined className={"header-back"}/>
        </Col>
        <Col span={20}>
          <Text>
            {seatId}
          </Text>
        </Col>
      </Row>
  )
}

export default Header;