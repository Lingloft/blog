export interface ArticleData {
    title: string;
    url: string;
}

const context = require.context("../../articles", true, /\.md$/);
const articles: ArticleData[] = context.keys().map(key => {
    const title = key.replace("./", "").replace(/\.md$/, "");
    return {
        title: title,
        url: `/articles/${title}`
    };
});
export default articles;