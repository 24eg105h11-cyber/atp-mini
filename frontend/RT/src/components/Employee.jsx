
import {useLocation} from 'react-router'
function Employee() {
    const { state } = useLocation();
  return (
    <div className='text-center p-5 text-2xl'>
        <p>{state?.name}</p>
        <p>{state?.email}</p>
        <p>{state?.phoneNumber}</p>
        <p>{state?.designation}</p>
        <p>{state?.companyName}</p>
    </div>
  )
}

export default Employee