import React from "react";
import Header from "../../component/header/Header";
import {Tabs} from "antd";
import useFetch from "../../hooks/useFetch";
import DishDetails from "../../component/dishDetail/DishDetails";


type Categories = {
    categoryName: string,
    categoryData: DishesType[]
}

export type DishesType = {
    dish: string,
    price: number,
    imgUrl: string,
}
const Dishes: React.FC = () => {

    const {result, error, isLoading} = useFetch("dishes-test");
    console.log(result?.data[0].categoryName)

    return (
        <>
            <Header/>
            <Tabs
                defaultActiveKey="1"
                tabPosition={"left"}
                style={{left:20, height: "95vh"}}
                items={result?.data.map((c: Categories) => {
                    console.log(c);
                    return {
                        label: c.categoryName,
                        key: c.categoryName,
                        // disabled: i === 28,
                        children: c.categoryData.map((d:DishesType)=> {
                            return <DishDetails dish={d}/>
                        })
                    };
                })}
            />
        </>
    )
}

export default Dishes;