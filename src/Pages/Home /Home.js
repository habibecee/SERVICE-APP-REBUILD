import React from "react";
import photo1 from "../../Assets/Image/svg1.jpg";
import photo2 from "../../Assets/Image/svg2.jpg";

const Home = (props) => {
	return (
		<main className="container p-3">
			<div className="p-4 p-md-5 mb-4 rounded shadow-lg d-flex align-items-center justify-content-center text-center homeDiv">
				<div className="col-md-6 px-0">
					<h1 className="display-4 fst-italic">
						Title of a longer featured blog post
					</h1>
					<p className="lead my-3">
						Multiple lines of text that form the lede, informing new readers
						quickly and efficiently about what’s most interesting in this post’s
						contents.
					</p>
					<p className="lead mb-0">
						<a href="#" className="text-info fw-bold">
							Continue reading...
						</a>
					</p>
				</div>
			</div>
			<div className="row mb-2 mt-4 p-3 ">
				<div className="col-6 p-2 homeDiv box2">
					<div className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative p-3">
						<div className="col p-4 d-flex flex-column position-static">
							<strong className="d-inline-block mb-2 text-primary">
								World
							</strong>
							<h3 className="mb-0">Featured post</h3>
							<div className="mb-1 text-muted">Nov 12</div>
							<p className="card-text mb-auto">
								This is a wider card with supporting text below as a natural
								lead-in to additional content.
							</p>
							<a href="#" className="stretched-link text-success fw-bold">
								Continue reading
							</a>
						</div>
						<div className="col-auto d-none d-lg-block">
							<img
								className="bd-placeholder-img"
								width="200"
								height="250"
								src={photo1}
								focusable="false"
							/>
						</div>
					</div>
				</div>
				<div className="col-5 p-2 homeDiv">
					<div className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative p-3">
						<div className="col p-4 d-flex flex-column position-static">
							<strong className="d-inline-block mb-2 text-warning">
								Design
							</strong>
							<h3 className="mb-0">Post title</h3>
							<div className="mb-1 text-muted">Nov 11</div>
							<p className="mb-auto">
								This is a wider card with supporting text below as a natural
								lead-in to additional content.
							</p>
							<a href="#" className="stretched-link text-success fw-bold">
								Continue reading
							</a>
						</div>
						<div className="col-auto d-none d-lg-block">
							<img
								className="bd-placeholder-img"
								width="200"
								height="250"
								src={photo2}
								focusable="false"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
