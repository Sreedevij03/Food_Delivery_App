import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log("foodCat", foodCat);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="conatiner">
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.categorName}
                </div>

                <hr />
                {foodItem !== [] ? (
                  foodItem
                    .filter((item) => item.categorName === data.categorName)
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 cod-md-6 col-lg-3"
                        >
                          {" "}
                          <Card
                            foodName={filterItems.name}
                            options={filterItems.options}
                            imgSrc={filterItems.img}
                          ></Card>
                        </div>
                      );
                    })
                ) : (
                  <div>No Such Data Found </div>
                )}
              </div>
            );
          })
        ) : (
          <div> </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
