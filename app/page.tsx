'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Navbar from './LandingPage/Components/Navbar';
import Carousel from './LandingPage/Components/Carousel';

export default function Home() {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap.bundle.min.js');
	}, []);
	return (
		<div>
			<Navbar></Navbar>
			<Carousel></Carousel>
		</div>
	);
}
