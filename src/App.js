import axios from "axios";
import React from "react";
import ImageUploader from "react-images-upload";
import "./App.css";
import Speech from "react-speech";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [], caption: null, loading: false};
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({ loading: true });

    axios
      .post("http://bee09e52ec85.ngrok.io/predict", {
        userImage: picture[0].name,
      })
      .then((res) => {
        console.log(res);
        this.setState({ caption: res.data.caption, loading: false });
      });
  }

  render() {
    return (
      <div className="upload-container">
        <h1>IMAGE-CAPTIONING</h1>
        <div style={{ maxWidth: "600px" }}>
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            withPreview={true}
          />
        </div>
        

        {this.state.loading ? (
          <p className="loading">
            Sit Back and relax! while we find the right caption for your image
            🙃
          </p>
        ) : ( this.state.caption ?
          <>
            <div style={{display:"flex", justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
              <p>Hurray! we found the caption !!</p>
              <p style={{fontWeight:'bold'}}>Caption :<span style={{ color: "green"}}>"{this.state.caption}"</span></p>
            </div>
            <div>
              <Speech
                text={this.state.caption}
                
                stop={true}
                
                volume={10}
              />
            </div>
          </>:(
            <p style={{fontWeight:'bold'}}>Upload an image to find the caption</p>
          )
        )}
      </div>
    );
  }
}

export default App;
