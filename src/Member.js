import React from "react";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";

import { LinkButton } from "./LinkButton";
import Separator from "./Separator";

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      member: null,
    };
    this.name = props.name;
    this.id = props.id;
  }

  componentDidMount() {
    fetch(`https://api.pluralkit.me/v2/members/${this.id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            member: result,
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
    const { error, isLoaded, member } = this.state;
    const { name } = this.props;

    if (error) {
      return (
        <div className="p-4">
          <h1>{name}</h1>
          <Separator />
          <div>Couldn&apos;t fetch member: {error.message}</div>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="p-4">
          <h1>{name}</h1>
          <Separator />
          <div>Loading...</div>
        </div>
      );
    } else {
      return (
        <div className="p-4">
          <div className="m-3 flex flex-row">
            <img className="w-32 rounded-full inline" src={member.avatar_url} />
            <div className="self-center ml-4">
              <h3 className="font-bold text-4xl">{member.name}</h3>
              {member.pronouns ? <p>{member.pronouns}</p> : ""}
            </div>
          </div>
          <Separator />
          <div className="prose dark:prose-invert">
            <Markdown>{addNewLines(member.description)}</Markdown>
          </div>
          <Separator />
          <LinkButton to="/fronters">back</LinkButton>
        </div>
      );
    }
  }
}
Member.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Member;

function addNewLines(text) {
  const newText = text
    .split("\n")
    .map((l) => `${l}  `)
    .join("\n");

  return newText.replaceAll(
    /<(a)?:(\w+):(\d{15,})>/g,
    (match, anim, name, id) => {
      const ext = anim === "a" ? ".gif" : ".png";
      return `<img src="https://cdn.discordapp.com/emojis/${id}${ext}" alt="${name}" class="emoji inline">`;
    }
  );
}
