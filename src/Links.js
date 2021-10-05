/* eslint-disable react/jsx-key */
import React from 'react'
import { InlineLink, LinkButton } from './LinkButton'
import Separator from './Separator'

import { links } from './data.json'

function Links () {
  return (
    <div className="p-4">
        <h1 className="text-xl">links</h1>
        <ul>
            {links.map(link => <li><strong>{link.name}:</strong> {link.url ? <InlineLink className="text-blue-500 hover:text-blue-700 hover:underline" href={link.url}>{link.username}</InlineLink> : link.username}</li>)}
        </ul>
        <Separator />
        <div>
            <LinkButton to="/fronters">frequent fronters</LinkButton> <LinkButton to="/">start</LinkButton>
        </div>
    </div>
  )
}

export default Links
