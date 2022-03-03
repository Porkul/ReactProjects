import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans : 0 }
        //create a reference
        this.imageRef= React.createRef();
    }

    componentDidMount() {
       this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        //image height
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        // the same as ({spans: spans})
        this.setState({ spans });
    }

    render() {
        const {description, urls} = this.props.image;

        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
};

export default ImageCard;