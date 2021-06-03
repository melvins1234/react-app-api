import {useState} from 'react'
import Field from '../InputField/InputField'
export const Form = ({formData}) => {
    // const [page, setPage] = useState(0);
    // const [currentPageData, setCurrentPageData] = useState(formData[page]);
    const onSubmit = (e) => {
        e.PreventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <Field field='test' fieldChanged='sample' type='text' value='test'></Field>
        </form>
    )
}