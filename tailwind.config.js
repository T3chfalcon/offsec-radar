/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': {
          DEFAULT: '#0A1628', // Deep command center authority
          50: '#F0F4F8', // Lightest primary tint
          100: '#D9E2EC', // Light primary tint
          200: '#BCCCDC', // Medium-light primary tint
          300: '#9FB3C8', // Medium primary tint
          400: '#829AB1', // Medium-dark primary tint
          500: '#627D98', // Base primary shade
          600: '#486581', // Dark primary shade
          700: '#334E68', // Darker primary shade
          800: '#243B53', // Very dark primary shade
          900: '#1A365D', // Darkest primary shade
          foreground: '#F7FAFC' // High contrast white
        },
        
        // Secondary Colors
        'secondary': {
          DEFAULT: '#1A365D', // Supporting depth, interface structure
          50: '#F0F4F8', // Lightest secondary tint
          100: '#D9E2EC', // Light secondary tint
          200: '#BCCCDC', // Medium-light secondary tint
          300: '#9FB3C8', // Medium secondary tint
          400: '#829AB1', // Medium-dark secondary tint
          500: '#627D98', // Base secondary shade
          600: '#486581', // Dark secondary shade
          700: '#334E68', // Darker secondary shade
          800: '#243B53', // Very dark secondary shade
          900: '#1A365D', // Darkest secondary shade
          foreground: '#F7FAFC' // High contrast white
        },

        // Accent Colors
        'accent': {
          DEFAULT: '#00FF88', // Active discovery moments, success states
          50: '#F0FFF4', // Lightest accent tint
          100: '#C6F6D5', // Light accent tint
          200: '#9AE6B4', // Medium-light accent tint
          300: '#68D391', // Medium accent tint
          400: '#48BB78', // Medium-dark accent tint
          500: '#38A169', // Base accent shade
          600: '#2F855A', // Dark accent shade
          700: '#276749', // Darker accent shade
          800: '#22543D', // Very dark accent shade
          900: '#1C4532', // Darkest accent shade
          foreground: '#1A202C' // Dark text on accent
        },

        // Background Colors
        'background': {
          DEFAULT: '#F7FAFC', // Clean data canvas, extended reading
          dark: '#1A202C' // Rich dark background
        },
        
        'surface': {
          DEFAULT: '#EDF2F7', // Subtle component separation, card backgrounds
          dark: '#2D3748' // Dark surface
        },

        // Text Colors
        'text': {
          primary: '#1A202C', // High contrast readability, data clarity
          secondary: '#4A5568', // Clear hierarchy, supporting information
          'primary-dark': '#F7FAFC', // High-contrast white for dark theme
          'secondary-dark': '#CBD5E0' // Muted light gray for dark theme
        },

        // Status Colors
        'success': {
          DEFAULT: '#38A169', // Tool verification, positive feedback
          50: '#F0FFF4', // Lightest success tint
          100: '#C6F6D5', // Light success tint
          200: '#9AE6B4', // Medium-light success tint
          300: '#68D391', // Medium success tint
          400: '#48BB78', // Medium-dark success tint
          500: '#38A169', // Base success shade
          600: '#2F855A', // Dark success shade
          700: '#276749', // Darker success shade
          800: '#22543D', // Very dark success shade
          900: '#1C4532', // Darkest success shade
          foreground: '#FFFFFF' // White text on success
        },

        'warning': {
          DEFAULT: '#D69E2E', // Alert configuration, attention without panic
          50: '#FFFBEB', // Lightest warning tint
          100: '#FEF5E7', // Light warning tint
          200: '#FEEBC8', // Medium-light warning tint
          300: '#FBD38D', // Medium warning tint
          400: '#F6AD55', // Medium-dark warning tint
          500: '#ED8936', // Base warning shade
          600: '#DD6B20', // Dark warning shade
          700: '#C05621', // Darker warning shade
          800: '#9C4221', // Very dark warning shade
          900: '#7B341E', // Darkest warning shade
          foreground: '#FFFFFF' // White text on warning
        },

        'error': {
          DEFAULT: '#E53E3E', // Critical security alerts, helpful concern
          50: '#FED7D7', // Lightest error tint
          100: '#FEB2B2', // Light error tint
          200: '#FC8181', // Medium-light error tint
          300: '#F56565', // Medium error tint
          400: '#E53E3E', // Base error shade
          500: '#C53030', // Dark error shade
          600: '#9B2C2C', // Darker error shade
          700: '#742A2A', // Very dark error shade
          800: '#63171B', // Darkest error shade
          900: '#521B1B', // Deepest error shade
          foreground: '#FFFFFF' // White text on error
        },

        // Border Colors
        'border': {
          DEFAULT: '#E2E8F0', // Default border color
          accent: 'rgba(0, 255, 136, 0.2)' // Accent border with opacity
        },

        // Conversion Colors
        'conversion': {
          DEFAULT: '#FFB800', // Warning amber for CTAs
          50: '#FFFBEB', // Lightest conversion tint
          100: '#FEF5E7', // Light conversion tint
          200: '#FEEBC8', // Medium-light conversion tint
          300: '#FBD38D', // Medium conversion tint
          400: '#F6AD55', // Medium-dark conversion tint
          500: '#ED8936', // Base conversion shade
          600: '#DD6B20', // Dark conversion shade
          700: '#C05621', // Darker conversion shade
          800: '#9C4221', // Very dark conversion shade
          900: '#7B341E', // Darkest conversion shade
          foreground: '#1A202C' // Dark text on conversion
        }
      },

      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      },

      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },

      spacing: {
        '13': '3.25rem', // 52px - Golden ratio multiplier
        '21': '5.25rem', // 84px - Golden ratio multiplier
        '34': '8.5rem',  // 136px - Golden ratio multiplier
        '55': '13.75rem' // 220px - Golden ratio multiplier
      },

      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'accent': '0 0 0 0 rgba(0, 255, 136, 0.7)',
        'accent-expanded': '0 0 0 10px rgba(0, 255, 136, 0)',
        'holographic': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
      },

      animation: {
        'grid-move': 'gridMove 20s linear infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
        'intelligence-flow': 'flowMove 8s ease-in-out infinite',
        'quantum-float': 'quantumFloat 4s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out'
      },

      keyframes: {
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-20px)' }
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 0 0 rgba(0, 255, 136, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(0, 255, 136, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(0, 255, 136, 0.7)' }
        },
        flowMove: {
          '0%': { transform: 'translateX(-100%)', opacity: '0.3' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0.3' }
        },
        quantumFloat: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)', opacity: '0.3' },
          '25%': { transform: 'translate3d(10px, -10px, 0)', opacity: '0.7' },
          '50%': { transform: 'translate3d(-5px, -20px, 0)', opacity: '1' },
          '75%': { transform: 'translate3d(-10px, -5px, 0)', opacity: '0.7' }
        },
        slideInRight: {
          'from': { transform: 'translateX(100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' }
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        scaleIn: {
          'from': { transform: 'scale(0.95)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' }
        }
      },

      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px'
      },

      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms'
      },

      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
}