
import { config } from 'dotenv';

const MailGen = require('mailgen');
const sgMail = require('@sendgrid/mail');

config();

const sendMail = (name, email, token) => {
	const emailToSend = {
		body: {
			name,
			intro: 'you registered an account on Visit africa.',
			action: {
				instructions:
          'Please click the button below to verify your account',
				button: {
					color: '#33b5e5',
					text: 'Verify account',
					link: `http://localhost:3000/api/auth/verify/activate?token=${token}`,
				},
			},
		},
	};
	const mailGenerator = new MailGen({
		theme: 'salted',
		product: {
			name: 'Visit Africa App',
			link: `http://localhost:3000/api/auth/verify/activate?token=${token}`,
		},
	});
	const emailTemplate = mailGenerator.generate(emailToSend);
	require('fs').writeFileSync('preview.html', emailTemplate, 'utf8');
	const msg = {
		to: email,
		from: 't0780586360@gmail.com',
		subject: 'Test verification email',
		text: 'email verify',
		html: emailTemplate,
	};
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
		})
		.catch((error) => {
			console.error(error);
		});
};

export default sendMail;
