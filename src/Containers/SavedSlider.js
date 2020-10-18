import React, { Component } from "react";
import Slider from "react-slick";
import CustomSlide from '../Components/SavedSlide'

export default class SimpleSlider extends Component {
    render() {
        const renderSavedWines = () => {
            return this.props.saved.map(wine => <CustomSlide key={wine.id} wine={wine} postComment={this.props.postComment} deleteWine={this.props.deleteWine} />)
        }
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2>Custom Slides</h2>

                <Slider {...settings}>
                    {this.props.saved !== null && this.props.saved.length >= 1 ? renderSavedWines() : <p>You don't have any saved wines yet.</p>}
                </Slider>
            </div>
        );
    }
}