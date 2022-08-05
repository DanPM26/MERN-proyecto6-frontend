import React, {useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import BtnCheckoutPage from '../CheckoutPage/BtnCheckoutPage';

const Profile = () => {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const isLoggedIn = !!user

    useEffect(()=>{
        if (!isLoggedIn){
            navigate('/login')
        }
    },[isLoggedIn])


  return (
    <div>
        <h1>Profile</h1>
        {
            isLoggedIn ? 
            (
                <>
                <p>
                    <strong>Name:</strong> {user.username}
                </p>
                 <BtnCheckoutPage />
                </>
            )
            :
            (
                <p>You are not logged in </p>
            )
        
        }

    </div>
  )
}

export default Profile