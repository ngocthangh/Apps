import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function Header({ updateData }) {
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(0)
    const [amount, setAmount] = useState(10)

    useEffect(() => {
        axios.get('https://opentdb.com/api_category.php')
            .then((res) => {
                if(res && res.data) {
                    setCategories(res.data.trivia_categories)
                    console.log('setting id', res.data.trivia_categories[0].id)
                    setCategory(res.data.trivia_categories[0].id)
                }
            })
    }, [])

    return (
        <div className="form">
            <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select className="form-control" name="category" id="" value={category} onChange={(e) => setCategory(e.target.value )}>
                    {categories.map(category => (
                        <option value={category.id} key={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="amount">Page:</label>
                <input className="form-control" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <div className="form-group">
                <button className="form-control btn" onClick={() => updateData(category, amount)}>Fetch</button>
            </div>
        </div>
    )
}
