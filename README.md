# OffSec Radar - Open Source Security Tool Discovery Platform

A modern, community-driven platform for discovering and exploring cybersecurity tools from GitHub's ecosystem. Built with React, Vite, and Tailwind CSS.

![OffSec Radar](https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop&crop=entropy&cs=tinysrgb)

## 🚀 Features

- **Comprehensive Tool Database**: Curated collection of 15+ popular security tools
- **Advanced Filtering**: Filter by category, programming language, popularity, and features
- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Real-time Search**: Instant search across tools, descriptions, and tags
- **Tool Comparison**: Compare multiple tools side-by-side
- **Favorites System**: Save and organize your favorite tools
- **GitHub Integration**: Real-time data from GitHub API with fallback database
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

## 🛠️ Categories

- **Network Security** - Nmap, Wireshark
- **Penetration Testing** - Metasploit Framework
- **Web Security** - Burp Suite, SQLMap, Nikto
- **OSINT** - theHarvester, Sherlock
- **Malware Analysis** - Volatility, YARA
- **Password Security** - Hashcat, John the Ripper
- **Wireless Security** - Aircrack-ng
- **Mobile Security** - Mobile Security Framework (MobSF)
- **Vulnerability Scanning** - Nuclei
- **Social Engineering** - Social Engineer Toolkit

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/offsec-radar.git
   cd offsec-radar/github_radar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional)**
   ```bash
   cp env.example .env
   # Add your GitHub API token for enhanced rate limits
   VITE_GITHUB_API_TOKEN=your_github_token_here
   ```

4. **Start development server**
   ```bash
   npm run start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deploy to Vercel

### Option 1: Automatic Deployment (Recommended)

1. **Fork this repository**

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your forked repository
   - Set the root directory to `github_radar`
   - Deploy!

3. **Enable Analytics** (Optional)
   - In your Vercel project settings, enable Analytics
   - Analytics are already integrated in the code

### Option 2: Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd github_radar
   vercel --prod
   ```

### GitHub Actions Deployment

The repository includes a GitHub Actions workflow that automatically deploys to Vercel on every push to main.

**Setup required secrets in GitHub:**
- `VERCEL_TOKEN` - Your Vercel token
- `VERCEL_ORG_ID` - Your Vercel organization ID  
- `VERCEL_PROJECT_ID` - Your Vercel project ID

## 🔧 Configuration

### Environment Variables

- `VITE_GITHUB_API_TOKEN` - GitHub personal access token for API requests (optional)

### Customization

- **Add new tools**: Edit `src/data/securityTools.js`
- **Modify categories**: Update `toolCategories` in the same file
- **Change styling**: Edit Tailwind classes or `src/styles/`
- **Update filters**: Modify `ModernFilterSidebar.jsx`

## 🏗️ Project Structure

```
github_radar/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── data/             # Static data and tools database
│   ├── services/         # API services
│   └── styles/           # CSS and styling
├── .github/workflows/    # GitHub Actions
├── vercel.json          # Vercel configuration
└── package.json         # Dependencies and scripts
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Add new security tools** to the database
2. **Improve the UI/UX** with better designs
3. **Enhance filtering** with new categories
4. **Fix bugs** and improve performance
5. **Add new features** like tool reviews, ratings

### Adding a New Tool

1. Edit `src/data/securityTools.js`
2. Add your tool object with all required fields
3. Ensure the category exists in `toolCategories`
4. Test the filtering and search functionality
5. Submit a pull request

## 📊 Analytics

The platform includes Vercel Analytics for tracking:
- Page views and user engagement
- Popular tools and search terms
- Performance metrics
- User behavior insights

## 🔒 Security

- No user data collection beyond analytics
- All external links open in new tabs
- GitHub API integration with rate limiting
- Secure deployment with HTTPS

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Security Community** - For creating amazing open-source tools
- **GitHub** - For hosting the tools and providing API access
- **Vercel** - For excellent hosting and analytics
- **Tailwind CSS** - For the utility-first CSS framework
- **React Team** - For the amazing framework

## 📞 Support

- 🐛 **Bug Reports**: Open an issue on GitHub
- 💡 **Feature Requests**: Open an issue with the "enhancement" label
- 📧 **General Questions**: Start a discussion on GitHub

---

**Made with ❤️ for the cybersecurity community**

[Live Demo](https://your-vercel-url.vercel.app) | [GitHub](https://github.com/yourusername/offsec-radar)
