// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Custom color palette for terminal/cyberpunk theme
      colors: {
        // Primary colors
        primary: {
          DEFAULT: '#ff6b35',
          dark: '#e55a2b',
          light: '#ff8059',
          50: '#fff4f1',
          100: '#ffe8e0',
          200: '#ffd1c1',
          300: '#ffb59d',
          400: '#ff8b68',
          500: '#ff6b35',
          600: '#e55a2b',
          700: '#c94521',
          800: '#a6381c',
          900: '#872f1a',
        },
        
        // Secondary colors (grays and blacks)
        secondary: {
          DEFAULT: '#1a1a1a',
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#c0c0c0',
          400: '#999999',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0d0d0d',
        },
        
        // Accent colors
        accent: {
          DEFAULT: '#00d4ff',
          dark: '#0099cc',
          light: '#33ddff',
          50: '#f0fcff',
          100: '#e0f9ff',
          200: '#b8f2ff',
          300: '#7ee8ff',
          400: '#33ddff',
          500: '#00d4ff',
          600: '#0099cc',
          700: '#007aa3',
          800: '#006085',
          900: '#004d6e',
        },
        
        // Status colors
        success: {
          DEFAULT: '#00ff88',
          dark: '#00cc66',
          light: '#33ffaa',
          50: '#f0fff8',
          100: '#dcfff0',
          200: '#baffdd',
          300: '#85ffbc',
          400: '#4dff96',
          500: '#00ff88',
          600: '#00cc66',
          700: '#00a352',
          800: '#008040',
          900: '#006633',
        },
        
        warning: {
          DEFAULT: '#ffaa00',
          dark: '#e59400',
          light: '#ffbb33',
          50: '#fffaf0',
          100: '#fff5e0',
          200: '#ffe8b8',
          300: '#ffd78a',
          400: '#ffc247',
          500: '#ffaa00',
          600: '#e59400',
          700: '#bf7c00',
          800: '#996300',
          900: '#7a4f00',
        },
        
        danger: {
          DEFAULT: '#ff3366',
          dark: '#cc1650',
          light: '#ff5c7a',
          50: '#fff1f4',
          100: '#ffe2e8',
          200: '#ffcad5',
          300: '#ff9bb3',
          400: '#ff5c7a',
          500: '#ff3366',
          600: '#cc1650',
          700: '#a30d40',
          800: '#800a32',
          900: '#660829',
        },
        
        // Semantic colors
        dark: '#0a0a0a',
        darker: '#000000',
        light: '#ffffff',
        gray: {
          DEFAULT: '#666666',
          light: '#cccccc',
          dark: '#333333',
        },
      },
      
      // Custom fonts
      fontFamily: {
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'Monaco',
          'Courier New',
          'monospace'
        ],
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
      },
      
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      // Custom border radius
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      
      // Custom box shadows with glow effects
      boxShadow: {
        'glow': '0 0 20px rgba(255, 107, 53, 0.3)',
        'glow-intense': '0 0 40px rgba(255, 107, 53, 0.5)',
        'glow-accent': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-success': '0 0 20px rgba(0, 255, 136, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(255, 107, 53, 0.2)',
        'terminal': '0 0 50px rgba(0, 0, 0, 0.8)',
      },
      
      // Custom gradients
      backgroundImage: {
        'gradient-fire': 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #cc1650 100%)',
        'gradient-cyber': 'linear-gradient(135deg, #00d4ff 0%, #0099cc 50%, #006699 100%)',
        'gradient-success': 'linear-gradient(135deg, #00ff88 0%, #00cc66 100%)',
        'gradient-terminal': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        'grid-pattern': `
          linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
        `,
      },
      
      // Custom animations
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      
      // Custom keyframes
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)'
          },
          '50%': { 
            opacity: '0.8',
            boxShadow: '0 0 40px rgba(255, 107, 53, 0.6)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          'from': { 
            textShadow: '0 0 20px rgba(255, 107, 53, 0.5)',
            filter: 'brightness(1)'
          },
          'to': { 
            textShadow: '0 0 30px rgba(255, 107, 53, 0.8)',
            filter: 'brightness(1.2)'
          },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#ff6b35' },
        },
        'slide-up': {
          'from': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slide-down': {
          'from': { 
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'scale-in': {
          'from': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          'to': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
      },
      
      // Custom transitions
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      
      // Custom z-index values
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Custom backdrop blur
      backdropBlur: {
        'xs': '2px',
      },
      
      // Custom letter spacing
      letterSpacing: {
        'widest': '0.25em',
        'super-wide': '0.5em',
      },
      
      // Custom line heights
      lineHeight: {
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
      },
      
      // Custom max widths
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      
      // Custom screen breakpoints
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    
    // Custom plugin for terminal utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-glow': {
          textShadow: '0 0 10px currentColor',
        },
        '.text-glow-strong': {
          textShadow: '0 0 20px currentColor',
        },
        '.border-glow': {
          boxShadow: '0 0 10px currentColor',
        },
        '.terminal-cursor': {
          '&::after': {
            content: '"█"',
            animation: 'blink 1s infinite',
            color: theme('colors.primary.DEFAULT'),
          },
        },
        '.gradient-text': {
          background: 'linear-gradient(135deg, #ff6b35, #00d4ff)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 107, 53, 0.3)',
        },
      };
      
      addUtilities(newUtilities);
    },
    
    // Custom plugin for component variants
    function({ addComponents, theme }) {
      const components = {
        '.btn-primary': {
          backgroundColor: theme('colors.primary.DEFAULT'),
          color: theme('colors.dark'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.bold'),
          textTransform: 'uppercase',
          letterSpacing: theme('letterSpacing.wide'),
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: theme('colors.primary.dark'),
            transform: 'translateY(-2px)',
            boxShadow: theme('boxShadow.glow'),
          },
        },
        '.btn-secondary': {
          backgroundColor: 'transparent',
          color: theme('colors.primary.DEFAULT'),
          border: `2px solid ${theme('colors.primary.DEFAULT')}`,
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.bold'),
          textTransform: 'uppercase',
          letterSpacing: theme('letterSpacing.wide'),
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: theme('colors.primary.DEFAULT'),
            color: theme('colors.dark'),
            boxShadow: theme('boxShadow.glow'),
          },
        },
        '.terminal-window': {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          border: `2px solid ${theme('colors.primary.DEFAULT')}`,
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          fontFamily: theme('fontFamily.mono').join(', '),
          boxShadow: theme('boxShadow.glow-intense'),
        },
        '.section-title': {
          fontSize: theme('fontSize.4xl')[0],
          fontWeight: theme('fontWeight.black'),
          textTransform: 'uppercase',
          letterSpacing: theme('letterSpacing.widest'),
          textAlign: 'center',
          background: theme('backgroundImage.gradient-fire'),
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          marginBottom: theme('spacing.4'),
          '@screen md': {
            fontSize: theme('fontSize.6xl')[0],
          },
        },
        '.section-subtitle': {
          textAlign: 'center',
          color: theme('colors.gray.light'),
          fontSize: theme('fontSize.lg')[0],
          marginBottom: theme('spacing.16'),
          textTransform: 'uppercase',
          letterSpacing: theme('letterSpacing.wider'),
        },
      };
      
      addComponents(components);
    },
  ],
  // Dark mode configuration
  darkMode: 'class',
}
