import React from 'react';
import Main from './components/Main';
import './App.css';

const App = () => (
  <div class="container" id="centered-container">
      <div class="row align-self-start">
        <img id="logo" src="http://i.imgur.com/QBf6mh6.png" alt="logo" class="rounded mx-auto d-block">
        </img>
      </div>
      <div class="col align-self-center">
        <div class="row align-items-start">
          <h1 class="col align-self-center">File Upload</h1>
        </div>
        <div id="file-form" class="row align-items-center col align-self-center">
          <Main />
        </div>
      </div>

  </div>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//           <div class="row align-items-center">
//             <h1>File Upload</h1>
//             <Main />
//           </div>
//       </div>
//     )
//   }
// }

export default App;
