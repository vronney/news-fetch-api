export default {
    define: {
        'import.meta.env.API_KEY': JSON.stringify(process.env.NEWS_API_KEY || ''),
    }
}