import React, { Component } from 'react';
import ban_1 from '../../assets/images/banners/ban_1.jpg';
import ban_2 from '../../assets/images/banners/ban_2.jpg';
import ban_3 from '../../assets/images/banners/ban_3.jpg';

export default class Banners extends Component {
    render() {

       return (
        <section class="section">
            <div class="container">
                <div class="banners">
                    <div class="banners__item">
                        <img src={ban_1}></img>
                        <div class="banners__caption">
                            <h4 class="h4">Men’s Watches</h4>
                            <p class="text banners__text">Limited Time Deals</p>
                            <a class="btn banners__btn"><span></span></a>
                        </div>
                    </div>
                    <div class="banners__item">
                        <img src={ban_2}></img>
                        <div class="banners__caption">
                            <h4 class="h4">Ladies Watches</h4>
                            <p class="text banners__text">Don’t miss the moment</p>
                            <a class="btn banners__btn"><span></span></a>
                        </div>
                    </div>
                    <div class="banners__item">
                        <img src={ban_3}></img>
                        <div class="banners__caption">
                            <h4 class="h4">Vintage Watches</h4>
                            <p class="text banners__text">Hyperchrome Match Point</p>
                            <a class="btn banners__btn"><span></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
