import React, { Component } from 'react';
import ban_left from '../../assets/images/banners/ban_left.png';
import ban_right from '../../assets/images/banners/ban_right.jpg';

export default class Banner extends Component {
    render() {

       return (
            <section class="section">
                <div class="container">
                    <div class="banner-bottom">
                        <div class="banner-bottom__item">
                            <img src={ ban_left }></img>
                            <div class="banner-bottom__caption">
                                <h4 class="black">Timex Command</h4>
                                <p class="text black">Up to 25% off</p>
                                <a class="btn black banner__btn banner-bottom__btn">
                                    <span>Shop Now</span>
                                </a>
                            </div>
                        </div>
                        <div class="banner-bottom__item">
                            <img class="banner-right" src={ ban_right }></img>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
