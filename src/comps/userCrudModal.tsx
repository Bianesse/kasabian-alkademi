'use client'
import React from "react";

interface Props {
    id: string
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSave: () => void;
    onClose: () => void;
    visible: boolean;
}

export default function CrudModal({ id, name, onChange, onSave, onClose, visible }: Props) {
    return (
        <>
            <dialog id={id} className={`modal ${visible ? "modal-open" : ""}`}>
                <div className="modal-box bg-gray-900 text-white">
                    <h3 className="font-bold text-lg mb-4">User</h3>
                    <input
                        type="text"
                        className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={name}
                        onChange={onChange}
                    />
                    <input
                        type="email"
                        className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={name}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={name}
                        onChange={onChange}
                    />
                    <div className="modal-action">
                        <form method="dialog" className="flex gap-2">
                            <button
                                type="button"
                                onClick={onSave}
                                className="btn btn-primary"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="btn"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}