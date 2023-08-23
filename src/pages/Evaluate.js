import React from 'react';
import LayoutInner from '../components/layoutPages';

function Evaluate () {
return (
<LayoutInner>
<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
	<div className="container text-center py-5">
		<h1 className="display-2 text-dark mb-4 animated slideInDown">Evaluate</h1>
		<nav aria-label="breadcrumb animated slideInDown">
			<ol className="breadcrumb justify-content-center mb-0">
				<li className="breadcrumb-item"><a href="/">Home</a></li>
				<li className="breadcrumb-item text-dark" aria-current="page">Evaluate</li>
			</ol>
		</nav>
	</div>
</div>

<div className="container-xxl py-5">
	<div className="container">
		<div className="row g-5">
			<div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
				<div className="section-title">
					<h1 className="display-6">Welcome to Evaluate</h1>
				</div>

			</div>
		</div>
	</div>
</div>


</LayoutInner>
);
};

export default Evaluate;
