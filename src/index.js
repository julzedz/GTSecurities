import React from 'react';
import ReactDOM from 'react-dom/client';

const Booklist = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  )
}
function Book() {
  return (
    <>
      <Title />
      <Author />
      <Image />
    </>
  );
}

const Title = () => <h2> Book</h2>
const Author = () => <h4> Jon Dough</h4>
const Image = () => {
  return <p>Hello World</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);
