/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        charcoal: '#171a22',
        sand: '#f4efe6',
        olive: '#7c7a4f',
        gold: '#c6a667',
      },
      boxShadow: {
        premium: '0 20px 60px rgba(15, 23, 42, 0.22)',
      },
      backgroundImage: {
        'noise': "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.14), transparent 40%), radial-gradient(circle at 80% 0%, rgba(198,166,103,0.12), transparent 30%), radial-gradient(circle at 30% 80%, rgba(124,122,79,0.14), transparent 40%)"
      }
    },
  },
  plugins: [],
};
