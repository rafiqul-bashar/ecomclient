import React from "react";
import { useNavigate } from "react-router-dom";
import jewelery from "../../assets/jwellery.webp";
import electronic from "../../assets/electronic2.png";
import men from "../../assets/menCategory.png";
import women from "../../assets/women2.png";

export default function HomeCategories() {
  const navigate = useNavigate();
  const categories = [
    { title: "jewelery", img: jewelery },
    { title: "electronic", img: electronic },
    { title: "men's clothing", img: men },
    { title: "women's clothing", img: women },
  ];
  return (
    <section className=" container py-12">
      <h1 className="top_products_title  text-center mb-6">
        Explore Categories{" "}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-3">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => navigate(`/products`, { state: { category } })}
            className="home_category_link group  group"
          >
            <div className=" absolute h-60 w-60 ">
              <img
                src={category?.img}
                alt={category?.title}
                className="w-full h-full object-fit opacity-20 md:opacity-100 group-hover:opacity-20 duration-200"
              />
            </div>
            <h1 className="home_category_link_text capitalize transition-all duration-400 z-30 md:opacity-0 group-hover:opacity-100">
              {category.title}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
