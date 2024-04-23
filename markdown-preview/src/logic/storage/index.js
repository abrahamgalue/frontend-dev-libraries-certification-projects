export const saveMarkdownToStorage = ({ text }) => {
  window.localStorage.setItem('markdown', text)
}