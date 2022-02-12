/* eslint-disable react/prop-types */
import React from "react";
import { members } from "./data.json";
import Separator from "./Separator";
import { LinkButton } from "./LinkButton";

function Fronters() {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-xl">frequent fronters</h1>
        <p>
          this isn&apos;t an exhaustive list, and people aren&apos;t shown in
          any particular order!
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
        {members.map((m, i) => (
          <Member key={i} member={m} />
        ))}
      </div>
      <Separator />
      <div>
        <LinkButton to="/about">about</LinkButton>{" "}
        <LinkButton to="/links">links</LinkButton>
      </div>
    </div>
  );
}

export default Fronters;

function Member(props) {
  return (
    <div className="flex flex-col max-w-md justify-center text-center">
      {props.member.avatar ? (
        <img className="w-2/3 mx-auto rounded-full" src={props.member.avatar} />
      ) : (
        ""
      )}
      <h3 className="text-lg mt-2 mb-1">{props.member.name}</h3>
      <em>{props.member.pronouns}</em>
      <hr className="md:hidden my-2" />
    </div>
  );
}
