import {Col, Row} from "antd";
import React from "react";

type Props ={
  className:string,
  children?: React.ReactNode
};

const CenteredContent:React.FC<Props> = ({className, children})=>{
  return (
      <Row className={className}>
        <Col span={24}>
          {children}
        </Col>
      </Row>
  )
}

export default CenteredContent;