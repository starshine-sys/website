import React from "react";
import PropTypes from "prop-types";

class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      front: null,
    };
    this.id = props.id;
  }

  componentDidMount() {
    fetch(`https://api.pluralkit.me/v2/systems/${this.id}/fronters`)
      .then((res) => res.json())
      .then(
        (result) => {
          let front = null;
          if (result.members?.length > 0)
            front = result.members.map((m) => m.display_name || m.name);

          this.setState({
            isLoaded: true,
            front: front,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, front } = this.state;
    if (error) {
      return <div>Couldn&apos;t fetch fronters: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading fronters...</div>;
    } else {
      return <div>{front || "No fronter"}</div>;
    }
  }
}
Front.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Front;
