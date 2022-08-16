import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';


export default function BookTable() {
  // 1-criar o state que vai conter a lista da api
  let [comments, setComments] = useState([])

  // 2-criar o objeto colunas, no qual o datafield é a propriedade do objeto
  const columns = [
    {
      dataField: 'id',
      text: 'Id',
    }, {
      dataField: 'name',
      text: 'Nome',
    }, {
      dataField: 'email',
      text: 'Email',
    }, {
      dataField: 'body',
      text: 'Texto'
    }
  ]

  const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        setComments(data)
      })
  }


  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>

      <BootstrapTable keyField='id' data={comments} columns={columns} pagination={paginationFactory()} />
    </div>
  )



}
