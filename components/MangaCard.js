import useSWR from 'swr';
import Modal from 'react-modal';
import { useState } from 'react';
import parse from 'html-react-parser';

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

        <button className="transition-height ease-in-out hover:-translate-y-1 hover:scale-105 rounded p-4 col-auto" onClick={openModal}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                contentLabel="Example Modal"
                overlayClassName="bg-white dark:bg-black fixed inset-0 bg-opacity-75 dark:bg-opacity-75 m-auto"
                className="bg-white dark:bg-black max-w-sm mx-auto my-64 border rounded overflow-hidden shadow-lg"
            >
                <div className="absolute">
                    {manga.title} <br />
                    {parse(manga.description)} <br />
                    {manga.updated} <br />
                    {manga.latest_chapter} <br />
                </div>
            </Modal>
        </button>
    );
}