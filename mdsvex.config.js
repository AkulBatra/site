import { getHighlighter } from 'shiki';
import  dracula   from 'shiki/themes/one-dark-pro.mjs';

export default {
  extensions: ['.md'],
  highlight: {
    highlighter: async (code, lang) => {
      const highlighter = await getHighlighter({ theme: dracula, langs: [lang] });
      const html = (highlighter.codeToHtml(code, { lang: lang, theme: dracula }));
      return `{@html \`${html}\`}`;
    }
  },
};
