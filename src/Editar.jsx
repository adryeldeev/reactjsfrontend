import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Editar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    numero: ""
  });

  useEffect(() => {
    axios.get(`https://backendpsql-ehca0ie8m-adryeldeev.vercel.app/user/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://backendpsql-ehca0ie8m-adryeldeev.vercel.app/update/${id}`, user)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Editar Cliente</h2>
          <div className="mb-2">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              className="form-control"
              required
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="form-control"
              required
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="numero">Numero</label>
            <input
              type="text"
              id="numero"
              name="numero"
              placeholder="Numero"
              className="form-control"
              required
              value={user.numero}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-success">Editar</button>
        </form>
      </div>
    </div>
  );
}

export default Editar;