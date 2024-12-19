import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Review our menu and choose from the diverse list of foods on our Hotel.
            We do offer a wide variety of delicacies.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div key={index} className='explore-menu-list-item' onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}}>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
        
    </div>
  )
}

export default ExploreMenu