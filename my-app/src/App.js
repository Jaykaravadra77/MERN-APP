import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { fetchusers } from "./api";
import { NavLink } from "react-router-dom";
function App() {
  let [rec, setRec] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      let res = await fetchusers();
      setRec(res.data)

    }
    fetchdata();
  }, [])

  return (
    <Layout className="container" >
      <table>
    <thead></thead>
     <tbody>
        {rec.map((c, i) => {
          return (<tr key={i}>
            <td>{c.name}</td>
            <td>{c.rollno}</td>
            <td>{c.sem}</td>
            <td> {<NavLink to={`/edituser/${c._id}`}>Edit</NavLink>}</td>
          </tr>)
        })}
        </tbody>
      </table>

    </Layout>
  )
}

export default App;
