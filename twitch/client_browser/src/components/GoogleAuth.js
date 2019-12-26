import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "609920461316-vp8gg2ijqf4b8aq6bv6o0j2dc0tpeniq.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}
export default GoogleAuth;
