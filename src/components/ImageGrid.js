import {React, useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { getImages } from '../api';
import { IoIosArrowDown } from 'react-icons/io';

const ImageGrid = ({ setSelectedImg }) => {
    
    const [imageList, setImageList] = useState([]);
    const [nextCursor, setNextCursor] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const responseJson = await getImages();
            setImageList(responseJson.resources);
            setNextCursor(responseJson.next_cursor);
        };

        fetchData();
    }, [])

    const handleLoadMoreClick = async () => {
        const responseJson = await getImages(nextCursor);
        setImageList((currentImageList) => [
            ...currentImageList,
            ...responseJson.resources,
        ]);
        setNextCursor(responseJson.next_cursor);
    }

    const [imageLoading, setImageLoading] = useState(true);
    const [pulsing, setPulsing] = useState(true);

    const imageLoaded = () => {
        setImageLoading(false);
        setTimeout(() => setPulsing(false), 600);
    };


    return (
        <>
            <div 
                className="image-grid">
                {imageList && imageList.map((image) => 
                    <motion.div className={`${pulsing ? "pulse" : ""} loadable`}
                    onClick={() => setSelectedImg(image.url)}
                    whileHover={{
                        opacity: 0.8,
                        scale: 1.01}}>
                        <motion.img
                        initial={{ opacity: 0}}
                        animate={{
                            opacity: imageLoading ? 0 : 1
                        }}
                        transition={
                            { opacity: { delay: 0.5, duration: 0.7 } }
                        }
                        onLoad={imageLoaded}
                        src={image.url} 
                        alt={image.public_id}
                        ></motion.img>
                    </motion.div>)}
            </div>
        {nextCursor && <button onClick={handleLoadMoreClick}><IoIosArrowDown /></button>}
        </>
    )
}

export default ImageGrid;
