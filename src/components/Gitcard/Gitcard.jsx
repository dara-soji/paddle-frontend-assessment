import React from 'react'
import './Gitcard.scss'

const Gitcard = ({avatar, name, desc, stars, issues, date}) => {
  return (
    <div className="gitcard">
      <img src={avatar} alt="Avatar" />
      <div className="gitcard__content">
          <h1 className="gitcard__name">{name}</h1>
          <p className="gitcard__desc">{desc}</p>
          <div className="gitcard__info">
              <p className="gitcard__info-stars">stars:{stars}</p>
              <p className="gitcard__info-issues">issues:{issues}</p>
              <p className="gitcard__info-date">{date}</p>
          </div>
      </div>
    </div>
  )
}

export default Gitcard
