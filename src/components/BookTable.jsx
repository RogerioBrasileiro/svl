import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

export default function BookTable() {
  return (
    <div>
        <BootstrapTable keyField='id' data={ products } columns={ columns } />
    </div>
  )
}
