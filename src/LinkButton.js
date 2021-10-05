import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class LinkButton extends React.Component {
  constructor (props) {
    super(props)
    this.to = props.to
    this.children = props.children
  }

  render () {
    return <Link className="bg-white dark:bg-gray-700 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-solid border-4 py-1 px-2 inline-block font-bold" to={this.to}>{this.children}</Link>
  }
}
LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export class InlineLink extends React.Component {
  constructor (props) {
    super(props)
    this.href = props.href
    this.children = props.children
  }

  render () {
    return <a className="text-blue-500 hover:text-blue-700 hover:underline" href={this.href}>{this.children}</a>
  }
}
InlineLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}
