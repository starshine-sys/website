import React from "react";
import { InlineLink, LinkButton } from "./LinkButton";
import Separator from "./Separator";

function About() {
  return (
    <div className="p-4">
      <h1 className="text-xl">about us</h1>
      <div>
        <p>hi, we&apos;re the starshines! (collectively named Sam)</p>
        <p>
          we&apos;re a{" "}
          <InlineLink href="https://termora.org/term/918">quoigenic</InlineLink>{" "}
          <InlineLink href="https://termora.org/term/86">polyplural</InlineLink>{" "}
          system, with over <del>100</del> 140 members!
        </p>
        <ul className="list-disc list-inside">
          <li>bodily adult</li>
          <li>it/its or they/them</li>
          <li>trans, enby, voidpunk</li>
          <li>aromantic asexual</li>
        </ul>
        <p>
          we&apos;re mostly active over on Discord, where we work on{" "}
          <InlineLink href="https://termora.org/">Termora</InlineLink>,{" "}
          <InlineLink href="https://catalogger.starshines.xyz/">
            Catalogger
          </InlineLink>
          , and a couple of other projects.
        </p>
      </div>
      <Separator />
      <h1 className="text-lg">dni</h1>
      <div>
        <p>
          in general, if you try to be a decent person, you&apos;re probably
          fine
        </p>
        <p>
          that being said, <strong>don&apos;t interact with us</strong> if:
        </p>
        <ul className="list-disc list-inside">
          <li>you have any problems with LGBT people</li>
          <li>
            you are against endogenic or otherwise non-truamagenic systems—this
            also includes if you think they&apos;re just &quot;in denial&quot;
            about trauma
          </li>
          <li>
            you police other people&apos;s identities—like pronouns or labels—in
            any way
          </li>
          <li>
            you are trying to contact us on behalf of anyone we have blocked
          </li>
        </ul>
      </div>
      <Separator />
      <div>
        <LinkButton to="/">start</LinkButton>{" "}
        <LinkButton to="/fronters">frequent fronters</LinkButton>
      </div>
    </div>
  );
}

export default About;
