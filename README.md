# 🚀 Naveen Hemanth Kokkonda - Portfolio Website

> A stunning, modern portfolio showcasing my journey as a Full-Stack Developer & AI Enthusiast

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=render)](https://your-portfolio-url.onrender.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/hemanth090/My_portfolioDev)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ About This Portfolio

This portfolio represents my journey from a Computer Science student to a passionate developer who builds real-world applications that impact users' lives. With **3 production applications serving 100+ users** and **85% AI accuracy rates**, this showcase demonstrates both technical excellence and practical problem-solving skills.

## 🌟 Key Highlights

- 🏆 **Top 5 Hackathon Performer** - Secured top rankings in inter-college competitions
- 🤖 **AI Integration Expert** - Built applications with 85% accuracy in resume analysis
- 👥 **Real User Impact** - 100+ active users across deployed applications
- 🎓 **Continuous Learner** - Multiple certifications and ongoing CS degree
- 🚀 **Production Ready** - All projects deployed and actively maintained

## 🛠️ Tech Stack & Features

### Frontend Technologies
- **React 18** - Modern component-based architecture
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Smooth, professional animations
- **AOS.js** - Scroll-triggered animations

### Design Features
- 🎨 **Glassmorphism UI** - Modern, elegant design aesthetic
- 📱 **Fully Responsive** - Perfect on mobile, tablet, desktop, and 4K displays
- 🌙 **Dark/Light Mode** - Theme toggle with localStorage persistence
- ⚡ **Performance Optimized** - Lighthouse score >90
- ♿ **Accessible** - WAI-ARIA compliant with semantic HTML
- 🔍 **SEO Ready** - Meta tags, OpenGraph, JSON-LD schema

### Deployment & DevOps
- 🚀 **Render Hosting** - Fast, reliable deployment
- 📦 **GitHub Integration** - Auto-deploy on push
- 🔧 **CI/CD Ready** - Automated build and deployment pipeline

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hemanth090/My_portfolioDev.git
   cd My_portfolioDev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `build` folder ready for deployment.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── About.js         # About section
│   ├── Achievements.js  # Achievements showcase
│   ├── BackToTop.js     # Back to top button
│   ├── Certifications.js # Certifications display
│   ├── Contact.js       # Contact form and info
│   ├── Education.js     # Educational background
│   ├── Experience.js    # Work experience timeline
│   ├── Footer.js        # Footer component
│   ├── Hero.js          # Hero/landing section
│   ├── LoadingScreen.js # Loading animation
│   ├── Navbar.js        # Navigation bar
│   ├─�� Projects.js      # Projects showcase
│   ├── ScrollProgress.js # Scroll progress indicator
│   └── Skills.js        # Skills and technologies
├── App.js               # Main app component
├── index.js             # Entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors and Themes

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary color shades
      },
      secondary: {
        // Your secondary color shades
      }
    }
  }
}
```

### Content Updates

1. **Personal Information**: Update contact details in `Contact.js` and `Hero.js`
2. **Projects**: Modify the projects array in `Projects.js`
3. **Skills**: Update skill categories in `Skills.js`
4. **Experience**: Edit experience data in `Experience.js`
5. **Education**: Update educational background in `Education.js`

### Adding Your Resume

1. Add your resume PDF to the `public` folder as `resume.pdf`
2. The download functionality is already implemented in `Hero.js` and `Contact.js`

## 🚀 Deployment on Render

This portfolio is optimized for deployment on **Render**, which provides free hosting for static sites with automatic deployments from GitHub.

### Step-by-Step Deployment

1. **Go to [Render.com](https://render.com)** and sign up/sign in with your GitHub account

2. **Create New Static Site**:
   - Click "New +" → "Static Site"
   - Connect your GitHub account if not already connected
   - Select this repository: `hemanth090/My_portfolioDev`

3. **Configure Deployment Settings**:
   ```
   Name: naveen-portfolio (or your preferred name)
   Branch: main
   Build Command: npm install && npm run build
   Publish Directory: build
   ```

4. **Advanced Settings** (Optional but recommended):
   - Add environment variable: `NODE_VERSION` = `18`
   - Auto-Deploy: Yes (automatically redeploys when you push to GitHub)

5. **Click "Create Static Site"**

### What Happens Next

- ⏱️ Render will automatically build your site (takes 2-5 minutes)
- 🌐 You'll get a live URL like: `https://naveen-portfolio.onrender.com`
- 🔄 Every time you push to GitHub, it will auto-deploy
- 📊 Free tier includes: Custom domains, SSL certificates, and global CDN

### Making Updates

To update your live portfolio:

1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. Render will automatically detect the changes and redeploy

### Custom Domain (Optional)

Once deployed, you can add a custom domain:
1. Go to your Render dashboard
2. Select your static site
3. Navigate to "Settings" → "Custom Domains"
4. Add your domain and follow the DNS configuration instructions

## 🔧 Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
REACT_APP_SITE_URL=https://yoursite.com
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎯 Performance

- **Lighthouse Score**: 90+
- **First Contentful Paint**: <2s
- **Largest Contentful Paint**: <3s
- **Cumulative Layout Shift**: <0.1

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## �� Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Naveen Hemanth Kokkonda**
- Email: naveenhemanth4@gmail.com
- LinkedIn: [linkedin.com/in/hemanthkokkonda](https://www.linkedin.com/in/hemanthkokkonda/)
- GitHub: [github.com/hemanth090](https://github.com/hemanth090)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Styling by [Tailwind CSS](https://tailwindcss.com/)

---

**Built with ❤️ by Naveen Hemanth Kokkonda**