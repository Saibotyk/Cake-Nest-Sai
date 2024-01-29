import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function OrderPage() {

  const {username} = useParams();

  return (
    <div>
      Bonjour {username}
      <Link to="/">
        <button>Se deconnecter</button>
      </Link>
    </div>
  )
}
