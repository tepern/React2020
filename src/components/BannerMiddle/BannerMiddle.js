import React, { Component } from 'react';

export default class Banner extends Component {
    render() {

       return (
        <section class="section section_middle">
            <div class="container">
                <div class="banner-middle">
                    <div class="banner-middle__caption">
                        <h2 class="h2">The Original</h2>
                        <p class="text banner-middle__text"><b class="strong">T</b>ick tock. You’ll never wonder what time it is again when you browse through all watches, including designer brands like Gucci, Daniel Wellington. From stainless steel and ceramic watch straps to leather and fabric ones, you’ll find the perfect fit for your wrist.
                        <br></br><br></br>
                        Our extensive collection of men’s and women’s watches covers every style and taste, from cutting-edge modern designs to ageless classics. Want a watch that’s both practical and fashionable? Look for straps in vibrant colors like pink, purple bright white.</p>
                        <a class="btn">View Collection</a>
                    </div>    
                </div>    
            </div>
        </section>
        );
    }
}
