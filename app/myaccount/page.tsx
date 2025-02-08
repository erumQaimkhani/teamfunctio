
import React from 'react'
import Account from '../components/account'
import Filter from '../components/filter'
import Headers from '../components/header'
import Shopheader from '../components/shopheader'
export default function Myaccount() {
  return (
      <div>
 <Shopheader />
      <Filter />
        <Account />
    <Headers />
    </div>
  )
}
