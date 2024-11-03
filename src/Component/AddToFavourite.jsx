import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import OrgContext from '../Context/OrgContext'
import Container from '../Component/Container'
import Card from '../Common/Card'
import CardThead from '../Component/CardThead'
import { BsCartPlusFill } from "react-icons/bs";


const AddToFavourite = () => {
    const { cart, heart } = useContext(OrgContext)

    if (cart.length < 1) {
        return (
            <div className="flex items-center justify-center text-[36px] font-bold font-Nunito mt-[5vw]">
                <h1>No Iteam</h1>
            </div>
        )
    }

    return (
        <div className='mt-[3vw]'>
            <Container>
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold mb-6">Favorite Carts</h1>
                </div>


                <div className="grid grid-cols-3 gap-6">
                    {
                        cart.map((item, idx) => {
                            return (
                                <CardThead key={idx} item={item} />
                                // <Card key={idx} item={item} />
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )

}

export default AddToFavourite