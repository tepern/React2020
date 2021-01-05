import React, { Component } from 'react';
import { ThemeContext } from '../../theme-context/ThemeContext';

import Product from '../Products/Product';

import img1 from '../../assets/images/products/1.png';
import img2 from '../../assets/images/products/2.png';
import img3 from '../../assets/images/products/3.png';
import img4 from '../../assets/images/products/4.png';
import img5 from '../../assets/images/products/5.png';
import img6 from '../../assets/images/products/6.png';
import img7 from '../../assets/images/products/7.png';
import img8 from '../../assets/images/products/8.png';
import img9 from '../../assets/images/products/9.png';
import img10 from '../../assets/images/products/10.png';

const products = [ { No: '1', SKU: "327038", name: 'Tommy Hilfiger Blue Ion Plated Ladies Watch', price: '67', oldPrice: '88', discount: '22%', description: 'Tick tock. You’ll never wonder what time it is again when you browse through all watches, including designer brands like Gucci, Daniel Wellington. From stainless steel and ceram...', vendor: 'Emporio Armani', type: 'Diving', barcode: '555-6322-1', weight: '32.6 kg', tags: [ 'Activity' ], Collections: ['Ladies','Sale'], img: img1, images: ['1.1.png','1.2.png','1.3.png','1.4.png','1.5.png'], reviews: [] },
{ No: '2',SKU: "327038", name: 'Olivia Burton Glasshouse Rose Gold Plated Mesh Ladies Watch', price: '20', oldPrice: '22', discount: '9%', description: 'Our vast range of sports watches includes popular brands, such as Casio, G-Shock and Citizen, all packed with the special features any budding sportsman could need. If it’s vers... ', vendor: 'Gucci', type: 'Diving', barcode: '555-6322-1', weight: '32.6 kg', tags: [ 'Activity' ], Collections: ['Accessories', 'Kids’','Ladies','Luxury','Sale','Sport'], img: img2, images: ['2.1.png','2.2.png','2.3.png','2.4.png','2.5.png'], reviews: [] },
{ No: '3',SKU: "-", name: 'Gucci G Timeless Gold Plated Leather Watch', price: '17', oldPrice: '19', discount: '10%', description: 'Solar watches are another option for those who want to energize their watch collection. Powered by a solar panel, these watches are environmentally friendly and ideal for the se...  ', vendor: 'Vivienne Westwood', type: 'Men’s', barcode: '-', weight: ' 11.0 lb', tags: [ 'Bracelet' ], Collections: ['Accessories', 'Men’s','Unisex','Luxury','Sale','Sport','Vintage'], img: img3, images: ['3.1.png','3.2.png','3.3.png','3.4.png','3.5.png'], reviews: [] },
{ No: '4',SKU: "327AE-6", name: 'Tissot Lepine Rose Gold Tone Mechanical Pocket Watch', price: '100', oldPrice: '', discount: '', description: 'Solar watches are another option for those who want to energize their watch collection. Powered by a solar panel, these watches are environmentally friendly and ideal for the se...  ', vendor: 'Vivienne Westwood', type: 'Vintage', barcode: '327038522', weight: '-', tags: [ ' Chronograph' ], Collections: ['Kids’','Ladies','Sale'], img: img4, images: ['4.1.png','4.2.png','4.3.png','4.4.png','4.5.png'], reviews: [] },
{ No: '5',SKU: "-", name: 'Loewe Gold Blue Round Sunglasses', price: '28', oldPrice: '29', discount: '3%', description: 'Tick tock. You’ll never wonder what time it is again when you browse through all watches, including designer brands like Gucci, Daniel Wellington. From stainless steel and ceram...', vendor: 'Michael Kors', type: 'Men’s', barcode: '-', weight: '  11.0 lb', tags: [ 'Bracelet' ], Collections: ['Accessories','Kids’','Ladies','Luxury','Men’s','Sale','Sport','Unisex','Vintage'], img: img5, images: ['5.1.png','5.2.png','5.3.png','5.4.png','5.5.png'], reviews: [] },
{ No: '6',SKU: "-", name: 'Michael Kors Dylan Rose Gold Tone Chronograph Mens Watch', price: '40', oldPrice: '44', discount: '9%', description: 'Our vast range of sports watches includes popular brands, such as Casio, G-Shock and Citizen, all packed with the special features any budding sportsman could need. If it’s vers... ', vendor: 'Michael Kors', type: 'Men’s', barcode: '-', weight: '  11.0 lb', tags: [ 'Bracelet' ], Collections: ['Accessories','Kids’','Ladies','Luxury','Men’s','Sale','Sport','Unisex','Vintage'], img: img6, images: ['6.1.png','6.2.png','6.3.png','6.4.png','6.5.png'], reviews: [] },
{ No: '7',SKU: "327038", name: 'Hugo Boss Grand Prix Black Ion Plated Chronograph Mens Watch', price: '34', oldPrice: '36', discount: '5%', description: 'Solar watches are another option for those who want to energize their watch collection. Powered by a solar panel, these watches are environmentally friendly and ideal for the se...', vendor: 'Hugo Boss', type: 'Diving', barcode: '555-6322-1', weight: '32.6 kg', tags: [ 'Activity' ], Collections: ['Accessories','Kids’','Ladies','Luxury','Men’s','Sale','Sport','Unisex','Vintage'], img: img7, images: ['7.1.png','7.2.png','7.3.png','7.4.png','7.5.png'], reviews: [] },
{ No: '8',SKU: "327AE-6", name: 'Gucci Plexiglass Fashion Ladies Watch', price: '80', oldPrice: '', discount: '', description: 'Our vast range of sports watches includes popular brands, such as Casio, G-Shock and Citizen, all packed with the special features any budding sportsman could need. If it’s vers... ', vendor: 'Gucci', type: 'Vintage', barcode: '327038522', weight: '-', tags: [ 'Chronograph' ], Collections: ['Accessories','Kids’','Luxury','Men’s','Sale','Sport','Unisex','Vintage'], img: img8, images: ['7.8.png','7.8.png','7.8.png','7.8.png','7.8.png'], reviews: [] },
{ No: '9',SKU: "327038", name: 'Emporio Armani Rose Gold Tone Mens Watch', price: '80', oldPrice: '88', discount: '9%', description: 'Tick tock. You’ll never wonder what time it is again when you browse through all watches, including designer brands like Gucci, Daniel Wellington. From stainless steel and ceram... ', vendor: 'Emporio Armani', type: 'Diving', barcode: '555-6322-1', weight: '32.6 kg', tags: [ 'Activity' ], Collections: ['Accessories','Men’s','Sale','Sport','Unisex','Vintage'], img: img9, images: ['9.1.png','9.2.png','9.3.png','9.4.png','9.5.png'], reviews: [] },
{ No: '10',SKU: "327AE-6", name: 'Emporio Armani Mens Watch', price: '119', oldPrice: '', discount: '', description: 'Solar watches are another option for those who want to energize their watch collection. Powered by a solar panel, these watches are environmentally friendly and ideal for the se...', vendor: 'Emporio Armani', type: 'Vintage', barcode: '327038522', weight: '-', tags: [ 'Chronograph' ], Collections: ['Men’s','Sale','Unisex','Vintage'], img: img10, images: ['10.1.png','10.2.png','10.3.png','10.4.png','10.5.png'], reviews: [] }
];


export default class Catalog extends Component {
  
    

    render() {
      const collection = this.props.match.params.collection;
        return ( 
          <ThemeContext.Consumer>{(context) => {
            const theme = !context.lightTheme ? '' : ' lightmode'; 
            return (
              
              <section className={`section section_padding_top section_padding_bottom`+ theme}>
                  <div class="catalog-container">
                      <div class="product-title">Products</div>
                      <div class="product-slider">
                          <div class="product-list" id="products">
                              {products.map(function(item) { 
                                if(collection){
                                  if(item.Collections.includes(collection)) {
                                    return <Product name={item.name} price={item.price} img={item.img}></Product>
                                  }
                                } else {
                                  return <Product name={item.name} price={item.price} img={item.img}></Product>
                                }
                               } 
                              )}
                          </div>
                      </div>
                  </div>
              </section>
              );
            }}
          </ThemeContext.Consumer>
        )
    } 
}