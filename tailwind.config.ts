import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '760px',
            color: '#4a4a4a',
            lineHeight: '1.85',
            fontSize: '1.0625rem',
            fontWeight: '300',
            a: {
              color: '#1a1a1a',
              textDecoration: 'underline',
              textDecorationColor: '#e5e5e5',
              textUnderlineOffset: '4px',
              fontWeight: '400',
              transition: 'all 0.3s ease',
              '&:hover': {
                textDecorationColor: '#9ca3af',
              },
            },
            'h1, h2, h3, h4': {
              color: '#1a1a1a',
              fontWeight: '300',
              letterSpacing: '-0.03em',
            },
            h1: {
              fontSize: '2.25rem',
              marginTop: '0',
              marginBottom: '2.5rem',
              lineHeight: '1.2',
            },
            h2: {
              fontSize: '1.75rem',
              marginTop: '3.5rem',
              marginBottom: '1.5rem',
              lineHeight: '1.3',
            },
            h3: {
              fontSize: '1.375rem',
              marginTop: '3rem',
              marginBottom: '1.25rem',
              lineHeight: '1.4',
            },
            p: {
              marginTop: '1.75rem',
              marginBottom: '1.75rem',
            },
            code: {
              color: '#1a1a1a',
              backgroundColor: '#f7f7f7',
              padding: '0.25em 0.5em',
              borderRadius: '0.25rem',
              fontWeight: '400',
              fontSize: '0.9em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1a1a1a',
              color: '#e5e7eb',
              padding: '2rem',
              borderRadius: '0.75rem',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              fontWeight: '300',
            },
            blockquote: {
              fontStyle: 'normal',
              color: '#6b7280',
              borderLeftColor: '#e5e7eb',
              borderLeftWidth: '2px',
              paddingLeft: '2rem',
              quotes: 'none',
              fontWeight: '300',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.75rem',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.75rem',
            },
            'ul > li, ol > li': {
              paddingLeft: '0.5rem',
              marginTop: '1rem',
              marginBottom: '1rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;