import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form"
import { useEffect } from "react";
import axios from "axios"
function EditEmp() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {register,handleSubmit,formState:{errors},setValue} = useForm();
  useEffect(()=>{
    setValue("name",state?.name);
    setValue("email",state?.email);
    setValue("phoneNumber",state?.phoneNumber);
    setValue("companyName",state?.companyName);
    setValue("designation",state?.designation);
  },[]);

const saveModifiedEmp=async(modifiedEmp)=>{
    console.log(modifiedEmp)
    //make http PUT req
    const res=await axios.put(`${import.meta.env.VITE_BACKEND_URL}/employee/employee/${state._id}`, modifiedEmp)
    if(res.status===200){
      navigate("/list")
    }
  }

  return (
    <div>
      <h1 className="text-center text-2xl mb-4 p-4">Edit Employee</h1>
      <form className='max-w-md mx-auto text-lg' onSubmit={handleSubmit(saveModifiedEmp)}>
                <div className='mb-3'>
                    <input
                        type="text"
                        {...register("name", { required: true, minLength: 4 })}
                        id="name"
                        className='border w-full p-2' placeholder='Enter Name'
                    />
                    {errors.name?.type === 'required' && <p className='text-red-500 text-sm text-left'>Name is required</p>}
                </div>
                <div className='mb-3'>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        id="email"
                        className='border w-full p-2' placeholder='Enter Email'
                    />
                    {errors.email && <p className='text-red-500 text-sm text-left'>Email is required</p>}
                </div>
                <div className='mb-3'>
                    <input
                        type="number"
                        {...register("phoneNumber", { required: true })}
                        id="phoneNumber"
                        className='border w-full p-2' placeholder='Enter Phone Number'
                    />
                    {errors.phoneNumber && <p className='text-red-500 text-sm text-left'>Phone Number is required</p>}
                </div>
                <div className='mb-3'>
                    <input
                        type="text"
                        {...register("companyName", { required: true })}
                        id="companyName"
                        className='border w-full p-2' placeholder='Enter Company Name'
                    />
                    {errors.companyName && <p className='text-red-500 text-sm text-left'>Company Name is required</p>}
                </div>
                <div className='mb-3'>
                    <input
                        type="text"
                        {...register("designation", { required: true })}
                        id="designation"
                        className='border w-full p-2' placeholder='Enter Designation'
                    />
                    {errors.designation && <p className='text-red-500 text-sm text-left'>Company Designation is required</p>}
                </div>

                <button type="submit" className='block w-full p-3 bg-amber-400 font-bold rounded mt-5'>
                    Submit
                </button>

            </form>
    </div>
  )
}

export default EditEmp