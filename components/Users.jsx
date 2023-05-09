"use client";
import { useRouter } from 'next/navigation';

import React from 'react'

function Users({data}) {

    const router = useRouter();



    return (
    <ul className='list-group'>
        {
        data.map(item=> <li
                            className='list-group-item d-flex justify-content-between align-items-center list-group-item-action'
                            key={item.id}
                            onClick={()=>
                                router.push(`/users/${item.id}`)
                            }    
                            >
                               <div>
                                    <h5> {item.id} {item.first_name} {item.last_name}</h5>
                                    <p>{item.email}</p>
                                </div>
                                <img
                                    src={item.avatar}
                                    alt={item.email}
                                ></img>

                        </li>)
        }
    </ul> 
  )
}

export default Users;
