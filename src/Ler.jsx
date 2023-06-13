import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Ler() {
    const { id } = useParams()
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://backendpsql-ehca0ie8m-adryeldeev.vercel.app/user/' + id)
            .then(res => {
                console.log(res.data);
                setUsers(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <div className="p-2">

                <h2>Cliente</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Numero</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.numero}</td>
                        <td>
                            <Link to='/' className="btn btn-sm btn-primary me-2">Voltar</Link>
                            <Link to={`/Editar/${users.id}`} className="btn btn-sm btn-info">Editar</Link>
                        </td>
                    </tbody>
                </table>
            </div>
                </div>
        </div>
    )
}

export default Ler