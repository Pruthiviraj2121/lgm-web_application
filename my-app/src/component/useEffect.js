import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [users, setUsers] = useState([]); //empty array shows no elements 
    // users is to set the values on the html art
    // setuser is to set the value through api values so .json() is set to setUsers

    const getUsers = async () => {
        const response = await fetch('https://reqres.in/api/users?page=1');
        const data = await response.json();
        setUsers(data.data);
    }

    useEffect(() => {
        getUsers();
    }, []) //This array is to stop the continous loop of the function useEffect
  return (
    <>
      <h1 className='head'>User Cards</h1>
      <div className='container-fluid mt-5'>
        <div className='row text-center'>
            {
                users.map((element) => { //.map() for to take each data to its html place one by one
                    return(
                        <div className='col-10 col-md-4 mt-5'>
                            <div className='card p-2'>
                                <div className='d-flex align-items-center'>
                                    <div className='image'><img src={element.avatar} className='rounded' width="155" alt=''/></div>
                                    <div className='ml-3 w-100'>
                                        <h6 className='mb-0 mt-0 textLeft'>ID: {element.id}</h6>
                                        <div className='p-2 mt-1 bg-primary flex justify-content-between rounded text-white stats'>
                                            <div className='d-flex flex-column'><span className='fname'>First Name:</span><span className='fresult'>{element.first_name}</span></div>
                                            <div className='d-flex flex-column'><span className='lname'>Last Name:</span><span className='lresult'>{element.last_name}</span></div>
                                            <div className='d-flex flex-column'><span className='email'>Email:</span><span className='eresult'>{element.email}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </>
  )
}

export default UseEffect
