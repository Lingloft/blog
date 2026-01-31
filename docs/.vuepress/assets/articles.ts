export interface ArticleData {
    title: string;
    url: string;
    author: string;
}

const context = require.context("../../articles", true, /\.md$/);
const articles: ArticleData[] = context.keys().map(key => {
    const filename = key.replace("./", "").replace(/\.md$/, "");
    const [author, title] = filename.split("/");
    return {
        title,
        author,
        url: `/articles/${filename}`
    };
});
export default articles;