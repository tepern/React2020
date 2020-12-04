import React, { Component } from 'react';

export default class Banner extends Component {
    render() {

       return (
            <section class="section section_banner">
                <div class="container">
                    <div class="banner">
                        <h3 class="h3">Creating a feature classic</h3>
                        <h1 clas="h1">Everything that’s new and now</h1>
                        <p class="text banner__text">Our extensive collection of men’s and women’s watches covers every style and taste, from cutting-edge modern designs to ageless classics.</p>
                        <a class="btn banner__btn">
                            <span>Shop Now</span>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}
