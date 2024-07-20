import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-3 mt-[44px]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col">
                    <div>
                        <p className="text-[16px]">Built with React and Socket.io</p>
                    </div>
                    <div>
                        <p>&copy; 2024 Chat App. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
