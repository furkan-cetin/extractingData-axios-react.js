import axios from "axios";
import React, { Component } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios.get(baseURL).then((response) => {
      this.setState({
        users: response.data,
        isLoading: false,
      });
    });
  }
  render() {
    const { isLoading, users } = this.state;

    if (isLoading) {
      return <div>Yükleniyor...</div>;
    }
    return (
      <div>
        <ul>
          {users.map((user) => (
            <li>
              <p>
                {user.name} : {user.username}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
