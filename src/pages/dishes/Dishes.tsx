import React from "react";
import Header from "../../component/header/Header";
import {Tabs} from "antd";
import useFetch from "../../hooks/useFetch";
import DishDetails from "../../component/dish-detail/DishDetails";


type Categories = {
  categoryName: string,
  categoryData: DishesType[]
}

export type DishesType = {
  dish: string,
  description: string,
  price: number,
  imgUrl: string,
}
const Dishes: React.FC = () => {

  const {result, error, isLoading} = useFetch("dishes-test");

  return (
      <>
        <Header/>
        <Tabs
            defaultActiveKey="1"
            tabPosition={"top"}
            centered={true}
            style={{height: "95vh"}}
            items={result?.data.map((c: Categories) => {
              console.log(c);
              return {
                label: c.categoryName,
                key: c.categoryName,
                // disabled: i === 28,
                children: c.categoryData.map((d: DishesType) => {
                  return <DishDetails dish={d}/>
                })
              };
            })}
        />
      </>
  )
}

export default Dishes;