import React from 'react';

const NoteItem = (props) => {
    const { note } = props;
    return (
        <>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{note.description}</p>
                <div className="options mt-4">
                    <button className="mr-4 text-red-500"><i className="fa-regular fa-trash-can"></i>Delete</button>
                    <button className="ml-4 text-green-500"><i className="fa-solid fa-pen-to-square"></i>Edit</button>
                </div>
            </div>

        </>
    )
}

export default NoteItem;