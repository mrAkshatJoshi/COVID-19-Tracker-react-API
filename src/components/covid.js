import React,{useEffect,useState} from 'react'
import './covid.css'

const Covid = () => {
    const [data,setData] = useState([]);

    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json();
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0])
        } catch(err){
            console.log(err)
        }

    }
    useEffect(() => {
      getCovidData();
    }, [])
    

  return (
    <>
        <h1 style={{color:"red"}}><i class="fa-solid fa-circle"></i>LIVE</h1>
        <h2><i class="fa-solid fa-virus-covid-slash"></i>COVID-19 TRACKER</h2>

        <ul>
            <li className='card'>
                        <p className='card_name'>
                            <span> OUR <span className='card_title'> COUNTRY </span></span>
                            <p className='card_country'><span className='card_country-orange'>IN</span><span className='card_country-white'>D</span><span className='card_country-green'>IA</span></p>
                        </p>
            </li>
            <li className='card'>
                        <p className='card_name'>
                            <span> TOTAL <span className='card_title'> RECOVERED </span></span>
                            <p className='card_recovered'>{data.recovered}</p>
                        </p>
            </li>
            <li className='card'>
                        <p className='card_name'>
                            <span> TOTAL <span className='card_title'> CONFIRMED </span></span>
                            <p className='card_confirmed'>{data.confirmed}</p>
                        </p>
            </li>
            <li className='card'>
                        <p className='card_name'>
                            <span> TOTAL <span className='card_title'> DEATHS </span></span>
                            <p className='card_deaths'>{data.deaths}</p>
                        </p>
            </li>
            <li className='card'>
                        <p className='card_name'>
                            <span> TOTAL <span className='card_title'> ACTVE </span></span>
                            <p className='card_active'>{data.active}</p>
                        </p>
            </li>
            <li className='card'>
                        <p className='card_name'>
                            <span> LAST <span className='card_title'> UPDATED </span></span>
                            <p className='card_lastupdatedtime'>{data.lastupdatedtime}</p>
                        </p>
            </li>
        </ul>
    </>
  )
}

export default Covid