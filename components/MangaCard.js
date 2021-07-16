import useSWR from 'swr';
import Modal from 'react-modal';
import { useState } from 'react';

import fetcher from '@/lib/fetcher';

export default function MangaCard({ tag }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
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
                overlayClassName="bg-black bg-opacity-25 fixed inset-0"
            >
                boo
            </Modal>
            <img className="w-24 h-36" src={manga.img_url} alt={manga.title} />
        </button>
    );
}