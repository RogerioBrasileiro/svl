import React, { useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

function BookTable() {
  let [posts, setPosts] = useState([])

  const columns = [
    {
      dataField: 'id',
      text: 'Id',
    }, {
      dataField: 'title',
      text: 'Titulo',
    }, {
      dataField: 'body',
      text: 'Texto',
    }
  ]

  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      })
  }
}

useEffect(() => {

}, []);

return (
  <div>
    <BootstrapTable keyField='id' data={posts} columns={columns} />
  </div>
)

