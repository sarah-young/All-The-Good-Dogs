import React, { Component } from 'react';
import axios from 'axios';

//Main App Component
 class App extends React.Component {
  render() {
    const breedlist = this.props.breedlist
    return (
      <div className="app">
        <h2 className="app-title">Dog Breed Selector 🐶</h2>
        <DoggoPicture image="default-photo.jpg"/>
        <DoggoBreed />
        <BreedList />
      </div>
    );
  }
}

//Image Component
//Start off with default props
//Picture of a pawprint
class DoggoPicture extends React.Component {
  render() {
    const image = this.props.image;
    return (
      <img src={image} className="doggo-image">
    );
  }
}

class DoggoBreed extends React.Component {
  render() {
    const name = this.props.breed;
    return (
      <div className="doggo-name">{name}</div>
    );
  }
}

class Breed extends React.Component {
  render() {

  }
}

//Breed List Component
class BreedList extends React.Component {
  render() {
    const rows = [];
    let lastBreed = null;

    this.props.breedlist.forEach((breed) => {
        rows.push(
          <BreedRow
          breed={breedlist.breed}
          key={breedlist.breed} />
        );
      }
    }
    return (
      <ul className="dog-breed-list">

      </ul>;
    );
  }

//
class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
VIEW COMPILED VIEW RESOURCES 1×
0.5×
0.25×
 RERUN
