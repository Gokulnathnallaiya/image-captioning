import axios from "axios";
import React from "react";
import ImageUploader from "react-images-upload";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [], caption: "" };
    this.onDrop = this.onDrop.bind(this);
    
  }

  onDrop(picture) {
    
    axios.post("http://bee09e52ec85.ngrok.io/predict", {userImage:picture[0].name}).then(res=>{
      console.log(res)
      this.setState({caption:res.data.caption})
    });
  }

  render() {
    return (
      <div className="upload-container">
        <h1>IMAGE-CAPTIONING</h1>

        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          withPreview={true}
        />

        <p>{this.state.caption}</p>
      </div>
    );
  }
}

export default App;
