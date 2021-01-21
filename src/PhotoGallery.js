import React from 'react';
import PhotoCard from './PhotoCard';

/*
    The <></> JSX are short hand for:
    <React.Fragment></React.Fragment>
    This exists so you don't litter your DOM
    with a bunch of divs. 
*/

const data = [
    {
        title: "Bold",
        description: "Headline",
        url: "/super.jpg"
    },
    {
        title: "You see it",
        description: "Don't try me",
        url: "/superman.jpg"
    },
    {
        title: "Lil Solider",
        description: "Getting to it",
        url: "/hero2.png"
    }
];

function PhotoGallery() {
    return (
        <>
            <h2>The Gallery</h2>
            <div className="gallery"> 
                {
                    data.map(i => <PhotoCard 
                                    title={i.title}
                                    description={i.description}
                                     url={i.url} 
                                />)
                }

            </div>
        </>
    );
}

export default PhotoGallery;