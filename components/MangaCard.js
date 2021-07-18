import useSWR from 'swr';
import Modal from 'react-modal';
import { useState } from 'react';
import parse from 'html-react-parser';
import { FaUserCircle } from "react-icons/fa";

import fetcher from '@/lib/fetcher';

Modal.setAppElement('body')

export default function MangaCard({ tag }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(e) {
        e.stopPropagation();
        setIsOpen(false);
    }

    const { data: manga } = useSWR(`/api/get-manga-info/${tag}`, fetcher);

    if (!manga)
        return null;

    return (

        <button className="transition-height ease-in-out hover:-translate-y-1 hover:scale-105 p-4 col-auto" onClick={openModal}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                contentLabel={`${manga.title} Modal`}
                overlayClassName="bg-white dark:bg-black fixed inset-0 bg-opacity-75 dark:bg-opacity-75 m-auto"
                className="bg-gradient-to-r from-white to-gray-100 dark:from-gray-900 dark:to-black max-w-2xl max-h-max mx-auto my-64 rounded overflow-hidden shadow-lg dark:shadow-white"
            >
                <div className="flex">
                    <img className="object-cover flex-initial" src={manga.img_url} alt={manga.title} />
                    <div className="flex-initial max-w-max mx-6">
                        <h1 className="text-2xl mt-4 mr-4 mb-2 prose flex-initial"><a href={`${manga.url}`} target="_blank" rel="noopener noreferrer">{manga.title}</a></h1>
                        <p className="text-gray-600 dark:text-gray-400 leading-none flex mb-2">
                            <FaUserCircle className="w-3.5 h-3.5" />
                            &nbsp;
                            {manga.author}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">{parse(manga.description)}</p>
                        <p class="text-gray-700 dark:text-gray-400">Last Updated: {manga.updated}</p>
                        <p class="text-gray-700 dark:text-gray-400 mb-2">Latest Chapter: {manga.latest_chapter}</p>
                    </div>
                </div>
            </Modal>
            <img className="w-24 h-36 rounded" src={manga.img_url} alt={manga.title} />
        </button>
    );
}