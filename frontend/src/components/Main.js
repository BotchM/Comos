import React, { Component } from 'react';
import '../App.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    // callApi = async () => {
    //   const response = await fetch('/api/hello');
    //   const body = await response.json();
    //
    //   if (response.status !== 200) throw Error(body.message);
    //
    //   return body;
    // };

    fetch('/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:8080/${body.file}` });
      });
    });
  }

  render() {
    return (
      <form class="col align-self-center" onSubmit={this.handleUploadImage}>
        <div class="col align-self-center margin-bot">
          <input class="choose-file-button" ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <input class="file-input" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        <img src={this.state.imageURL} alt="img" />
      </form>
    );
  }
}

export default Main;
