import React, { } from "react";
import Header from "../components/Header";
import { Link } from 'react-router-dom'


const Home = () => {
	const features = [
    {
      icon: 'assets/img/icons/feature-icon-01.svg',
      title: 'Construction',
      image: 'assets/img/providers/provider-32.jpg',
    },
    {
      icon: 'assets/img/icons/feature-icon-02.svg',
      title: 'Car Wash',
      image: 'assets/img/providers/provider-17.jpg',
    },
    {
      icon: 'assets/img/icons/feature-icon-03.svg',
      title: 'Electrical',
      image: 'assets/img/services/service-63.jpg',
    },
    {
      icon: 'assets/img/icons/feature-icon-04.svg',
      title: 'Cleaning',
      image: 'assets/img/services/service-09.jpg',
    },
    {
      icon: 'assets/img/icons/feature-icon-05.svg',
      title: 'Interior',
      image: 'assets/img/services/service-07.jpg',
    },
    {
      icon: 'assets/img/icons/feature-icon-06.svg',
      title: 'Carpentry',
      image: 'assets/img/providers/provider-01.jpg',
    },
    {
      icon: 'assets/img/icons/feature-icon-07.svg',
      title: 'Computer',
      image: 'assets/img/services/service-62.jpg',
    },
    {
      icon: 'assets/img/icons/feature-icon-08.svg',
      title: 'Plumbing',
      image: 'assets/img/providers/provider-07.jpg',
    },
  ]

  return (
	<>
	<div className="body-one main-wrapper">   		
		{/* <!-- /Header --> */}
		
		{/* <!-- Hero Section --> */}
		<section className="hero-section-two py-0">			
			<div className="banner-slider slider">
				<div className="banner">
					<img className="img-fluid" src="banner.jpg" alt="img"/>
				</div>
				<div className="banner">
					<img className="img-fluid" src="banner-02.jpg" alt="img"/>
				</div>
				<div className="banner">
					<img className="img-fluid" src="banner-03.jpg" alt="img"/>
				</div>
			</div>	
			<div className="banner-search aos" data-aos="fade-up">
				<div className="container">
					<div className="row">
						<div className="col-l-10 col-md-11 mx-auto">
							 <h1>
								Votre aide à domicile en un  <span>clic</span>
							</h1>
							<p>Ménage, garde d’enfants, aide aux seniors, bricolage…</p>
							<div className="search-box-two">
								<form action="search.html"> 
									<div className="search-input-new line">
										<i className="fas fa-tv bficon"></i>
										<div className="form-group mb-0">
											<input type="text" className="form-control" placeholder="What are you looking for?" />
										</div>
									</div>
									<div className="search-input-new">
										<i className="fas fa-location-arrow bficon"></i>
										<div className="form-group mb-0">
											<input type="text" className="form-control" placeholder="Your Location" /> 
										</div>
									</div>
									<div className="search-btn">
										<button className="btn search_service" type="submit"><i className="feather-search me-2"></i>  Recherche</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- /Hero Section --> */}
{/* 	
		
		{/* <!-- Feature Section --> */} 
		<section className="feature-section relative">
      {/* Decorative Background Images */}
      <div className="circle-lg d-none d-md-block absolute top-0 left-0">
        <img src="assets/img/bg/circle-lg.png" className="img-fluid" alt="bg" />
      </div>
      <div className="corner-dot absolute bottom-0 right-0">
        <img src="assets/img/bg/corner-dot.png" className="img-fluid" alt="bg" />
      </div>

      <div className="container">
        <div className="section-heading">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-up">
              <h2>Catégories</h2>
              <p>
                Notre plateforme est conçue avec une gamme de fonctionnalités innovantes répondant à vos besoins spécifiques.
              </p>
            </div>
            <div className="col-md-6 text-md-end" data-aos="fade-up">
              <Link to="/categories" className="btn btn-primary">
                 Voir tout <i className="ti ti-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {features.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <Link to="/service-details" className="feature-box d-block" data-aos="fade-up">
                <div className="feature-icon">
                  <span>
                    <img src={item.icon} alt={item.title} />
                  </span>
                </div>
                <h5>{item.title}</h5>
                <div className="feature-overlay">
                  <img src={item.image} alt={item.title} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    	</section>
		{/* <!-- /Feature Section --> */}

		  {/* Avantages */}
        <section id="avantages" className="work-section-two py-5">
          <div className="section-heading-two text-center ">
            <h2 >
              Trouvez l’aide à domicile qui vous ressemble
            </h2>
            <div className="h4 text-uppercase mb-4">
              POUR VOUS, POUR UN PROCHE, POUR AUJOURD’HUI… ET POUR DEMAIN.
            </div>
            <p>
            
              Avec WAP, accédez à un accompagnement personnalisé, choisissez un
              intervenant de confiance, gardez la même personne dans la durée, et
              simplifiez toutes vos démarches administratives.
              <br />
              Notre mission ?<br />
              👉 Vous offrir une aide adaptée, bienveillante et sécurisée, pour un
              quotidien plus serein à domicile.
            </p>
            <div
              className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 gap-4 position-relative"
              style={{ zIndex: 10 }}
            >
              {/* Première image */}
              <div
                className="shadow rounded overflow-hidden"
                style={{
                  width: "18rem",
                  height: "18rem",
                  backgroundColor: "rgba(229,229,229,0.5)",
                  transition: "box-shadow 0.3s",
                }}
              >
                <img
                  src="ICON1.png"
                  alt=""
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Cercles superposés */}
              <div
                className="d-flex align-items-center position-relative"
                style={{ marginLeft: "-2rem" }}
              >
                <div
                  className="bg-secondary rounded-circle"
                  style={{ width: "4rem", height: "4rem", opacity: 0.2 }}
                ></div>
                <div
                  className="bg-primary rounded-circle position-absolute"
                  style={{ width: "4rem", height: "4rem", left: "2.5rem", opacity: 0.6 }}
                ></div>
              </div>

              {/* Deuxième image */}
              <div
                className="shadow rounded overflow-hidden"
                style={{
                  width: "18rem",
                  height: "18rem",
                  backgroundColor: "rgba(229,229,229,0.5)",
                  transition: "box-shadow 0.3s",
                }}
              >
                <img
                  src="ICON2.png"
                  alt=""
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>	
		
		{/* <!-- Service Section --> */}
		<section className="service-section-two">			
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 aos" data-aos="fade-up">
						<div className="section-heading-two">						
							<h2>Services</h2>
							<p>Découvrez le meilleur de nos services. Vous ne serez pas déçu.
							</p>
						</div>
					</div>
					<div className="col-md-6 text-md-end aos" data-aos="fade-up">
						<a href="categories.html" className="btn btn-primary btn-view rounded-pill">View All</a>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="service-widget service-two aos" data-aos="fade-up">
							<div className="service-img">
								<a href="service-details.html">
									<img className="img-fluid serv-img" alt="Service Image" src="assets/img/categories/categories-07.jpg"/>
								</a>
								<div className="fav-item">
									<a href="categories.html"><span className="item-cat">Cleaning</span></a>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="feather-heart"></i>
									</a>
								</div>
								<div className="item-info">
									<a href="providers.html"><span className="item-img"><img src="assets/img/profiles/avatar-01.jpg" className="avatar" alt="User"/> Jeny Doe</span></a>
								</div>
							</div>
							<div className="service-content">
								<h3 className="title">
									<a href="service-details.html">Toughened Glass Fitting Services</a>
								</h3>
								<p><i className="feather-map-pin me-2"></i>Chicago, USA<span className="rate"><i className="feather-phone me-2"></i>301-591-8194</span></p>
								<div className="serv-info">
									<div className="rating">
										<i className="fas fa-star filled"></i>
										<i className="fas fa-star filled"></i>
										<i className="fas fa-star filled"></i>
										<i className="fas fa-star filled"></i>
										<i className="fas fa-star filled"></i>
										<span>(10)</span>
									</div>
									<h6>$25.00<span className="old-price">$35.00</span></h6>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="service-widget service-two aos" data-aos="fade-up">
							<div className="service-img">
								<a href="service-details.html">
									<img className="img-fluid serv-img" alt="Service Image" src="assets/img/categories/categories-08.jpg"/>
								</a>
								<div className="fav-item">
									<a href="categories.html"><span className="item-cat">Construction</span></a>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="feather-heart"></i>
									</a>
								</div>
								<div className="item-info">
									<a href="providers.html"><span className="item-img"><img src="assets/img/profiles/avatar-02.jpg" className="avatar" alt="User"/> Nick John</span></a>
								</div>
							</div>
							<div className="service-content">
								<h3 className="title">
									<a href="service-details.html">Car Repair Services</a>
								</h3>
								<p><i className="feather-map-pin me-2"></i>Montana, USA<span className="rate"><i className="feather-phone me-2"></i>615-325-1630</span></p>
								<div className="serv-info">
									<div className="rating">
										<i className="fas fa-star filled"></i>
										<i className="fas fa-star filled"></i>
										<i className="fas fa-star filled"></i>
										<i className="fas fa-star filled"></i>
										<i className="fas fa-star filled"></i>
										<span>(10)</span>
									</div>
									<h6>$45.00</h6>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="service-widget service-two aos" data-aos="fade-up">
							<div className="service-img">
								<a href="service-details.html">
									<img className="img-fluid serv-img" alt="Service Image" src="assets/img/categories/categories-09.jpg"/>
								</a>
								<div className="fav-item">
									<a href="categories.html"><span className="item-cat">Carpentry</span></a>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="feather-heart"></i>
									</a>
								</div>
								<div className="item-info">
									<a href="providers.html"><span className="item-img"><img src="assets/img/profiles/avatar-03.jpg" className="avatar" alt="User"/> james</span></a>
								</div>
							</div>
							<div className="service-content">
								<h3 className="title">
									<a href="service-details.html">Electric Panel Repairing Service</a>
								</h3>
								<p><i className="feather-map-pin me-2"></i>Montana, USA<span className="rate"><i className="feather-phone me-2"></i>901-489-4357</span></p>
								<div className="serv-info">
									<div className="rating">
										<i className="fas fa-star filled"></i>
										<i className="fas fa-star filled"></i>
										<i className="fas fa-star filled"></i>
										<i className="fas fa-star filled"></i>
										<i className="fas fa-star filled"></i>
										<span>(10)</span>
									</div>
									<h6>$45.00</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- /Service Section --> */}
		
		{/* <!-- Work Section --> */}
		<section className="work-section-two">		
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="section-heading sec-header aos" data-aos="fade-up">
							<h2>Comment ça marche</h2>
                  			<p>Un processus simple conçu pour rendre votre expérience fluide et sans tracas.</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="work-wrap-box work-first aos" data-aos="fade-up">
							<div className="work-icon">
								<span>
									<img src="assets/img/icons/work-icon-01.svg" alt="img"/>
								</span>
							</div>
							       <h5>Cherchez un service</h5>
									<p>Indiquez votre besoin (ménage, aide à domicile, etc.) et votre localisation avec facilité.
									</p>
						</div>						
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="work-wrap-box work-last aos" data-aos="fade-up">
							<div className="work-icon">
								<span>
									<img src="assets/img/icons/work-icon-02.svg" alt="img"/>
								</span>
							</div>
							<h5>Choisissez votre pro</h5>
							<p>
								Parcourez les profils, consultez les avis et vérifiez les disponibilités en un clin d’œil.
							</p>
						</div>						
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="work-wrap-box aos" data-aos="fade-up">
							<div className="work-flex">
								<div className="work-icon">
									<span>
										<img src="assets/img/icons/work-icon-03.svg" alt="img"/>
									</span>
								</div>
								<h5>Réservez en ligne</h5>
								<p>
								Planifiez, discutez et suivez tout depuis votre espace personnel en toute simplicité.
								</p>
							</div>						
						</div>						
					</div>
				</div>
			</div>
		</section>
		{/* <!-- /Work Section --> */}
		
		{/* <!-- Service Section --> */}
		{/* <section className="popular-section">			
			<div className="container">
				<div className="row">
					<div className="col-md-6 aos" data-aos="fade-up">
						<div className="section-heading-two">
							<h2>Most Popular Services</h2>
							<p>Explore the greates our services. You won’t be disappointed</p>
						</div>
					</div>
					<div className="col-md-6 text-md-end aos" data-aos="fade-up">
						<div className="owl-nav mynav1"></div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="owl-carousel popular-slider">
								
							<div className="service-widget service-two aos" data-aos="fade-up">
								<div className="service-img">
									<a href="service-details.html">
										<img className="img-fluid serv-img" alt="Service Image" src="assets/img/categories/categories-10.jpg"/>
									</a>
									<div className="fav-item">
										<a href="categories.html"><span className="item-cat">Construction</span></a>
										<a href="javascript:void(0)" className="fav-icon">
											<i className="feather-heart"></i>
										</a>
									</div>
									<div className="item-info">
										<a href="providers.html"><span className="item-img"><img src="assets/img/profiles/avatar-01.jpg" className="avatar" alt="User"/></span></a>
									</div>
								</div>
								<div className="service-content">
									<h3 className="title">
										<a href="service-details.html">Commercial Painting Services</a>
									</h3>
									<p><i className="feather-map-pin me-1"></i>Maryland, USA<span className="rate"><i className="feather-phone"></i>870-893-9351</span></p>
									<div className="serv-info">
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<span>(10)</span>
										</div>
										<h6>$20.00<span className="old-price">$35.00</span></h6>
									</div>
								</div>
							</div>
							<div className="service-widget service-two aos" data-aos="fade-up">
								<div className="service-img">
									<a href="service-details.html">
										<img className="img-fluid serv-img" alt="Service Image" src="assets/img/categories/categories-11.jpg"/>
									</a>
									<div className="fav-item">
										<a href="categories.html"><span className="item-cat">Carpentry</span></a>
										<a href="javascript:void(0)" className="fav-icon">
											<i className="feather-heart"></i>
										</a>
									</div>
									<div className="item-info">
										<a href="providers.html"><span className="item-img"><img src="assets/img/profiles/avatar-02.jpg" className="avatar" alt="User"/></span></a>
									</div>
								</div>
								<div className="service-content">
									<h3 className="title">
										<a href="service-details.html">Wooden Carpentry Work</a>
									</h3>
									<p><i className="feather-map-pin me-1"></i>Alabama, USA<span className="rate"><i className="feather-phone"></i>248-905-6719</span></p>
									<div className="serv-info">
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<span>(10)</span>
										</div>
										<h6>$500.00</h6>
									</div>
								</div>
							</div>
							<div className="service-widget service-two aos" data-aos="fade-up">
								<div className="service-img">
									<a href="service-details.html">
										<img className="img-fluid serv-img" alt="Service Image" src="assets/img/categories/categories-12.jpg"/>
									</a>
									<div className="fav-item">
										<a href="categories.html"><span className="item-cat">Cleaning</span></a>
										<a href="javascript:void(0)" className="fav-icon">
											<i className="feather-heart"></i>
										</a>
									</div>
									<div className="item-info">
										<a href="providers.html"><span className="item-img"><img src="assets/img/profiles/avatar-03.jpg" className="avatar" alt="User"/></span></a>
									</div>
								</div>
								<div className="service-content">
									<h3 className="title">
										<a href="service-details.html">House Cleaning Services</a>
									</h3>
									<p><i className="feather-map-pin me-1"></i>California, USA<span className="rate"><i className="feather-phone"></i>636-527-0374</span></p>
									<div className="serv-info">
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<span>(10)</span>
										</div>
										<h6>$80.00<span className="old-price">$96.00</span></h6>
									</div>
								</div>
							</div>
							<div className="service-widget service-two aos" data-aos="fade-up">
								<div className="service-img">
									<a href="service-details.html">
										<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-08.jpg"/>
									</a>
									<div className="fav-item">
										<a href="categories.html"><span className="item-cat">Cleaning</span></a>
										<a href="javascript:void(0)" className="fav-icon">
											<i className="feather-heart"></i>
										</a>
									</div>
									<div className="item-info">
										<a href="providers.html"><span className="item-img"><img src="assets/img/profiles/avatar-04.jpg" className="avatar" alt="User"/></span></a>
									</div>
								</div>
								<div className="service-content">
									<h3 className="title">
										<a href="service-details.html">Steam Car Wash</a>
									</h3>
									<p><i className="feather-map-pin me-1"></i>Texas, USA<span className="rate"><i className="feather-phone"></i>908-734-7033</span></p>
									<div className="serv-info">
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<span>(10)</span>
										</div>
										<h6>$500.00</h6>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section> */}
		{/* <!-- /Service Section --> */}

		{/* <!-- /Providers Section --> */}
		{/* <section className="providers-section-two">			
			<div className="container">
				<div className="row">
					<div className="col-md-6 aos" data-aos="fade-up">						
						<div className="section-heading-two white-text">					
							<h2>Top Providers</h2>
							<p>Browse our top Providers to appoint for your service</p>	
						</div>
					</div>
					<div className="col-md-6 text-md-end aos" data-aos="fade-up">
						<a href="providers.html" className="btn btn-primary btn-view rounded-pill">View All<i className="feather-arrow-right-circle"></i></a>
					</div>
				</div>
				<div className="row  aos" data-aos="fade-up">
					<div className="col-lg-3 col-sm-6">
						<div className="providerset provider-box">
							<div className="providerset-img">
								<a href="provider-details.html">
									<img src="assets/img/provider/provider-11.jpg" alt="img"/>
								</a>
							</div>
							<div className="providerset-content">
								<div className="providerset-price">
									<div className="providerset-name">
										<h4><a href="provider-details.html">John Smith</a><i className="fa fa-check-circle" aria-hidden="true"></i></h4>
										<span>Electrician</span>
									</div>
									<div className="providerset-prices">
										<h6>$20.00<span>/hr</span></h6>
									</div>
								</div>
								<div className="provider-rating">
									<div className="rate">
										<i className="fas fa-star filled"></i><span>4.8</span>
									</div>
									<a href="provider-details.html" className="btn btn-pink">View Details</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="providerset provider-box">
							<div className="providerset-img">
								<a href="provider-details.html">
									<img src="assets/img/provider/provider-12.jpg" alt="img"/>
								</a>
							</div>
							<div className="providerset-content">
								<div className="providerset-price">
									<div className="providerset-name">
										<h4><a href="provider-details.html">Michael</a><i className="fa fa-check-circle" aria-hidden="true"></i></h4>
										<span>Carpenter</span>
									</div>
									<div className="providerset-prices">
										<h6>$50.00<span>/hr</span></h6>
									</div>
								</div>
								<div className="provider-rating">
									<div className="rate">
										<i className="fas fa-star filled"></i><span>4.8</span>
									</div>
									<a href="provider-details.html" className="btn btn-pink">View Details</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="providerset provider-box">
							<div className="providerset-img">
								<a href="provider-details.html">
									<img src="assets/img/provider/provider-13.jpg" alt="img"/>
								</a>
							</div>
							<div className="providerset-content">
								<div className="providerset-price">
									<div className="providerset-name">
										<h4><a href="provider-details.html">Antoinette</a><i className="fa fa-check-circle" aria-hidden="true"></i></h4>
										<span>Cleaner</span>
									</div>
									<div className="providerset-prices">
										<h6>$25.00<span>/hr</span></h6>
									</div>
								</div>
								<div className="provider-rating">
									<div className="rate">
										<i className="fas fa-star filled"></i><span>4.8</span>
									</div>
									<a href="provider-details.html" className="btn btn-pink">View Details</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="providerset provider-box">
							<div className="providerset-img">
								<a href="provider-details.html">
									<img src="assets/img/provider/provider-14.jpg" alt="img"/>
								</a>
							</div>
							<div className="providerset-content">
								<div className="providerset-price">
									<div className="providerset-name">
										<h4><a href="provider-details.html">Thompson</a><i className="fa fa-check-circle" aria-hidden="true"></i></h4>
										<span>Mechanic</span>
									</div>
									<div className="providerset-prices">
										<h6>$25.00<span>/hr</span></h6>
									</div>
								</div>
								<div className="provider-rating">
									<div className="rate">
										<i className="fas fa-star filled"></i><span>4.8</span>
									</div>
									<a href="provider-details.html" className="btn btn-pink">View Details</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section> */}
		{/* <!-- /Providers Section --> */}
		
		{/* <!-- pricing Section --> */}
		<section className="price-sections">			
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center aos" data-aos="fade-up">
						<div className="section-heading sec-header">
							<h2>Forfaits tarifaires</h2>
							<p>Les nouveaux prestataires de services peuvent tester la plateforme. </p>
						</div>
					</div>
				</div>
				<div className="row aos" data-aos="fade-up">
					<div className="col-lg-4 col-sm-12">
						<div className="pricing-plans price-new">
							<div className="pricing-planshead">
								<h6>x<span>/month</span></h6>
								<h4>Starter</h4>
								<h5>Basic service description and up to 3 images</h5>
							</div>
							<div className="pricing-planscontent">
								<ul>
									<li>
										<i className="fa fa-check-circle me-2"></i>
										<span>Ability to list up to 3 services</span>
									</li>
									<li>
										<i className="fa fa-check-circle me-2"></i>
										<span>Access to buyer inquiries</span>
									</li>
									<li>
										<i className="fa fa-check-circle me-2"></i>
										<span>3% transaction fee on sales</span>
									</li>
									<li>
										<i className="fa fa-check-circle me-2"></i>
										<span>New service providers can test platform.</span>
									</li>
								</ul>
								<div className="pricing-btn">
									<a href="search.html" className="btn btn-view">Choose Plan</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-12">
						<div className="pricing-plans price-new active">
							<div className="pricing-planshead">
								<div className="price-block">
									<span className="popular">MOST POPULAR</span>
								</div>
								<h6>x<span>/month</span></h6>
								<h4>Company</h4>
								<h5>Enhanced service description with video support</h5>
							</div>
							<div className="pricing-planscontent">
								<ul>
									<li>
										<i className="fa fa-check-circle me-2"></i>
										<span>Ability to list up to 10 services</span>
									</li>
									<li>
										<i className="fa fa-check-circle me-2"></i>
										<span>Up to 10 images per service</span>
									</li>
									<li>
										<i className="fa fa-check-circle me-2"></i>
										<span>Custom pricing for enterprise-level service</span>
									</li>
									<li>
										<i className="fa fa-check-circle me-2"></i>
										<span>3% transaction fee on sales</span>
									</li>
									<li>
										<i className="fa fa-check-circle me-2"></i>
										<span>New service providers can test the platform.</span>
									</li>
								</ul>
								<div className="pricing-btn">
									<a href="search.html" className="btn btn-view">Choose Plan</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-12">
						<div className="pricing-plans price-new">
							<div className="pricing-planshead">
								<h6>x<span>/month</span></h6>
								<h4>Professional</h4>
								<h5>Advanced service with multiple media types</h5>
							</div>
							<div className="pricing-planscontent">
								<ul>
									<li>
										<i className="fa fa-check-circle me-2"></i>
										<span>Unlimited service listings</span>
									</li>
									<li>
										<i className="fa fa-check-circle me-2"></i>
										<span>Unlimited images per service</span>
									</li>
									<li>
										<i className="fa fa-check-circle me-2"></i>
										<span>Custom pricing for enterprise-level service</span>
									</li>
									<li>
										<i className="fa fa-check-circle me-2"></i>
										<span>2% transaction fee on sales</span>
									</li>
								</ul>
								<div className="pricing-btn">
									<a href="search.html" className="btn btn-view">Choose Plan</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- /pricing Section --> */}
		
		{/* <!-- App Section --> */}
		{/* <section className="app-section-two">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 col-12">
						<div className="appimg aos" data-aos="fade-up">
							<img src="assets/img/mobile.svg" className="img-fluid" alt="img"/>
						</div>
					</div>
					<div className="col-md-6 col-12">	
						<div className="download-sec">
							<div className="section-heading-two">
								<p>Download App</p>
								<h2>We're available on mobile Just download it!</h2>
							</div>
							<div className="heading aos" data-aos="fade-up">
								<p>
									Whether you're looking to our app brings everything you need right
									to your fingertips.  Enjoy a smooth and intuitive experience designed
									with you in mind.
								</p>
								<h6>Scan the QR code to get the app now</h6>
								<div className="scan-img">
									<img src="assets/img/scan-img.png" className="img-fluid" alt="img"/>
								</div>
							</div>
							<div className="downlaod-btn aos" data-aos="fade-up">
								<a href="javascript:void(0);"><img src="assets/img/appstore.svg" alt="img"/></a>
								<a href="javascript:void(0);"><img src="assets/img/googleplay.svg" alt="img"/></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section> */}
		{/* <!-- /App Section --> */}
		
		{/* <!-- Client Section --> */}
		<section className="client-section-two">			
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="section-heading sec-header aos" data-aos="fade-up">
							<h2>Testimonials</h2>
							<p>Description highlights the value of client feedback, showcases real testimonials</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 d-flex">
						<div className="client-box w-100 aos" data-aos="fade-up">
							<div className="client-content">
								<div className="rating">
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
								</div>
								<h6>“The best service”</h6>
								<p>
									Versatile and user-friendly platform for freelancers and businesses alike. Its interface is 
									clean and intuitive, making it easy to 
									post jobs, browse profiles, and manage projects. The range of services is impressive,
								</p>
							</div>
							<div className="client-img">
								<a href="#">
									<img className="img-fluid" alt="Image" src="assets/img/profiles/avatar-01.jpg"/>
								</a>
								<div className="client-name">
									<h5>Sophie Moore</h5>
									<h6>Head of Design at Google</h6>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 d-flex">
						<div className="client-box w-100 aos" data-aos="fade-up">
							<div className="client-content">
								<div className="rating">
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
								</div>
								<h6>“Awesome Works”</h6>
								<p>
									Excels in providing a quick and easy way to find help for everyday tasks and home repairs. 
									The platform is straightforward, allowing users to post tasks and receive  from local 
								</p>
							</div>
							<div className="client-img">
								<a href="#">
									<img className="img-fluid" alt="Image" src="assets/img/profiles/avatar-02.jpg"/>
								</a>
								<div className="client-name">
									<h5>Mike Hussy</h5>
									<h6>Tech Lead</h6>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 d-flex">
						<div className="client-box w-100 aos" data-aos="fade-up">
							<div className="client-content">
								<div className="rating">
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
								</div>
								<h6>“Brilliant Work”</h6>
								<p>
									Offers a comprehensive marketplace for finding local service professionals across 
									a wide range of categories, including home improvement, events, and personal services. 
									The platform is user-friendly, 
								</p>
							</div>
							<div className="client-img">
								<a href="#">
									<img className="img-fluid" alt="Image" src="assets/img/profiles/avatar-03.jpg"/>
								</a>
								<div className="client-name">
									<h5>Tom Beker</h5>
									<h6>Ads Chairman</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- /Client Section --> */}
		
		{/* <!-- Blog Section --> */}
		{/* <section className="blog-section blog-section-two">			
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center aos" data-aos="fade-up">
						<div className="section-heading sec-header">
							<h2>Our Recent News & Blog</h2>
							<p>Here’s a compelling blog description designed to attract readers and provide a clear idea of what they can expect from your blog:</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 d-flex">
						<div className="blog blog-new flex-fill aos" data-aos="fade-up">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-15.jpg" alt="Post Image"/></a>
								<div className="date">
									25<span>Dec</span>
								</div>
								<ul className="blog-item">
									<li>
										<div className="post-author">
											<a href="#"><i className="feather-user"></i><span>Hal Lewis</span></a>
										</div>
									</li>
									<li><i className="feather-message-square"></i>Comments (5)</li>
								</ul>
							</div>
							<div className="blog-content mb-0">
								<h3 className="blog-title">
									<a href="blog-details.html">Take Advantage of Trial Periods or Consultations</a>
								</h3>
								<p>In today’s fast-paced business world, finding the right services to support your growth can be a game...</p>
							</div>
						</div>					
					</div>
					<div className="col-lg-4 col-md-6 d-flex">
						<div className="blog blog-new flex-fill  aos" data-aos="fade-up">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-16.jpg" alt="Post Image"/></a>
								<div className="date">
									25<span>Dec</span>
								</div>
								<ul className="blog-item">
									<li>
										<div className="post-author">
											<a href="#"><i className="feather-user"></i><span>JohnDoe</span></a>
										</div>
									</li>
									<li><i className="feather-message-square"></i>Comments (5)</li>
								</ul>
							</div>
							<div className="blog-content mb-0">
								<h3 className="blog-title">
									<a href="blog-details.html">Maximize Your Business Potential with the Right Service</a>
								</h3>
								<p>One of the biggest advantages of using a service marketplace is the access to a wide range of services.</p>
							</div>
						</div>						
					</div>
					<div className="col-lg-4 col-md-6 d-flex">
						<div className="blog blog-new flex-fill aos" data-aos="fade-up">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-17.jpg" alt="Post Image"/></a>
								<div className="date">
									25<span>Dec</span>
								</div>
								<ul className="blog-item">
									<li>
										<div className="post-author">
											<a href="#"><i className="feather-user"></i><span>Greg Avery</span></a>
										</div>
									</li>
									<li><i className="feather-message-square"></i>Comments (5)</li>
								</ul>
							</div>
							<div className="blog-content mb-0">
								<h3 className="blog-title">
									<a href="blog-details.html">Specific features and benefits of your service marketplace.</a>
								</h3>
								<p>Before hiring a service provider, check their reviews and ratings on the marketplace...</p>
							</div>
						</div>							
					</div>
				</div>
				<div className="text-center mt-4">
					<a href="blogs.html" className="btn btn-primary rounded-pill">View All Blogs</a>
				</div>
			</div>
		</section> */}
		{/* <!-- /Blog Section --> */}

		{/* <!-- Partners Section --> */}
		{/* <section className="blog-section pt-0 parter-section-two">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center aos " data-aos="fade-up">
						<div className="section-heading sec-header">
							<h2>Our Partners</h2>
							<p>Discover how our marketplace can support your business growth.</p>
						</div>
						<div className="owl-carousel partners-slider aos " data-aos="fade-up">
							<div className="partner-img">
								<img src="assets/img/partner/partner1.svg" alt="img"/>
							</div>
							<div className="partner-img">
								<img src="assets/img/partner/partner2.svg" alt="img"/>
							</div>
							<div className="partner-img">
								<img src="assets/img/partner/partner3.svg" alt="img"/>
							</div>
							<div className="partner-img">
								<img src="assets/img/partner/partner4.svg" alt="img"/>
							</div>
							<div className="partner-img">
								<img src="assets/img/partner/partner5.svg" alt="img"/>
							</div>
							<div className="partner-img">
								<img src="assets/img/partner/partner6.svg" alt="img"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section> */}
		{/* <!-- Partners Section -->		 */}
		
		{/* <!-- Free Trial --> */}
		<section className="section-offer pb-0">	
			<div className="container">
				<div className="row  aos" data-aos="fade-up">
					<div className="col-md-12">
						<div className="offer-paths offer-sec">
							<div className="offer-path-content">
								<div className="section-heading-two">
									 <p>Une Communauté Qui Vous Ressemble</p>
									<h3 className="mb-0">
										REJOIGNEZ UNE COMMUNAUTÉ...
									</h3>
								</div>
								<p>
									Des milliers de familles et professionnels...
								</p>
								<a href="free-trail.html" className="btn btn-dark rounded-pill">Créer mon compte gratuitement<i className="feather-arrow-right-circle ms-2"></i></a>
							</div>
							<div className="offer-pathimg">
								<img src="assets/img/offer-img.png" alt="img"/>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</section>
		{/* <!-- /Free Trial --> */}
		
		{/* <!-- Cursor --> */}
		<div className="mouse-cursor cursor-outer"></div>
		<div className="mouse-cursor cursor-inner"></div>
		{/* <!-- /Cursor -->	 */}
			{/* <!-- Cursor --> */}
			<div className="xb-cursor tx-js-cursor">
				<div className="xb-cursor-wrapper">
					<div className="xb-cursor--follower xb-js-follower"></div>
				</div>
			</div>
			{/* <!-- /Cursor --> */}
	</div>
</>
  );
};

export default Home;
