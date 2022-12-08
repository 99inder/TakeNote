import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

const AddNote = () => {
    const dispatch = useDispatch();
    const { addNote } = bindActionCreators(actionCreators, dispatch);
    const [note, setnote] = useState({ title: "", description: "", tag: "" });

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value});
    }

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note);
    }
    return (
        <div>
            <form>
                <div className="mb-8">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">*Title</label>
                    <input type="text" id="title" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} required />
                </div>
                <div className="mb-8">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">*Description</label>
                    <input type="text" id="description" name='description' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} required />
                </div>
                <div className="mb-6">
                    <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
                    <input type="text" id="tag" name='tag' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default AddNote;