import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
function Book() {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81uds3w9VuL._AC_UL900_SR900,600_.jpg"
    alt="Just Eat: More Than 100 Easy and Delicious Recipes That Taste Just Like Home"
  />
);
const Title = () => <h2>Just Eat: More Than 100 Easy and Delicious Recipes That Taste Just Like Home</h2>
const Author = () => <h4> Jessie James Decker</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
