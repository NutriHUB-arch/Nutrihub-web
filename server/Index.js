const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
require('dotenv').config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Google Sheets configuration
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

// Authenticate with Google Sheets API
async function getGoogleSheetAuth() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                type: process.env.GOOGLE_TYPE,
                project_id: process.env.GOOGLE_PROJECT_ID,
                private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_id: process.env.GOOGLE_CLIENT_ID,
                auth_uri: process.env.GOOGLE_AUTH_URI,
                token_uri: process.env.GOOGLE_TOKEN_URI,
                auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_CERT_URL,
                client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL,
                universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client });
        return sheets;
    } catch (error) {
        console.error('Google Sheets Authentication Error:', error);
        throw new Error('Failed to authenticate with Google Sheets. Check credentials and API enablement.');
    }
}

// POST endpoint to handle form data
app.post('/send-consultation', async (req, res) => {
    const formData = req.body;

    const rowData = [
        formData.name,
        formData.age,
        formData.gender,
        formData.height,
        formData.weight,
        formData.goal,
        formData.email,
        formData.phone,
        formData.healthIssues && formData.healthIssues.length > 0 ? formData.healthIssues.join(', ') : 'None',
        formData.additionalInfo || 'N/A',
        new Date().toLocaleString()
    ];

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: formData.email,
            subject: 'New Consultation Booking',
            text: `
                New Consultation Booking Details:

                Name: ${formData.name}
                Age: ${formData.age}
                Gender: ${formData.gender}
                Height: ${formData.height}
                Weight: ${formData.weight}
                Primary Goal: ${formData.goal}
                Email Address: ${formData.email}
                Phone: ${formData.phone}
                Health Issues: ${formData.healthIssues && formData.healthIssues.length > 0 ? formData.healthIssues.join(', ') : 'None'}
                Additional Info: ${formData.additionalInfo || 'N/A'}
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        const sheets = await getGoogleSheetAuth();
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!A:K',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [rowData],
            },
        });
        console.log('Data saved to Google Sheet successfully');

        res.status(200).send({ message: 'Consultation booked, email sent, and data saved to Google Sheet!' });

    } catch (error) {
        console.error('Error processing consultation:', error);
        if (error.message.includes('Failed to authenticate')) {
            res.status(500).send({ error: 'Server authentication failed. Please check Google Sheets setup.' });
        } else if (error.code === 400 || error.code === 403) {
            res.status(500).send({ error: 'Failed to write to Google Sheet. Check permissions or Spreadsheet ID.' });
        } else {
            res.status(500).send({ error: 'Failed to process consultation. Please try again.' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
