const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const { google } = require('googleapis'); // Import googleapis library
const path = require('path'); // For resolving file paths

const app = express();
const PORT = 5000;

// --- Google Sheets Configuration ---
// IMPORTANT: REPLACE 'YOUR_GOOGLE_SHEET_ID_HERE' with the actual ID from your Google Sheet URL
const SPREADSHEET_ID = '1X7jA0nPIH24m9_6MEofdnnaqQevxZuNdgFKysbj2bYQ';
// Path to your downloaded JSON key file. Ensure this file is in the same directory as index.js
const GOOGLE_CREDENTIALS_PATH = path.join(__dirname, 'google-sheets-credentials.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Function to authenticate with Google Sheets API
async function getGoogleSheetAuth() {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: GOOGLE_CREDENTIALS_PATH,
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

    // Prepare data for Google Sheet - Ensure the order matches your sheet's columns
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
        new Date().toLocaleString() // Timestamp when the submission occurred
    ];

    try {
        // --- Send Email ---
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'hubnutri4@gmail.com',
                pass: 'kcid lwol hhom lkfm' 
            }
        });

        const mailOptions = {
            from: 'hubnutri4@gmail.com',
            to: 'hubnutri4@gmail.com', // Recipient of the consultation email
            replyTo: formData.email, // Reply to the user's email
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

        // --- Save to Google Sheet ---
        const sheets = await getGoogleSheetAuth();
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!A:K', // 'Sheet1' is the default tab name. 'A:K' means columns A through K. Adjust if you have more/fewer columns or a different sheet name.
            valueInputOption: 'USER_ENTERED', // Formats the data as if typed by a user (e.g., numbers remain numbers)
            resource: {
                values: [rowData], // Data to be appended as a new row
            },
        });
        console.log('Data saved to Google Sheet successfully');

        res.status(200).send({ message: 'Consultation booked, email sent, and data saved to Google Sheet!' });

    } catch (error) {
        console.error('Error processing consultation:', error);
        // Provide more specific error messages if possible
        if (error.message.includes('Failed to authenticate')) {
             res.status(500).send({ error: 'Server authentication failed. Please check Google Sheets setup.' });
        } else if (error.code === 400 || error.code === 403) { // 400 Bad Request, 403 Forbidden (often permission issues)
             res.status(500).send({ error: 'Failed to write to Google Sheet. Check permissions or Spreadsheet ID.' });
        } else {
             res.status(500).send({ error: 'Failed to process consultation. Please try again.' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});