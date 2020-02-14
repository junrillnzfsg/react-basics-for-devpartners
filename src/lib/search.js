import FuzzySearch from 'fuzzy-search';
import data from "./data";

export default function search(value) {
    const searcher = new FuzzySearch(data, ['email'], {
        caseSensitive: true,
    });

    return  searcher.search(value)
}