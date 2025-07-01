import React, {useEffect, useState} from 'react';
import {HTTPURL} from '../../config.js'
import axios from 'axios';
import { useParams} from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';


const ShowUsers = () => {
    const [user, setuser] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useInsertionEffect(() => {
      setLoading(true);
      axios.get(HTTPURL+'/users/'+id)
      .then((Response) => {
        setuser(Response.data);
        setLoading(false);
      })
      .catch((error) =>{
        console.log(error);
        setLoading(false);
      });
    }, [])
    return (
    <div>
      
    </div>
  )
}

export default ShowUsers
