import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import axios from 'axios';

function ListOfEmp() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee = (empObj) => {
    //navigate to/employee
    navigate("/employee", { state: empObj });
  }

  const deleteEmpById=async(id)=>{
    let res=await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/employee/employee/${id}`)
    if(res.status === 200){
      getEmps()
    }
  }

  const gotoEditEmployee = (empObj) => {
    //navigate to/employee
    navigate("/edit-emp", { state: empObj });
  }

  async function getEmps() {
      let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/employee/employees`);
      if (res.status === 200) {
        let resObj = await res.data;
        setEmps(resObj.payload);
      }
    }
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center p-2">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4 mt-3">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5">
            <p>{empObj.email}</p>
            <p>{empObj.name}</p>
            {/*3 buttons needed view edit delete*/}
            <div className="p-5 flex justify-around ml-2">
            <button className="bg-green-600 p-4 rounded-2xl" onClick={()=>gotoEmployee(empObj)}>View</button>
            <button className="bg-yellow-600 p-4 rounded-2xl" onClick={()=>gotoEditEmployee(empObj)}>Edit</button>
            <button className="bg-red-600 p-4 rounded-2xl" onClick={()=>deleteEmpById(empObj._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ListOfEmp;



//GET vs AXIOS

// GET
//   fetch(endpoint,resource)
// POST
//   fetch(endpoint,{header:{content-type:},body:JSON.stringify(resource)})

// GET 
//   axios.get(endpoint)
// POST
//   axios.post(endpoint,resource)