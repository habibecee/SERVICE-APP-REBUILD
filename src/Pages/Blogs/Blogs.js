import React from "react";
import sld1 from "../../Assets/Image/sld1.jpg";
import sld2 from "../../Assets/Image/sld2.jpg";
import sld3 from "../../Assets/Image/sld3.jpg";

const Blogs = (props) => {
	return (
		<main className="container p-3">
			<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="0"
						class="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							class="bd-placeholder-img"
							width="100%"
							height="100%"
							focusable="false"
							src={sld1}
						/>

						<div class="container">
							<div class="carousel-caption text-start">
								<h1>Example headline.</h1>
								<p>
									Some representative placeholder content for the first slide of
									the carousel.
								</p>
								<p>
									<a class="btn btn-lg btn-warning" href="#">
										Sign up today
									</a>
								</p>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img
							class="bd-placeholder-img"
							width="100%"
							height="100%"
							focusable="false"
							src={sld2}
						/>

						<div class="container">
							<div class="carousel-caption">
								<h1>Another example headline.</h1>
								<p>
									Some representative placeholder content for the second slide
									of the carousel.
								</p>
								<p>
									<a class="btn btn-lg btn-warning" href="#">
										Learn more
									</a>
								</p>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img
							class="bd-placeholder-img"
							width="100%"
							height="100%"
							focusable="false"
							src={sld3}
						/>

						<div class="container">
							<div class="carousel-caption text-end">
								<h1>One more for good measure.</h1>
								<p>
									Some representative placeholder content for the third slide of
									this carousel.
								</p>
								<p>
									<a class="btn btn-lg btn-warning" href="#">
										Browse gallery
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</main>
	);
};

export default Blogs;
