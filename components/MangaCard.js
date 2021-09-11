import Modal from 'react-modal';
import { useState } from 'react';
import parse from 'html-react-parser';
import { FaUserCircle, FaWindowClose } from "react-icons/fa";

Modal.setAppElement('body')

export default function MangaCard({ manga }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [titleShown, setTitleShown] = useState(true);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(e) {
        e.stopPropagation();
        setIsOpen(false);
    }

    if (!manga)
        return null;

    return (

        <button className="manga transition-height ease-in-out hover:-translate-y-1 hover:scale-105 p-4 col-auto" onClick={openModal}
            onMouseEnter={() => setTitleShown(false)} onMouseLeave={() => setTitleShown(true)}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                contentLabel={`${manga.title} Modal`}
                overlayClassName="bg-white dark:bg-black fixed inset-0 bg-opacity-75 dark:bg-opacity-75 m-auto"
                className="bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-black
                max-w-2xl mx-auto my-28 md:my-36 rounded overflow-hidden shadow-3xl md:shadow-2xl dark:shadow-white h-auto"
            >
                <button className="absolute right-4 mt-2 md:relative md:right-auto md:ml-4 md:mt-4 md:float-right md:mr-4" onClick={closeModal}>
                    <FaWindowClose className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white w-5 h-5 rounded" />
                </button>
                <div className="flex md:mt-0 rounded-lg md:rounded-none">
                    <img className="hidden md:flex md:h-full md:min-w-min md:flex-initial rounded-lg md:m-4" src={manga.img_url} alt={manga.title} />
                    <div className="flex-initial h-auto max-w-screen md:relative">
                        <div className="mx-12 md:mx-6 md:mt-0">
                            <h1 className="text-xl md:text-2xl mt-4 mr-4 mb-2 prose"><a href={`${manga.url}`} target="_blank" rel="noopener noreferrer">{manga.title}</a></h1>

                            <p className="text-gray-600 dark:text-gray-400 leading-none flex mb-2">
                                <FaUserCircle className="w-3.5 h-3.5" />
                                &nbsp;
                                {manga.author}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{parse(manga.description)}</p>
                            <p className="text-gray-700 dark:text-gray-400">Last Updated: {manga.updated}</p>
                            <p className="text-gray-700 dark:text-gray-400 mb-4">Latest Chapter: {manga.latest_chapter}</p>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="w-24 h-36 relative rounded-sm" style={{ "backgroundImage": `url(${manga.img_url})`, "backgroundSize": "cover" }}>
                {
                    titleShown &&
                    (
                        <div className="title flex justify-center bg-black backdrop-filter backdrop-blur-sm bg-opacity-25 
                            text-center p-2 mt-2 w-24 h-36 overflow-auto scrollbar-hide">
                            <span className="text-white text-sm font-semibold break-words overflow-ellipsis">{manga.title}</span>
                        </div>
                    )
                }
            </div>
        </button>
    );
}