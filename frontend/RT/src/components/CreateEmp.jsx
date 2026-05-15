import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import {counterContextObj} from '../context/ContextProvider'
import {useContext} from 'react'
function CreateEmp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const {counter,changeCounter}=useContext(counterContextObj)

    const onFormSubmit = async (newEmployee) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/employee/add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEmployee)
            });
            if (res.status === 201) {
                navigate("/list");
            }
        } catch (err) {
            console.error("Error occurred:", err);
        }
    };
    return (
        <div className='text-center text-3xl'>
            <h1 className='my-5'>Create Employee</h1>
            <form className='max-w-md mx-auto text-lg' onSubmit={handleSubmit(onFormSubmit)}>
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
                        id="companyName"
                        className='border w-full p-2' placeholder='Enter Designation'
                    />
                    {errors.companyName && <p className='text-red-500 text-sm text-left'>Company Designation is required</p>}
                </div>

                <button type="submit" className='block w-full p-3 bg-amber-400 font-bold rounded mt-5'>
                    Submit
                </button>
            </form>
            <h1 className="text-4xl ">Counter: {counter}</h1>
        <button onClick={changeCounter} className='bg-amber-300 p-5 rounded-2xl ml-2 mt-4 text-center'>Change</button>
        </div>
    );
}
export default CreateEmp;
