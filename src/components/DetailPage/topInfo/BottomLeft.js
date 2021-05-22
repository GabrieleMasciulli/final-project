import React from 'react'
import {
  faLink,
  faExternalLinkAlt,
  faCode,
  faTag,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LinkListItem = ({ leftIcon, link, rightIcon }) => {
  return !link || link === '' ? (
    ''
  ) : (
    <li>
      <a href={link}>
        <FontAwesomeIcon className='left-icon' icon={leftIcon} />
        <div className='link-text'>{link}</div>
        <FontAwesomeIcon className='right-icon' icon={rightIcon} />
      </a>
    </li>
  )
}

const TagListItem = ({ text }) => {
  return (
    <li>
      <FontAwesomeIcon className='left-icon' icon={faTag} />
      {text}
    </li>
  )
}

const BottomLeft = ({ data }) => {
  const homepage = data.links.homepage[0]
  const source_code = data.links.repos_url.github[0]

  return (
    <div className='bottom-left-wrapper'>
      <div className='links'>
        <ul>
          <LinkListItem
            leftIcon={faLink}
            link={homepage}
            rightIcon={faExternalLinkAlt}
          />
          <LinkListItem
            leftIcon={faCode}
            link={source_code}
            rightIcon={faExternalLinkAlt}
          />
        </ul>
      </div>
      <div className='tags'>
        <div className='title'>Tags: </div>
        <ul>
          {data.categories.map(tag => (
            <TagListItem key={tag} text={tag} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BottomLeft
