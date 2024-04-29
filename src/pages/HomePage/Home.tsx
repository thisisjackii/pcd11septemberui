import React, { useState } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.[0] ?? null);
    };

    const handleUpload = async (event: React.FormEvent) => {
        event.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            
            // Send file to the backend
            try {
                const response = await axios.post('http://localhost:5000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                // Handle response
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 align-self-center">Change this title</h1>
                <p className="lead">Description.</p>
                <form onSubmit={handleUpload}>
                    <input
                        title='Choose a file'
                        name="file"
                        type="file"
                        id="inputGroupFile04"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <button type="submit" className="btn btn-primary">Upload</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
