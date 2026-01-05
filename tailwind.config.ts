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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '760px',
            color: '#374151',
            lineHeight: '1.8',
            fontSize: '1.0625rem',
            a: {
              color: '#111827',
              textDecoration: 'underline',
              textDecorationColor: '#d1d5db',
              textUnderlineOffset: '3px',
              fontWeight: '500',
              '&:hover': {
                textDecorationColor: '#6b7280',
              },
            },
            'h1, h2, h3, h4': {
              color: '#111827',
              fontWeight: '600',
              letterSpacing: '-0.01em',
            },
            h1: {
              fontSize: '2rem',
              marginTop: '0',
              marginBottom: '2rem',
            },
            h2: {
              fontSize: '1.5rem',
              marginTop: '3rem',
              marginBottom: '1.25rem',
            },
            h3: {
              fontSize: '1.25rem',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            p: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            code: {
              color: '#111827',
              backgroundColor: '#f3f4f6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontSize: '0.9em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#e5e7eb',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              fontWeight: '400',
            },
            blockquote: {
              fontStyle: 'normal',
              color: '#6b7280',
              borderLeftColor: '#e5e7eb',
              borderLeftWidth: '3px',
              paddingLeft: '1.5rem',
              quotes: 'none',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5rem',
            },
            'ul > li, ol > li': {
              paddingLeft: '0.5rem',
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
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