# OffSec Radar - Open Source Security Tool Discovery Platform

A modern, community-driven platform for discovering and exploring cybersecurity tools from GitHub's ecosystem. Built with React, Vite, and Tailwind CSS.

![OffSec Radar](https://offsecradar.com/assets/images/offsec-radar-social.png)

## 🚀 Live Demo

**[Visit OffSec Radar →](https://offsec-radar.vercel.app)**

## ✨ Features

### 🔥 **Enhanced Tool Discovery**
* **100+ Security Tools**: Real-time data from GitHub API with curated fallback database
* **Smart Categorization**: Intelligent tool classification across 9+ security categories
* **Advanced Search**: Instant search across tool names, descriptions, tags, and authors
* **GitHub Integration**: Direct access to repositories, documentation, and project details

### 🎯 **Quality & Trust**
* **Verified Tools**: Ultra-restrictive verification for only the most trusted security tools
* **Trending Algorithm**: Exclusive trending badges for truly exceptional tools (>5K stars, active maintenance)
* **Community Driven**: Real-time GitHub metrics (stars, forks, last updated)
* **No Spam**: Curated selection prevents tool noise and ensures quality

### 🎨 **Modern Experience**
* **Beautiful UI**: Clean, responsive design with smooth animations
* **Fast Performance**: Optimized for speed with efficient API usage
* **Mobile First**: Perfect experience on desktop, tablet, and mobile
* **Accessibility**: Built with modern web standards and best practices

### 🔧 **Smart Filtering**
* **Category Filters**: Network Security, Web Security, OSINT, Malware Analysis, and more
* **Real-time Results**: Instant filtering without page reloads
* **Intelligent Sorting**: By relevance, stars, recent activity, name, and trending status
* **Grid & Table Views**: Choose your preferred browsing experience

## 🛠️ Tool Categories

* **🌐 Network Security** - Nmap, MASSCAN, Wireshark
* **🔍 Penetration Testing** - Metasploit Framework, Nuclei, Hydra
* **🌍 Web Security** - Burp Suite, SQLMap, Nikto, WPScan
* **👁️ OSINT** - theHarvester, Sherlock, Subfinder, Amass
* **🔬 Malware Analysis** - Volatility, YARA, Radare2, Binwalk
* **🔑 Password Security** - Hashcat, John the Ripper
* **📡 Wireless Security** - Aircrack-ng
* **📱 Mobile Security** - Mobile Security Framework (MobSF)
* **🎯 Vulnerability Scanning** - Nuclei, OpenVAS
* **🕵️ Social Engineering** - Social Engineer Toolkit

## 🚀 Quick Start

### Prerequisites

* Node.js 18+
* npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/T3chfalcon/offsec-radar.git
   cd offsec-radar
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
   Navigate to `http://localhost:4028`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deploy to Vercel

### Automatic Deployment (Recommended)

1. **Fork this repository**
2. **Connect to Vercel**
   * Go to [Vercel Dashboard](https://vercel.com)
   * Click "New Project" 
   * Import your forked repository
   * Deploy automatically!

### GitHub Actions Deployment

The repository includes automated deployment via GitHub Actions on every push to main.

## 🔧 Technical Highlights

### **GitHub API Integration**
* **Public API Usage**: 60 requests/hour without authentication
* **Intelligent Fallback**: Seamless fallback to curated database if API fails
* **Rate Limit Handling**: Smart error handling and user feedback
* **Real-time Data**: Live repository stats and activity metrics

### **Performance Optimizations**
* **Efficient Search**: Optimized search queries within GitHub's 5 operator limit
* **Smart Caching**: Browser caching for improved performance
* **Lazy Loading**: Images and components loaded on demand
* **Bundle Optimization**: Code splitting and tree shaking

### **Security & Privacy**
* **No Token Exposure**: Secure public API usage without exposed secrets
* **Privacy First**: No user tracking beyond anonymous analytics
* **Secure Links**: All external links properly sanitized
* **Content Security**: XSS protection and secure headers

## 🏗️ Project Structure

```
offsec-radar/
├── public/                 # Static assets and images
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Core UI components (Button, Input, etc.)
│   │   └── AppImage.jsx  # Smart image loading with fallbacks
│   ├── pages/            # Page components and routing
│   │   ├── tool-arsenal-discovery/  # Main tools page
│   │   ├── intelligence-dashboard-homepage/  # Homepage
│   │   └── about-git-hub-radar/     # About page
│   ├── data/             # Curated tools database and categories
│   ├── services/         # GitHub API integration
│   └── styles/           # Tailwind CSS configuration
├── .github/workflows/    # Automated deployment
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies and scripts
```

## 🔥 Recent Major Improvements

### **v2.0 - GitHub Integration & Enhanced Discovery**
* ✅ **100+ Tools**: Expanded from 29 to 100+ tools via GitHub API
* ✅ **Smart Categories**: Auto-categorization of GitHub tools into proper categories
* ✅ **Quality Filters**: Ultra-restrictive verification (only trusted tools get ✓)
* ✅ **Trending Algorithm**: Exclusive trending for exceptional tools only
* ✅ **Enhanced UI**: "View on GitHub" buttons for every tool
* ✅ **Performance**: Optimized API queries and error handling
* ✅ **Mobile Ready**: Responsive design improvements

### **Developer Experience**
* ✅ **Hot Reload**: Instant development feedback with Vite
* ✅ **Modern Stack**: React 18, Tailwind CSS 3, ES Modules
* ✅ **Clean Architecture**: Modular components and services
* ✅ **Type Safety**: JSConfig for better IDE support

## 🤝 Contributing

We welcome contributions from the security community! 

### **Ways to Contribute:**
* 🔧 **Add Security Tools** - Expand our curated database
* 🎨 **Improve UI/UX** - Better designs and user experience  
* 🐛 **Fix Bugs** - Help us maintain quality
* ⚡ **Performance** - Optimize speed and efficiency
* 📝 **Documentation** - Help others understand the project

### **Quick Contribution:**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-tool`
3. Add your changes to `src/data/securityTools.js`
4. Test the filtering and search functionality
5. Submit a pull request

## 📊 Analytics & Metrics

* **Vercel Analytics**: Page views, performance metrics, and user engagement
* **Privacy Focused**: Anonymous analytics only, no personal data collection
* **Performance Monitoring**: Core Web Vitals and loading metrics
* **Community Insights**: Popular tools and search patterns

## 🔒 Security & Privacy

* **🔐 Secure by Design**: No API tokens exposed to browser
* **🚫 No Tracking**: Privacy-first approach with minimal data collection  
* **✅ HTTPS Only**: Secure connections for all requests
* **🛡️ Content Security**: XSS protection and secure headers
* **🔍 Transparent**: Open source for full security audit

## 📱 Browser Support

* **Chrome 90+** ✅
* **Firefox 88+** ✅  
* **Safari 14+** ✅
* **Edge 90+** ✅

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

* **🔒 Security Community** - For creating incredible open-source tools
* **🐙 GitHub** - For hosting tools and providing excellent API access
* **⚡ Vercel** - For seamless hosting and deployment
* **🎨 Tailwind CSS** - For the utility-first CSS framework
* **⚛️ React Team** - For the amazing development experience

## 📞 Support & Contact

* 🐛 **Bug Reports**: [Create an issue](https://github.com/T3chfalcon/offsec-radar/issues)
* 💡 **Feature Requests**: [Open an enhancement issue](https://github.com/T3chfalcon/offsec-radar/issues/new)
* 🐦 **Twitter**: [@t3chfalcon](https://x.com/t3chfalcon)
* 📧 **Email**: [contact@offsecradar.com](mailto:contact@offsecradar.com)

---

**Made with ❤️ by [t3chfalcon](https://t3chfalcon.vercel.app) for the community**

**[🚀 Live Demo](https://offsec-radar.vercel.app)** | **[📱 GitHub](https://github.com/T3chfalcon/offsec-radar)**
