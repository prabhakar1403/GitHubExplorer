import React, { useEffect, useState } from 'react';

const Repo = () => {
    const [data, setData] = useState([]);
    const [fullName, setFullName] = useState('');
    const [Id, setId] = useState('');

    useEffect(() => {
        const storedId = sessionStorage.getItem('userName');
        const storedName = sessionStorage.getItem('Name');

        setFullName(storedName);
        setId(storedId);

        if (storedId) {
            fetch(`https://api.github.com/users/${storedId}/repos`)
                .then(response => response.json())
                .then(userData => {
                    setData(userData);
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [Id]);
    if(!Id) return(
        <div className='m-20 text-xl font-bold'>
            <h1 className='mb-2'>Hi User,</h1>
            You have not provided details to personalise this site.
            <br /> Provide your details in the form at the Home page. Thanks!!
        </div>
    )
    return (
        <div className='flex flex-col items-center m-5 mb-20'>
            <p className='font-bold text-2xl m-5'>Hi {fullName || 'User'},</p>
            <p className='mb-3 font-bold'>Please find the list of your GitHub Repositories:</p>
            <ul>
                {data.map(repo => (
                    <li className='text-center' key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Repo;
