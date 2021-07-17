import useSWR from 'swr';
import Modal from 'react-modal';
import { useState } from 'react';

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
                overlayClassName="bg-white dark:bg-black bg-opacity-25 fixed inset-0 border"
                className="bg-white dark:bg-black"
            >
                <button onClick={closeModal}>close</button>
                boo
            </Modal>
            <img className="w-24 h-36" src={manga.img_url} alt={manga.title} />
        </button>
    );
}