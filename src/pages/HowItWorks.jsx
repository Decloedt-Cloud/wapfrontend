import React, { } from "react";

const HowItWorks = () => {
  return (
    <>
    <div className="main-wrapper">	
		{/* <!-- Breadcrumb --> */}
		<div className="breadcrumb-bar text-center">
		<div className="container">
			<div className="row">
				<div className="col-md-12 col-12">
					<h2 className="breadcrumb-title mb-2">Comment ça marche</h2>
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb justify-content-center mb-0">
							<li className="breadcrumb-item">Accueil</li>
							<li className="breadcrumb-item active" aria-current="page">Comment ça marche</li>
						</ol>
					</nav>
				</div>
			</div>
			<div className="breadcrumb-bg">
				<img src="assets/img/bg/breadcrumb-bg-01.png" className="breadcrumb-bg-1" alt="Img"/>
				<img src="assets/img/bg/breadcrumb-bg-02.png" className="breadcrumb-bg-2" alt="Img"/>
			</div>
		</div>
		</div>
		{/* <!-- /Breadcrumb --> */}

		{/* <!-- Page Wrapper --> */}
		<div className="page-wrapper">
		<div className="content">
			<div className="container">
				{/* <!-- How it works--> */}
				<div className="row align-items-center justify-content-center">
					<div className="col-md-8 ">
						<div className="work-wrap work-wrap-acc">
							<span>01</span>
							<h1 className="display-6">Créez votre compte</h1>
							<p>Inscrivez-vous gratuitement sur la plateforme WAP en tant que particulier, aidant ou
                                professionnel à domicile. Renseignez simplement vos informations essentielles (nom, email,
                                besoins ou compétences), créez un mot de passe sécurisé, et accédez à votre espace
                                personnel. Vous pourrez ensuite gérer votre profil, planifier ou proposer des prestations, et
                                suivre toutes vos interactions.</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="work-img d-none d-md-block">
							<img src="Login-rafiki.png" className="img-fluid" alt="image"/>
						</div>
					</div>
					<div className="work-wrap-img d-none d-md-block">
						<img src="assets/img/bg/bg-12.png" alt="img" className="img-fluid"/>
					</div>
				</div>
				
				<div className="row align-items-center justify-content-center">
					<div className="col-md-4  order-last order-md-first">
						<div className="work-img d-none d-md-block">
							<img src="Delivery-rafiki.png" className="img-fluid" alt="image"/>
						</div>
					</div>
					<div className="col-md-8 d-flex justify-content-center">
						<div className="work-wrap work-wrap-post">
							<span>02</span>
							<h1 className="display-6">Trouvez ou proposez un service</h1>
							<p>Si vous êtes un particulier, recherchez un aidant ou un professionnel selon vos critères: zone
                            géographique, type d'aide, disponibilité, avis... Si vous êtes un intervenant, publiez vos services,
                            mettez en avant votre expérience et recevez automatiquement des demandes ciblées de clients. La
                            messagerie intégrée vous permet d'échanger avant toute réservation.
                            </p>
						</div>
					</div>
					<div className="work-wrap-img d-none d-md-block">
						<img src="assets/img/bg/bg-12.png" alt="img" className="img-fluid"/>
					</div>
				</div>
				
				<div className="row align-items-center">
					<div className="col-md-8">
						<div className="work-wrap work-wrap-earning mb-0">
							<span>03</span>
							<h1 className="display-6">Organisez, suivez et recevez vos
                                paiements</h1>
							<p>Réservez, modifiez ou suivez vos prestations directement depuis votre tableau de bord. Chaque
                            mission est enregistrée, facturée et réglée via une interface sécurisée. En tant
                            qu'aidant ou professionnel, vous recevez vos paiements directement sur votre compte. En tant que client,
                            vous bénéficiez d'un suivi clair, sans paperasse.</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="work-img mb-0 d-none d-md-block">
							<img src="Payment-Information-bro.png" className="img-fluid" alt="image"/>
						</div>
					</div>
				</div>
				{/* <!-- /How it works --> */}
				
			</div>
		</div>
		</div>
		{/* <!-- /Page Wrapper --> */}
        {/* <!-- Free Trial --> */}
		<section className="section-offer pb-0">	
			<div className="container">
				<div className="row  aos" data-aos="fade-up">
					<div className="col-md-12">
						<div className="offer-paths offer-sec">
							<div className="offer-path-content">
								<div className="section-heading-two">
									 <p>Une communauté qui vous ressemble</p>
									<h3 className="mb-0">
										REJOIGNEZ LA COMMUNAUTÉ WAP AUJOURD’HUI !
									</h3>
								</div>
								<p>
									Transformez votre quotidien en devenant membre de WAP. Que vous soyez un
                                    professionnel ou un particulier, simplifiez vos services et paiements dès
                                    maintenant.
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
export default HowItWorks;