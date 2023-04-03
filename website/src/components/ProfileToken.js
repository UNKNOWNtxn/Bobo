import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ProfileToken({ tokenId }) {
    const [metadata, setMetadata] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        async function fetchMetadata() {
            const res = await fetch('/api/metadata/');
            const data = await res.json();
            setMetadata(data);
        }

        if (tokenId) {
            fetchMetadata();
        }
    }, [tokenId]);

    useEffect(() => {
        if (metadata) {
            setImageUrl(metadata.image);
        }
    }, [metadata]);

    const handleChange = (event) => {
        setNewName(event.target.value);
    };

    const handleRename = async () => {
        try {
<<<<<<< HEAD
          const response = await fetch(`/api/metadata`, {
=======
          const response = await fetch(`http://localhost:3001/update-metadata/${tokenId}`, {
>>>>>>> parent of 366bb48 (Update ProfileToken.js)
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newName }),
          })
          const data = await response.json();
          console.log(data)
      
          if (response.ok) {
            console.log('Metadata updated successfully');
            // Update the local state to reflect the changes
            setMetadata({
              ...metadata,
              name: newName,
            });
          } else {
            console.error('Error updating metadata');
          }
        } catch (err) {
          console.error('Error updating metadata:', err);
        }
      };
      

    if (!imageUrl) return null;

    return (
        <div className="flex flex-col items-center font-pressStart">
            {imageUrl && (
                <Link
                    href={`https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/${tokenId}`}
                    target="_blank"
                    key={tokenId}
                >
                    <Image
                        src={imageUrl}
                        alt={`Bobo NFT #${tokenId}`}
                        width={200}
                        height={200}
                    />
                </Link>
            )}
            Bobo #{parseInt(tokenId, 10)}
            <input
                type="text"
                value={newName}
                onChange={handleChange}
                placeholder="Bobo"
                className="mt-2 w-3/4 text-center z-30"
            />
            <button onClick={handleRename} className="bg-black w-3/4 text-gray-500 rounded-md mt-2 z-30">
                Rename
            </button>
        </div>
    );
}

export default ProfileToken;
