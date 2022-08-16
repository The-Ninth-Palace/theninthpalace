import React from "react";

function ContactForm() {
    return (
    <>
    <div class="neoh_fn_contact_page">
			<div class="container">
				<div class="mw_500">
				
					<form action="./" method="post" class="contact_form" id="contact_form" autocomplete="off">
						<div class="input_list">
							<ul>
								<li>
									<label for="name">Name</label>
									<input id="name" type="text" placeholder="Your Name" />
								</li>
								<li>
									<label for="email">Email</label>
									<input id="email" type="text" placeholder="youremail@mail.com" />
								</li>
								<li>
									<label for="subject">Subject</label>
									<input id="subject" type="text" />
								</li>
								<li>
									<label for="message">Message</label>
									<textarea id="message"></textarea>
								</li>
								<li>
									<a id="send_message" href="#" class="neoh_fn_button only_text">
										<span class="text">Send Message</span>
									</a>
								</li>
							</ul>
						</div>
						<div class="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
						<div class="empty_notice"><span>Please Fill Required Fields</span></div>
					</form>
					
					
					{/* <div class="desc_holder">
						<p>Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. Quisque luctus turpis eu tristique feugiat.</p>
						<p>Praesent ac magna feugiat, interdum lacus ac, interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
					</div>
					
					<div class="info_list">
						<ul>
							<li>
								<p class="label">Address</p>
								<h3 class="value">Modgnik Detinu</h3>
							</li>
							<li>
								<p class="label">Phone</p>
								<h3 class="value"><a href="tel:+7068980751">(+706) 898-0751</a></h3>
							</li>
							<li>
								<a href="mailto:example@domain.com" class="email">example@domain.com</a>
							</li>
						</ul>
					</div> */}
					
					
				</div>
			</div>
		</div>
    </>
    
  );
}

export default ContactForm;