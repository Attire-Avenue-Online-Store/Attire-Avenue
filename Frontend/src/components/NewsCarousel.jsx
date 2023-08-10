import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import MessageBox from './MessageBox';
import LoadingBox from './LoadingBox';
import axios from 'axios';

const NewsCarousel = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        setError('An error occurred while fetching data.');
        setIsLoading(false);
      }
    };

    fetchTopProducts();
  }, []);

  // const TopProducts = ()=>{
  //   product =
  // }

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-4">
      {/* {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))} */}

      <Carousel.Item>
        <Link to="/new-sales-url">
          <Image
            src="/images/attireavenuebanner1.jpg"
            alt="New Product"
            fluid
          />
          <Carousel.Caption className="carousel-caption">
            <h2>New Product Title ($XX.XX)</h2>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/new-product-url">
          <Image
            src="/images/attireavenuebanner2.jpg"
            alt="New Product"
            fluid
          />
          <Carousel.Caption className="carousel-caption">
            <h2>New Product Title ($XX.XX)</h2>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default NewsCarousel;
