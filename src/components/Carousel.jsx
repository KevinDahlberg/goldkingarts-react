import React, { Component } from 'react'

export default class Carousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentImage: ''
        }
    }

    cycleImages (images) {
        if (!this.state.currentImage) {
            this.setState({currentImage: images[0]})
        } else {
            console.log(this.state.currentImage);
            const index = images.indexOf(this.state.currentImage);
            console.log(index);
            let newIndex = index + 1;
            console.log(newIndex);
            if (newIndex === images.length) { 
                newIndex = 0
            } else {
            }
            console.log(newIndex);
            const image = images.slice(newIndex, newIndex+1)
            console.log('new image is ', image);
            this.setState({currentImage: image[0]});
        }
        console.log(this.state);
    }

    componentWillMount() {
        this.cycleImages(this.props.images);
    }

    componentDidMount() {
        this.startImages = setInterval(() => this.cycleImages(this.props.images), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.startImages)
    }

    render () {
        if (this.state.currentImage) {
        return(
            <div className="content-media">
                <img src={this.state.currentImage.media_details.sizes.full.source_url} /> 
            </div>
        )
        } else {
            return (
                <div />
            )
        }
    }
}