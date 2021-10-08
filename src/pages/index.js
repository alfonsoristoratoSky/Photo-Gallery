
import React from 'react';
import signature from '../assets/Illustration FIRMA.png';
import background from '../assets/3.jpg';



const Home = () => {
return (
	<div 
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh',
        backgroundImage: `url(${background})`,

        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: '90%',
        
        
	}}
	>


<div class="bg-text">

<img src={signature} alt='background' style={{
    width: '100%',


}}/>

    {/* <div class="title-text container">
        <a href="opere.html">OPERE</a>
        <!-- | <a href="bio.html">BIO</a> -->
    </div> */}
</div>
    {/* <footer class="footer container justify-content-center">
    Copyright © - Tutti i diritti riservati
</footer> */}
	</div>

);

};

export default Home;
