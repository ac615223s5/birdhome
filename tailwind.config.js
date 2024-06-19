module.exports = {
  content: [
    './_drafts/**/*.html',
    './collections/_posts/**/*.{html,md,markdown}',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './pages/*.{html,md,markdown}',
    './*.{html,md,markdown}',
  ],
  safelist:[
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    'dark:bg-zinc-950',
    'dark:bg-zinc-900',
    'dark:bg-black',
    '!dark:border-0',
  ],
  theme: {
    theme: {
      extend: {},
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: []
}