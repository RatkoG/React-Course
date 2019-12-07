import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    //Ova ovde nema da kazuva odma clientHeught oti vo momento slikata nema da bidi pojavena
    // console.log(this.imageRef);
    // console.log(this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  // Ova e zaradi this problemo so go imame
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
