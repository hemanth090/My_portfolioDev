# Naveen Hemanth Kokkonda - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full-Stack Developer & AI Enthusiast.

## 🌟 Features

- **Modern Design**: Glassmorphism UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop, 4K)
- **Dark/Light Mode**: Toggle between themes with localStorage persistence
- **Interactive Animations**: Framer Motion animations and AOS scroll effects
- **SEO Optimized**: Meta tags, OpenGraph, JSON-LD schema
- **Performance Focused**: Lighthouse score >90
- **Accessible**: WAI-ARIA compliant with semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, Tailwind CSS
- **Animations**: Framer Motion, AOS.js
- **Icons**: React Icons
- **Fonts**: Google Fonts (Poppins, Inter, DM Sans)
- **Build Tool**: Create React App
- **Deployment**: Ready for Vercel, Netlify, GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hemanth090/portfolio.git
   cd portfolio
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

This creates an optimized build in the `build` folder.

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

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live!

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your GitHub repository for automatic deployments

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

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