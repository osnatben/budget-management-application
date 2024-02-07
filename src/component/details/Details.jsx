import React, { useEffect } from 'react'
import BusinessDetailsStore from '../Data/BusinessDetailsStore'
import { BusinessDetails } from '../Data/BusinessDetailsServer'
import { observer } from 'mobx-react-lite';
import logo from '../../assets/image/החברה למתנסים.png'


const Details = observer(() => {
    useEffect(() => {

        if (!BusinessDetailsStore.businessDetails.length) {
            BusinessDetails()
            // console.log(BusinessDetailsStore.businessDetails)
        }
        console.log(BusinessDetailsStore.businessDetails)

    }, [])
    return (
        <div>
            <img src={logo} className='logo' />
            <h2 className='textWhite'>{BusinessDetailsStore.businessDetails.name}</h2>
            <h4 className='textWhite'>{BusinessDetailsStore.businessDetails.description}</h4>
            <h4 className='textWhite'>{BusinessDetailsStore.businessDetails.address} | {BusinessDetailsStore.businessDetails.phone}</h4>
            <h4 className='textWhite'>{BusinessDetailsStore.businessDetails.owner}</h4>
            <br />
            <br/>
        </div>
    )
}

)
export default Details


