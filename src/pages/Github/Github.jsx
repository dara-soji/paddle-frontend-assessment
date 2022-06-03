import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Footer, Navbar } from '../../components'
import Gitcard from '../../components/Gitcard/Gitcard'
import './Github.scss'

const Github = () => {

    const [gitList, setGitList] = useState([])
    const url = process.env.REACT_APP_GITHUB_URL;
    useEffect(()=>{
        axios.get(url).then(res =>{
          console.log(res.data.items)
          setGitList(res.data.items)
            })
            .catch(err=>{
                    console.log(err)
                })
    
            }, [])
  return (
    <div className="github"> 
    <Navbar />
    <div className="github__content">
        {gitList?.map((list, index) => (

        <Gitcard 
        avatar={list.owner.avatar_url}
        name={list.name}
        desc={list.description}
        stars={list.stargazers_count}
        issues={list.open_issues_count}
        date={list.created_at}
        
        />
        ))}
    </div>
      <Footer />
    </div>
  )
}

export default Github
