export interface ArticleData {
    title: string;
    url: string;
    author: string;
}
export type AuthorUrl = Record<string, string | null>;

const context = require.context("../../articles", true, /\.md$/);
export const articles: ArticleData[] = context.keys().map(key => {
    const filename = key.replace("./", "").replace(/\.md$/, "");
    const [author, title] = filename.split("/");
    return {
        title,
        author,
        url: `/articles/${filename}.html`
    };
});
export const authorUrls: AuthorUrl = articles.map(article => (
    article.title === "readme"
        ? { [article.author]: `/articles/${article.author}/readme.html` }
        : {}
)).reduce((acc, cur) => ({ ...acc, ...cur }), {} as AuthorUrl) || {};
export default articles;