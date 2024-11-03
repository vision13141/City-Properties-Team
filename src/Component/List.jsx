import React from 'react'
import { Link } from 'react-router-dom';

const List = ({ text, to }) => {
  return (
    <Link to={to}>
      <li className={`text-[#6A6A6A] text-base font-Nunito leading-[36px]`}>{text}</li>
    </Link>
  )
}

export default List;
