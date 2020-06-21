import React from 'react'
import NavigationBar from "../nav/NavBar"
import Jumbotron from "../accueil/Jumbroton"
import Layout from "../accueil/Layout"
import CarouselImg from "../accueil/Carousel"
import CardDesc from "../Card"


const Acceuil = () => {
    return (
        <div>
             <NavigationBar />
             <Jumbotron />
             <Layout/>
            <CardDesc/>
        </div>
            
        
    )
}

export default Acceuil;