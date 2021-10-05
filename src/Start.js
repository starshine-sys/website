import React from 'react'
import Front from './Front'
import Separator from './Separator'
import { LinkButton } from './LinkButton'

import { lyrics } from './data.json'
import rain2 from './rain2.gif'

function Start () {
  return (
    <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
            <img className="lg:rounded-lg w-screen object-cover md:h-72" src={rain2} />
        </div>
        <div className="flex-1 px-4 pt-4 pb-4 md:pb-0">
            <h1 className="text-2xl">starshines <span className="text-base">collectively named Sam, they/it</span></h1>
            <Separator />
            <p>
                ♫ <em>{lyrics}</em>
            </p>
            <Separator />
            <em>humanity is overrated</em>
            <Separator />
            <strong>Currently fronting:</strong> <Front id="qvzbz" />
            <Separator />
            <div>
                <LinkButton to="/about">about</LinkButton>
            </div>
        </div>
    </div>
  )
}

export default Start
