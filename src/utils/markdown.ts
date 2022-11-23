import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

const markdown: MarkdownIt = new MarkdownIt({
  html: true,
  breaks: true,
  highlight: function (code, language) {
    if (language && hljs.getLanguage(language)) {
      try {
        return (
          `<pre><code class="hljs language-${language}>` +
          hljs.highlight(code, { language }).value +
          '</code></pre>'
        )
      } catch (__) {}
    }
    return '<pre class="hljs"><code>' + markdown.utils.escapeHtml(code) + '</code></pre>'
  }
})

export default markdown
