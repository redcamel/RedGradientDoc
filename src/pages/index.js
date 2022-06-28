import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	return (
		// <header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="introMain">
				<a href="https://github.com/redcamel/RedGradient" target="_blank" ><img src="./img/ForkMe.png" className={'introMainForkMe'} style={{boxShadow:'none',filter:'drop-shadow(0 0 20px rgba(0,0,0,0.5)',border : 0}}/></a>
				<img src="./img/logo.svg" alt="" height="200" style={{boxShadow:'none',filter:'drop-shadow(0 0 20px rgba(0,0,0,0.5)',border : 0}}/>
				<div className="introMainTitle">RedGradient</div>
				<p className="introMainDes">
					All about CSS gradient Edit. Design quickly and create your own gradients <br/>with a
					graphic pro-tools-grade editing system.
				</p>
				{/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
				{/*<p className="hero__subtitle">{siteConfig.tagline}</p>*/}
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/intro">
						Document
					</Link>
					<Link
						className="button button--secondary button--lg"
						to="https://red-gradient.com/build">
						Try Now!
					</Link>

				</div>
				<div className={'introMainImgContainer'}>
					<img src="./img/screenshot/Screenshot_1.png" alt="test" />
				</div>
			</div>
		// </header>
	);
}

export default function Home() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout
			// title={`Hello from ${siteConfig.title}`}
			// description="Description will go into a meta tag in <head />"
			>
			<HomepageHeader/>
			{/*<main>*/}
			{/*	<HomepageFeatures/>*/}
			{/*</main>*/}
		</Layout>
	);
}
