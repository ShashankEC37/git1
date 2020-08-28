import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/ShakuntalaDevi/1500x600_Hero-Tall_np._CB409743115_.jpg"
        alt="bg img"
      />
      <div className="home__row">
        <Product
          id="1234"
          title=" Mi Airdots Bluetooth 5.0 Earphone"
          price={2000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51C%2B-Fb1oYL._SL1140_.jpg"
        />

        <Product
          id="1234"
          title=" Mi Airdots Bluetooth 5.0 Earphone"
          price={2000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51C%2B-Fb1oYL._SL1140_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1234"
          title=" Mi Airdots Bluetooth 5.0 Earphone"
          price={2000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51C%2B-Fb1oYL._SL1140_.jpg"
        />

        <Product
          id="1234"
          title=" Mi Airdots Bluetooth 5.0 Earphone"
          price={2000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51C%2B-Fb1oYL._SL1140_.jpg"
        />

        <Product
          id="1234"
          title=" Mi Airdots Bluetooth 5.0 Earphone"
          price={2000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51C%2B-Fb1oYL._SL1140_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1234"
          title=" Mi Airdots Bluetooth 5.0 Earphone"
          price={2000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51C%2B-Fb1oYL._SL1140_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
