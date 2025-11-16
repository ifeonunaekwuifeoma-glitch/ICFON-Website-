# Resend Email Configuration Guide

## Current Setup
- **API Key**: Stored in `server/.env` as `RESEND_API_KEY`
- **Sender**: Using `onboarding@resend.dev` (verified by default)
- **Recipient**: `icfncanada@gmail.com`

## Production Setup Steps

### 1. Get Production API Key
1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Create a new API key with "Sending" permissions
3. Replace the key in `server/.env`:
   ```
   RESEND_API_KEY=re_your_production_key_here
   ```

### 2. Verify Sender Address (Recommended)
To use `icfncanada@gmail.com` as sender:

1. Go to [Resend Domains](https://resend.com/domains)
2. Add and verify your domain (e.g., `icfncanada.com`)
3. Or verify the specific email address
4. Update the `from` field in `contact.service.ts`:
   ```typescript
   from: 'ICFN Canada <noreply@icfncanada.com>'
   ```

### 3. Alternative: Use Verified Email
If you don't have a domain, you can:
1. Verify `icfncanada@gmail.com` in Resend dashboard
2. Update the sender in the service:
   ```typescript
   from: 'ICFN Canada <icfncanada@gmail.com>'
   ```

## Testing Email Delivery

### Test the Contact Form:
1. Start the backend: `cd server && npm run fix-port`
2. Start the frontend: `cd client && npm run dev`
3. Go to Contact section and submit the form
4. Check `icfncanada@gmail.com` for the email

### Debug Email Issues:
- Check server logs for Resend API responses
- Verify API key permissions in Resend dashboard
- Ensure sender address is verified
- Check Resend dashboard for delivery status

## Email Template Features
- **HTML Format**: Professional styling with ICFN branding
- **Text Fallback**: Plain text version for all clients
- **Responsive Design**: Works on all email clients
- **Brand Colors**: Uses ICFN green (#006400) theme





