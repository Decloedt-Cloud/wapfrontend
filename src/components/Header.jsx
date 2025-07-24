import React from "react";

const Header = () => {
  return (
	<>
 	<div className="body-one main-wrapper">
		<header className="header header-two">
			<div className="container">
				<nav className="navbar navbar-expand-lg header-nav">
					<div className="navbar-header">
						<a id="mobile_btn" href="javascript:void(0);">
							<span className="bar-icon">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</a>
						<a href="/" className="navbar-brand logo">
							<img src="logo_wap.png" className="img-fluid" alt="Logo" />
						</a>
						<a href="index.html" className="navbar-brand logo-small">
							<img src="assets/img/logo-icon.png" className="img-fluid" alt="Logo"/>
						</a>
					</div>
					<div className="main-menu-wrapper">
						<div className="menu-header">
							<a href="/" className="menu-logo">
								<img src="assets/img/logo.svg" className="img-fluid" alt="Logo"/>
							</a>
							<a id="menu_close" className="menu-close" href="javascript:void(0);"> <i className="fas fa-times"></i></a>
						</div>
						<ul className="main-nav">
							<li className="has-submenu megamenu active">
								{/* <a href="javascript:void(0);">Home <i className="fas fa-chevron-down"></i></a> */}
									<a href="javascript:void(0);">Accueil</a>
								{/* <ul className="submenu mega-submenu">
									<li>
										<div className="megamenu-wrapper">
											<div className="row">
												<div className="col-lg-2">
													<div className="single-demo">
														<div className="demo-img">
															<a href="index.html"><img src="assets/img/home-01.jpg"
																	className="img-fluid" alt="img"/></a>
														</div>
														<div className="demo-info">
															<a href="index.html">Home</a>
														</div>
													</div>
												</div>
												<div className="col-lg-2">
													<div className="single-demo">
														<div className="demo-img">
															<a href="index-2.html"><img src="assets/img/home-02.jpg"
																	className="img-fluid" alt="img"/></a>
														</div>
														<div className="demo-info">
															<a href="index-2.html">Electrical Home</a>
														</div>
													</div>
												</div>
												<div className="col-lg-2">
													<div className="single-demo active">
														<div className="demo-img">
															<a href="index-3.html"><img src="assets/img/home-3.jpg"
																	className="img-fluid" alt="img"/></a>
														</div>
														<div className="demo-info">
															<a href="index-3.html">Cleaning Home</a>
														</div>
													</div>
												</div>
												<div className="col-lg-2">
													<div className="single-demo">
														<div className="demo-img">
															<a href="index-4.html"><img src="assets/img/home-04.jpg"
																	className="img-fluid" alt="img"/></a>
														</div>
														<div className="demo-info">
															<a href="index-4.html">Saloon Home</a>
														</div>
													</div>
												</div>
												<div className="col-lg-2">
													<div className="single-demo">
														<div className="demo-img">
															<a href="index-5.html"><img src="assets/img/home-05.jpg"
																	className="img-fluid" alt="img"/></a>
														</div>
														<div className="demo-info">
															<a href="index-5.html">Catering Home</a>
														</div>
													</div>
												</div>
												<div className="col-lg-2">
													<div className="single-demo">
														<div className="demo-img">
															<a href="index-6.html"><img src="assets/img/home-06.jpg"
																	className="img-fluid" alt="img"/></a>
														</div>
														<div className="demo-info">
															<a href="index-6.html">Car Wash Home</a>
														</div>
													</div>
												</div>
												<div className="col-lg-2">
													<div className="single-demo">
														<div className="demo-img">
															<a href="index-7.html"><img src="assets/img/home-09.jpg"
																	className="img-fluid" alt="img"/></a>
														</div>
														<div className="demo-info">
															<a href="index-7.html">House Problem Home</a>
														</div>
													</div>
												</div>
												<div className="col-lg-2">
													<div className="single-demo">
														<div className="demo-img">
															<a href="index-8.html"><img src="assets/img/home-08.jpg"
																	className="img-fluid" alt="img"/></a>
														</div>
														<div className="demo-info">
															<a href="index-8.html">Pet Grooming Home</a>
														</div>
													</div>
												</div>
												<div className="col-lg-2">
													<div className="single-demo">
														<div className="demo-img">
															<a href="index-9.html"><img src="assets/img/home-10.jpg"
																	className="img-fluid" alt="img"/></a>
														</div>
														<div className="demo-info">
															<a href="index-9.html">Mechanic Home</a>
														</div>
													</div>
												</div>
												<div className="col-lg-2">
													<div className="single-demo">
														<div className="demo-img">
															<a href="index-10.html"><img src="assets/img/home-07.jpg"
																	className="img-fluid" alt="img"/></a>
														</div>
														<div className="demo-info">
															<a href="index-10.html">Cleaning Home</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul> */}
							</li>
							{/* <li className="has-submenu">
								<a href="javascript:void(0);">Services <i className="fas fa-chevron-down"></i></a>
								<ul className="submenu">
									<li><a href="services-grid.html">Service Grid</a></li>
								<li><a href="services-list.html">Service List</a></li>
									<li className="has-submenu">
										<a href="javascript:void(0);">Service Details</a>
										<ul className="submenu">
											<li><a href="service-details.html">Service Details 1</a></li>
											<li><a href="service-details2.html">Service Details 2</a></li>
										</ul>
									</li>
									<li><a href="service-request.html">Service Request</a></li>
								<li><a href="search.html">Search</a></li>
									<li className="has-submenu">
										<a href="javascript:void(0);">Providers</a>
										<ul className="submenu">
											<li><a href="providers.html">Providers List</a></li>
											<li><a href="provider-details.html">Providers Details</a></li>
										</ul>
									</li>
									<li className="has-submenu">
									<a href="javascript:void(0);">Categories</a>
									<ul className="submenu">
										<li><a href="categories.html">Categories 1</a></li>
										<li><a href="categories-2.html">Categories 2</a></li>
									</ul>
								</li>
								<li><a href="create-service.html">Create Service</a></li>
								</ul>
							</li>
							<li className="has-submenu">
								<a href="javascript:void(0);">Customers <i className="fas fa-chevron-down"></i></a>
								<ul className="submenu">
									<li><a href="user-dashboard.html">Dashboard</a></li>
									<li><a href="user-booking-list.html">Booking</a></li>
									<li><a href="favourites.html">Favorites</a></li>
									<li><a href="customer-wallet.html">Wallet</a></li>
									<li><a href="customer-reviews.html">Reviews</a></li>
									<li><a href="user-chat.html">Chat</a></li>
									<li><a href="account-settings.html">Settings</a></li>
								</ul>
							</li>
							<li className="has-submenu">
								<a href="javascript:void(0);">Providers <i className="fas fa-chevron-down"></i></a>
								<ul className="submenu">
									<li><a href="provider-dashboard.html">Dashboard</a></li>
									<li><a href="provider-services.html">My Services</a></li>
									<li><a href="provider-booking.html">Booking</a></li>
									<li><a href="provider-payout.html">Payout</a></li>
									<li className="has-submenu">
										<a href="javascript:void(0);">Settings</a>
										<ul className="submenu">
											<li><a href="provider-appointment-settings.html">Appointment
													Settings</a></li>
											<li><a href="provider-accounts-settings.html">Account Settings</a></li>
											<li><a href="provider-social-profile.html">Social Profiles</a></li>
											<li><a href="provider-security-settings.html">Security</a></li>
											<li><a href="provider-plan.html">Plan & Billings</a></li>
											<li><a href="provider-notifcations.html">Notifications</a></li>
											<li><a href="provider-connected-apps.html">Connected Apps</a></li>
										</ul>
									</li>
									<li><a href="provider-holiday.html">Holidays & Leave</a></li>
									<li><a href="provider-coupons.html">Coupons</a></li>
									<li><a href="provider-offers.html">Offers</a></li>
									<li><a href="provider-reviews.html">Reviews</a></li>
									<li><a href="provider-earnings.html">Earnings</a></li>
									<li><a href="provider-chat.html">Chat</a></li>
								</ul>
							</li>
							<li className="nav-item has-submenu">
								<a className="nav-link" href="javascript:void(0);">Pages<i className="fas fa-chevron-down"></i></a>
								<ul className="submenu">
									<li><a href="about-us.html">About</a></li>
									<li className="has-submenu">
										<a href="blog-grid.html">Blog</a>
										<ul className="submenu">
											<li><a href="blog-grid.html">Blog Grid</a></li>
											<li><a href="blogs.html">Blog List</a></li>
											<li><a href="blog-details.html">Blog Details</a></li>
										</ul>
									</li>
									<li><a href="contact-us.html">Contact Us</a></li>
									<li><a href="how-it-works.html">How It Works</a></li>
									<li className="has-submenu">
										<a href="javascript:void(0);">Error Page</a>
										<ul className="submenu">
											<li><a href="error-404.html">404 Error</a></li>
											<li><a href="error-500.html">500 Error</a></li>
										</ul>
									</li>
									<li className="has-submenu">
										<a href="javascript:void(0);">Authentication</a>
										<ul className="submenu">
											<li><a href="login.html">Login</a></li>
											<li><a href="register.html">Customer Signup</a></li>
											<li><a href="provider-register.html">Provider Signup</a></li>
											<li><a href="reset-password.html">Reset Password</a></li>
											<li><a href="otp-phone.html">Phone OTP</a></li>
											<li><a href="otp-email.html">Email OTP</a></li>
											<li><a href="free-trail.html">Free Trial</a></li>
										</ul>
									</li>
									<li className="has-submenu">
										<a href="javascript:void(0);">Booking</a>
										<ul className="submenu">
											<li><a href="booking.html">Booking 1</a></li>
											<li><a href="user-booking.html">Booking 2</a></li>
											<li><a href="booking-payment.html">Booking Checkout</a></li>
											<li><a href="booking-success.html">Booking Success</a></li>
											<li><a href="booking-details.html">Booking Details</a></li>
										</ul>
									</li>
									<li><a href="categories.html">Categories</a></li>
									<li><a href="pricing.html">Pricing Plan</a></li>
									<li><a href="faq.html">FAQ</a></li>
									<li><a href="maintenance.html">Maintenance</a></li>
									<li><a href="coming-soon.html">Coming Soon</a></li>
									<li><a href="privacy-policy.html">Privacy Policy</a></li>
									<li><a href="terms-condition.html">Terms & Conditions</a></li>
									<li><a href="session-expired.html">Session Expired</a></li>
								<li><a href="installer.html">Installer</a></li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="admin/index.html">Admin</a>
							</li> */}
						</ul>
					</div>
					{/* <ul className="nav header-navbar-rht">
						<li className="nav-item">
							<a className="nav-link header-login" href="/JoinWap"><i className="feather-user"></i> Register / Login</a>
						</li>
					</ul> */}
					<ul className="nav header-navbar-rht">
						<li className="nav-item">
							<a className="nav-link header-login" href="/JoinWap">
							<i className="feather-user"></i> Login
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link header-login" href="/LoginWap">
							<i className=""></i> Rejoindre wap
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		</div>
	  </>
  );
};

export default Header;