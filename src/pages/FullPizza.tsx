import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://680e19cdc47cb8074d92198d.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Error while receiving pizza data!");
        navigate("/");
      }
    }
    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <>
      {pizza && (
        <div>
          <img src={pizza.imageUrl} alt="" />
          <h2>{pizza.title}</h2>
          <h4>{pizza.price} ₽</h4>
        </div>
      )}
    </>
  );
};

export default FullPizza;
