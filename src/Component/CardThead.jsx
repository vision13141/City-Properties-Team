import React, { useContext } from 'react'
import OrgContext from '../Context/OrgContext'

const CardThead = ({ item }) => {
    const { id, image, name, price, title, description } = item

    const { remove } = useContext(OrgContext)

    return (
        <div className="bg-white w-[350px] shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-4 ">
            <img src={image} alt="Item Image" className="w-full h-48 rounded-lg object-cover transition-opacity duration-300 hover:opacity-80" />
            <div className="pt-3">
                <p className="text-gray-600 text-sm">{title}</p>
                <h2 className="text-2xl font-semibold text-gray-800 mt-2">{name}</h2>
                <p className="text-gray-700 text-lg font-bold mt-1">${price}</p>
                <p className="text-gray-500 mt-2">{description.slice(0, 60)}</p>
                <button onClick={() => remove(id)} className="mt-4 bg-blue text-white py-2 px-5 rounded focus:ring-blue focus:ring-opacity-50">
                    Remove from Favorites
                </button>
            </div>
        </div>
    )
}

export default CardThead