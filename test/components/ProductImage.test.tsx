import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';


describe('Pruebas en el componente ProductImage', () => {

  test('Debe de mostrar correctamete la url de la imagen', () => {

    const wrapper = renderer.create(
      <ProductImage img='https://imageToShow.com' />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });


  test('Debe de mostrar el componente con la imagen del producto', () => {

    const wrapper = renderer.create(
      <ProductCard product={product2} >
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});