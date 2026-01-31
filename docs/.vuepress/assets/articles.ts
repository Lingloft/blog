export interface ArticleData {
    title: string;
    url: string;
    author: string;
    authorUrl: string;
}

const context = require.context("../../articles", true, /\.md$/);
const articles: ArticleData[] = context.keys().map(key => {
    const filename = key.replace("./", "").replace(/\.md$/, "");
    const [author, title] = filename.split("/");
    return {
        title,
        author,
        url: `/articles/${filename}`,
        authorUrl: `/articles/${author}/readme`,
    };
});
export default articles;