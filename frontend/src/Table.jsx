import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DoorList() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://localhost:5000/getallusers');
            setData(response.data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const filteredData = data.filter((item) => {
        if (filter === 'All') {
            return true;
        } else {
            const filterLower = filter.toLowerCase();
            return (
                item.id.toLowerCase().startsWith(filterLower) ||
                item.username.toLowerCase().startsWith(filterLower)
            );
        }
    });

    return (
        <div>
            <nav
                style={{
                    background: 'red',
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
            </nav>

            <div>
                <p style={{ textAlign: 'center' }}>Filter By ID or Username:</p>
                <input
                    type="text"
                    style={{ marginLeft: '47vw' }}
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Enter ID or Username"
                />
            </div>

            <div
                style={{
                    overflowX: 'auto',
                    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
                    marginTop: '20px',
                }}
            >
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                        <tr>
                     
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.id} style={{ border: '1px solid #ddd' }}>
                                <td style={{ padding: '8px', textAlign: 'center', fontFamily: 'monospace', backgroundColor: 'limegreen', color: 'white' }}>{item.id}</td>
                                <td style={{ padding: '8px', textAlign: 'center', fontFamily: 'monospace', backgroundColor: 'limegreen', color: 'white' }}>{item.username}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2vw', marginLeft: '5px' }}>
                <Link to="/Add">
                    <button style={{ padding: '10px', backgroundColor: 'red', borderRadius: '5px', width: '15vw', border: 'none' }}>
                        Add
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default DoorList;
