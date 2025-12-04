import cs_core_category from './cs-core/_category_.json';
import python_category from './python/_category_.json';

const cardsList = [
    {
        title:cs_core_category.label,
        url:`docs/${cs_core_category.link.slug.split("/").slice(-1)[0]}`,
    },
    {
        title:python_category.label,
        url:`docs/${python_category.link.slug.split("/").slice(-1)[0]}`,
    },
];


export default cardsList;