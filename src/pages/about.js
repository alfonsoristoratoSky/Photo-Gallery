import React from 'react';
import { FaPalette } from 'react-icons/fa';

const About = () => {
return (
	<div className='container-fluid'
	style={{
		justifyContent: 'center', 
		alignItems: 'center',
		height: '100vh',
		backgroundColor: 'black',
		color: 'gray'
	}}
	>
	
	<h1  className='d-flex justify-content-center'>Artist Name</h1>
	<div className='d-flex justify-content-center mt-3'><FaPalette size={150}/></div>
	<p className='container justify-center align-center mt-3'>
	"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
	</p>
	</div>
	
);
};

export default About;
