import React from 'react';
import ImageUploader from 'react-images-upload';
import './App.css'
 
class App extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
      console.log(picture)
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        return (

          <div className="upload-container">

            <h1>IMAGE-CAPTIONING</h1>

          
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
            />

            </div>
        );
    }
}


export default App;