export const THEME_KEY = "arisu-theme";

// Run before the first paint. Only this fixed, application-owned string is inlined.
export const themeInitScript = `(function(){var t;try{t=localStorage.getItem('${THEME_KEY}')}catch(e){}document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'})()`;
