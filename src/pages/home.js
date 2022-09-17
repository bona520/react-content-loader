import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './app.css'
import responseData from './data.json'

const Home = () => {
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        const response = responseData;
        setCategories(response.data);
    }, [])
    console.log(categories);
    return (
        <div className="main">
            <div className="container">
                <div className="category">
                    <ul className="ul-category">
                        {
                            categories && categories.map((category, index) => {
                                return (
                                    <li className="li-category" key={index}>
                                        <NavLink to={`/${category.path}`}
                                            className={({ isActive }) => isActive ? 'name is-active' : 'name'}
                                        >{category.name}</NavLink>
                                    </li>
                                )
                            }
                            )
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home