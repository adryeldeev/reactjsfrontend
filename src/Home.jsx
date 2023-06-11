import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(res => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/delete/${id}`)
      .then(res => {
        console.log(res);
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Lista de Clientes</h2>
        <div className="d-flex justify-content-end">
          <Link to='/create' className="btn btn-success">Adicionar +</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Numero</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.numero}</td>
                <td>
                  <Link to={`/Ler/${user.id}`} className="btn btn-sm btn-info">Ler</Link>
                  <Link to={`/Editar/${user.id}`} className="btn btn-sm btn-primary mx-1">Editar</Link>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user.id)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;