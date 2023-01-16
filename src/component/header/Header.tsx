import React, {useCallback, useContext} from "react";
import {Col, Row, Typography} from "antd";
import "./Header.css"
import {FileDoneOutlined, LeftOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import SeatContext from "../../common/SeatContext";

const Header: React.FC = () => {

    const navigate = useNavigate();
    const {seatId} = useContext(SeatContext);
    const {Text} = Typography;

    console.log("Header rerender")

    const backOnClick = useCallback(() => {
        navigate("/");
    },[])

    const orderListOnClick = useCallback(() => {
        navigate("/order")
    },[])

    return (
        <Row className={"header-row"}>
            <Col span={2} onClick={backOnClick}>
                <LeftOutlined className={"header-back"}/>
            </Col>
            <Col span={20} className={"header-table"}>
                <Text>
                    {seatId}
                </Text>
            </Col>
            <Col span={2} onClick={orderListOnClick}>
                <FileDoneOutlined className={"header-order"}/>
            </Col>
        </Row>
    )
}

export default Header;