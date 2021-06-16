import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Card from './components/Card'


const App = () => {

  const [users,setUsers] = useState([]);
  const url='https://api.spaceXdata.com/v3/launches?limit=100'
  const getdata = async() =>{
    const response = await axios.get(`${url}`);
    const data = await response.data;
    setUsers(data);
  }
useEffect(() => {
  
  getdata();
},[])
const handleButton = async(value) =>{
    const response = await axios.get(`${url}&launch_year=${value}`);
    const data = await response.data;
    setUsers(data);
}
const handlelaunch = async(value) =>{
  const response = await axios.get(`${url}&launch_success=${value}`);
  const data = await response.data;
  setUsers(data);
}
const handleland = async(value) =>{
  const response = await axios.get(`${url}&land_success=${value}`);
  const data = await response.data;
  setUsers(data);
}


  return (
    <div>
      <h1>SpaceX Launch Programs</h1>
      <div className="card1">
        {/* <Filter/> */}
        <div>
            <div className="box-50">
            <h2>filters</h2>
            <h3>Launch year</h3>
            <hr />
            <div className="button">
                <button onClick={()=>handleButton('2006')}>2006</button>
                <button onClick={()=>handleButton('2007')}>2007</button>
                <button onClick={()=>handleButton('2008')}>2008</button>
                <button onClick={()=>handleButton('2009')}>2009</button>
                <button onClick={()=>handleButton('2010')}>2010</button>
                <button onClick={()=>handleButton('2011')}>2011</button>
                <button onClick={()=>handleButton('2012')}>2012</button>
                <button onClick={()=>handleButton('2013')}>2013</button>
                <button onClick={()=>handleButton('2014')}>2014</button>
                <button onClick={()=>handleButton('2015')}>2015</button>
                <button onClick={()=>handleButton('2016')}>2016</button>
                <button onClick={()=>handleButton('2017')}>2017</button>
                <button onClick={()=>handleButton('2018')}>2018</button>
                <button onClick={()=>handleButton('2019')}>2019</button>
                <button onClick={()=>handleButton('2020')}>2020</button>
            </div>
            <h3>Successful Launch</h3>
            <hr />
            <div className="button">
                <button onClick={()=>handlelaunch('true')}>True</button>
                <button onClick={()=>handlelaunch('false')}>false</button>
            </div>
            <h3>Successful landing</h3>
            <hr className="hr"/>
            <div className="button">
                <button onClick={()=>handleland('true')}>True</button>
                <button onClick={()=>handlelaunch('false')}>false</button>
            </div>
            </div>
        </div>
        <Card users={users} key={users.flight_number}/>
      </div>
      
    </div>
  )
}

export default App
