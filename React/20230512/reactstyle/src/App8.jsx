import React, { useState } from 'react';
import Modal from './Components/Modal';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    return (
        <div>
            <h1>Welcome to my app!</h1>
            <button onClick={handleOpenModal}>Open modal</button>
            {isModalOpen && (
                <Modal
                    title="My modal"
                    content="This is my modal."
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}

export default App;