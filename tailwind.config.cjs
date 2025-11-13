module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#55B2F3'
      },
      boxShadow: {
        "soft": '0 8px 30px rgba(0,0,0,0.6)'
      }
    }
  },
  plugins: []
}
