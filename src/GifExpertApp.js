import React, {useState} from 'react';

import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    const handleAdd = (el) => {
        setCategories([el, ...categories]);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={handleAdd}/>
            <hr/>
            
            <ol>
            {
                categories.map(cat => 
                    <GifGrid category={cat} key={cat}/>
                )
            }
            </ol>
        </>
    )
}

 