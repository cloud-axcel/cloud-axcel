# EmailJS Setup Guide

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose Gmail, Outlook, or any SMTP service
4. Configure with your email credentials
5. Note the Service ID

## 3. Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission - {{subject}}

**Body:**
```
New contact form submission from Cloud Axcel website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent to: {{to_email}}
```

4. Save and note the Template ID

## 4. Get Public Key
1. Go to Account > General
2. Copy your Public Key

## 5. Update Environment Variables
Update `.env` file with your actual values:
```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check customersuccess@cloudaxcel.com for the email

## Free Tier Limits
- 200 emails per month
- No credit card required
- Perfect for contact forms

## Security Note
The public key is safe to expose in frontend code as it's designed for client-side use.
