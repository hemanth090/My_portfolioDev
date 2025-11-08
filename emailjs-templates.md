# EmailJS Templates for Portfolio Contact Form

## 📧 Email Template for EmailJS

### Template Name: `portfolio_contact_template`

Copy and paste this template into your EmailJS template editor:

---

### **Subject Line:**
```
New Portfolio Contact: {{subject}}
```

### **Email Body (HTML Format):**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Contact Form</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            margin-bottom: 20px;
        }
        .field {
            margin-bottom: 15px;
            padding: 15px;
            background: #f8f9fa;
            border-left: 4px solid #667eea;
            border-radius: 4px;
        }
        .field-label {
            font-weight: bold;
            color: #667eea;
            margin-bottom: 5px;
        }
        .field-value {
            color: #333;
            word-wrap: break-word;
        }
        .message-box {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e9ecef;
            margin: 20px 0;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 14px;
            color: #666;
            text-align: center;
        }
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 New Portfolio Contact</h1>
            <p>Someone reached out through your portfolio website!</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="field-label">👤 From:</div>
                <div class="field-value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">📧 Email:</div>
                <div class="field-value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">📋 Subject:</div>
                <div class="field-value">{{subject}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">💬 Message:</div>
                <div class="message-box">
                    {{message}}
                </div>
            </div>
        </div>
        
        <div style="text-align: center; margin: 20px 0;">
            <a href="mailto:{{from_email}}?subject=Re: {{subject}}" class="cta-button">
                📧 Reply to {{from_name}}
            </a>
        </div>
        
        <div class="footer">
            <p>📅 Received: {{current_date}}</p>
            <p>🌐 Sent from: <strong>Naveen Hemanth Kokkonda Portfolio</strong></p>
            <p>💼 This message was sent through your portfolio contact form</p>
            <hr style="margin: 15px 0; border: none; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #999;">
                🔒 This email was automatically generated from your portfolio website.<br>
                Reply directly to this email to respond to {{from_name}}.
            </p>
        </div>
    </div>
</body>
</html>
```

---

## 📋 Template Variables to Configure in EmailJS

When setting up your template in EmailJS, make sure these variables are properly mapped:

### **Template Parameters:**
```javascript
{
  from_name: "{{from_name}}",        // Sender's name
  from_email: "{{from_email}}",      // Sender's email
  subject: "{{subject}}",            // Message subject
  message: "{{message}}",            // Message content
  to_name: "Naveen Hemanth Kokkonda", // Your name (static)
  to_email: "naveenhemanth4@gmail.com", // Your email (static)
  reply_to: "{{from_email}}",        // Reply-to address
  current_date: "{{current_date}}"   // Auto-generated date
}
```

---

## 🔧 EmailJS Setup Steps

### 1. **Create Email Template in EmailJS Dashboard:**

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **"Email Templates"**
3. Click **"Create New Template"**
4. Template ID: `portfolio_contact_template`
5. Copy the HTML template above into the content area

### 2. **Configure Template Settings:**

- **Template Name:** `Portfolio Contact Form`
- **Subject:** `New Portfolio Contact: {{subject}}`
- **Content:** Use the HTML template provided above
- **From Name:** `Portfolio Contact Form`
- **From Email:** Your verified email address
- **Reply To:** `{{from_email}}`

### 3. **Test Template Variables:**

Make sure these variables work in the test:
- `{{from_name}}` → Contact person's name
- `{{from_email}}` → Contact person's email
- `{{subject}}` → Message subject
- `{{message}}` → Message content

---

## 📱 Alternative Simple Text Template

If you prefer a simpler text-only template:

### **Subject:**
```
New Portfolio Contact: {{subject}}
```

### **Body:**
```
🚀 NEW PORTFOLIO CONTACT

👤 From: {{from_name}}
📧 Email: {{from_email}}
📋 Subject: {{subject}}

💬 Message:
{{message}}

---
📅 Received: {{current_date}}
🌐 Sent from: Naveen Hemanth Kokkonda Portfolio
💼 Reply to: {{from_email}}

This message was sent through your portfolio contact form.
```

---

## 🎯 Auto-Reply Template (Optional)

You can also create an auto-reply template to thank visitors:

### **Template Name:** `portfolio_auto_reply`

### **Subject:**
```
Thank you for contacting Naveen Hemanth Kokkonda
```

### **Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank You for Reaching Out! 🚀</h1>
        </div>
        
        <p>Hi {{from_name}},</p>
        
        <p>Thank you for contacting me through my portfolio website! I've received your message about "<strong>{{subject}}</strong>" and I appreciate you taking the time to reach out.</p>
        
        <p>I'll review your message and get back to you within 24-48 hours. In the meantime, feel free to:</p>
        
        <ul>
            <li>🔗 Connect with me on <a href="https://www.linkedin.com/in/hemanthkokkonda/">LinkedIn</a></li>
            <li>💻 Check out my projects on <a href="https://github.com/hemanth090">GitHub</a></li>
            <li>📄 Download my <a href="https://your-portfolio-url.onrender.com/resume.pdf">resume</a></li>
        </ul>
        
        <p>Looking forward to our conversation!</p>
        
        <p>Best regards,<br>
        <strong>Naveen Hemanth Kokkonda</strong><br>
        Full-Stack Developer & AI Enthusiast</p>
        
        <hr>
        <p style="font-size: 12px; color: #666;">
            This is an automated response. Please don't reply to this email - I'll contact you directly from my personal email.
        </p>
    </div>
</body>
</html>
```

---

## 🚀 Ready to Use!

Once you've set up these templates in EmailJS:

1. ✅ **Copy your Service ID, Template ID, and Public Key**
2. ✅ **Add them to your `.env` file**
3. ✅ **Deploy to Render with environment variables**
4. ✅ **Test the contact form**

Your portfolio contact form will now send beautiful, professional emails! 📧✨