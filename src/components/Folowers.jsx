import React, { useEffect, useState } from 'react'

const Folowers = () => {
     const [data, setData] = useState([])
     const [fullName, setFullName] = useState('');
     const [Id, setId] = useState('');

     useEffect(() => {
        const storedId = sessionStorage.getItem('userName');
        const storedName = sessionStorage.getItem('Name');

        setFullName(storedName);
        setId(storedId);

        if (storedId) {
        fetch(`https://api.github.com/users/${storedId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
        }}, [])
    if(!Id) return(
        <div className='m-20 text-xl font-bold'>
            <h1 className='mb-2'>Hi User,</h1>
            You have not provided details to personalise this site.
            <br /> Provide your details in the form at the Home page. Thanks!!
        </div>
    )
  return (
    <div className='text-center m-4 p-4 text-3xl mt-3 mb-40'>
        <div className='flex items-center'>
            <img 
                src={data.avatar_url} 
                alt="Git picture"
                width={50}
                className='rounded-3xl' 
            />
            <h1 className='text-xl font-bold m-2'>Hi {fullName || 'User'},</h1>
        </div>
        <h1 className='mt-20 text-2xl'>
            {Id}, your Github followers count is {data.followers}
        </h1>
    </div>
  )
}

export default Folowers