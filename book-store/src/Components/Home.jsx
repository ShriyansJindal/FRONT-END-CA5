import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Home.css"
import { Link } from 'react-router-dom';
const Home = () => {
    let [data,setData] = useState([])
    let [suggest, SetSuggest]=useState([])
    let [searchitem,SetSearchitem] = useState("")
    useEffect(()=>{
        axios.get("https://reactnd-books-api.udacity.com/books",{headers:{ 'Authorization': 'whatever-you-want' }}).then(res=>{setData(res.data.books)
    SetSuggest(res.data.books)}).catch(error=>{
            console.log(error)
        })
        // .finally(()=>{
        //     console.log("Fetched")
        // })
    },[])
    // console.log(data)
    let handlechange =(e)=>{
        SetSearchitem(e.target.value)
        SetSuggest(data.filter((el)=>el.title.toLowerCase().includes(searchitem.toLowerCase())))
        // console.log(suggest[0])
        // console.log(searchitem)
    }
  return (
    <div className='container'>
        <nav className='navbar mt-4'>
            <ul>
                <li className='logo'>Kalvium Books</li>
                <li><input className='search' type="text" placeholder='Search' list='books' onChange={handlechange} />
                {/* <button className='searchbtn'>Search</button> */}</li>
                <li><Link to="./register"><button className='registerbtn'>Register</button></Link></li>
            </ul>
        </nav>

        {/* <datalist id='books'>
            {suggest.map((el)=>(
                <option key={el.id} value={el.title}></option>
            ))}
        </datalist> */}
        
        <div className='books-container'>
                {suggest.map((el)=>(
                    <div key={el.id} className='books'>
                        <img src={el.imageLinks.smallThumbnail} alt="" />
                        <h3 >{el.title}</h3>
                        <p>{el.averageRating && el.averageRating +"⭐"}</p>
                        <p>Free</p>
                    </div>
                ))}

        </div>

    </div>
  )
}

export default Home