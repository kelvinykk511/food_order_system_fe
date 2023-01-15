import React, {useCallback, useContext, useEffect} from "react";
import {Image, Spin, Typography} from "antd";
import "./Home.css"
import useFetch from "../../hooks/useFetch";
import CenteredContent from "../../component/CenteredContent";
import {useNavigate} from "react-router-dom";
import SeatContext from "../../common/SeatContext";

const {Text} = Typography;

const Home: React.FC = () => {

  const {setSeatId} = useContext(SeatContext);
  const IMAGE_WIDTH = "25vh";
  const {result, error, isLoading} = useFetch("home-test");

  useEffect(()=>{
    setSeatId(result?.seatId);
  }, [result])

  console.log("seatId");
  const navigate = useNavigate();

  const buttonOnClick = useCallback(() => {
    navigate("/dishes");
  },[])

  return (
      <div className={"home-page-container"}>
        {isLoading ?
            <Spin tip="Loading" size="large" className={"home-page-loading"}/>:
            <>
              <CenteredContent className={"home-page-image-row"}>
                <Image
                    height={IMAGE_WIDTH}
                    src={result?.imageUrl}
                />
              </CenteredContent>

              <CenteredContent className={'home-page-name-row'}>
                <Text className={"home-page-name"}>
                  {result?.restaurantName}
                </Text>
              </CenteredContent>

              <CenteredContent className={'home-page-table-row'}>
                <Text className={"home-page-table"}>
                  Table:
                </Text>
                <br/>
                <Text className={"home-page-table"}>
                  {result?.seatId}
                </Text>
              </CenteredContent>

              <CenteredContent className={"home-page-proceed-button-row"}>
                <Text className={"home-page-proceed-button"} onClick={buttonOnClick}>
                  Press to Order Food
                </Text>
              </CenteredContent>
            </>
        }
      </div>
  )
}

export default Home;