import React from 'react'
import { InlineLink, LinkButton } from './LinkButton'
import Separator from './Separator'

function About () {
  return (
    <div className="p-4">
        <h1 className="text-xl">about us</h1>
        <div>
            <p>hi, we&apos;re the starshines! (collectively named Sam)</p>
            <p>we&apos;re a <InlineLink href="https://termora.org/term/918">quoigenic</InlineLink> system, with over 100 members!</p>
            <ul className="list-disc list-inside">
                <li>bodily adult</li>
                <li>it/its or they/them</li>
                <li>trans, enby, voidpunk</li>
                <li>aromantic asexual</li>
            </ul>
            <p>we&apos;re mostly active over on Discord, where we work on <InlineLink href="https://termora.org/">Termora</InlineLink> and a couple of other projects.</p>
            <p>might be obvious, but if you have any problems with LGBT people or non-traumagenic systems, don&apos;t interact with us.</p>
        </div>
        <Separator />
        <div>
            <LinkButton to="/">start</LinkButton> <LinkButton to="/fronters">frequent fronters</LinkButton>
        </div>
    </div>
  )
}

export default About
