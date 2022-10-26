import React from 'react'
import { useSelector } from "react-redux"

const ViewBooks = () => {
  const books = useSelector((state) => state.booksReducer.books);
  
  return (
    <div>
      <h2>List of Books</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book) => {
            const { id, title, author } = book;
            return <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{author}</td>
              <td>
                <button>Edit</button>
                <button>Dlete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ViewBooks