import React from 'react';

const Training = () => {
    return (
        <div>
            <h2 className="fs-1 fw-bold text-primary">Free For Homies</h2>
            <div className="row mx-auto">
                <iframe className="p-4 col-lg-6 col-12" width="30%" height="415" src="https://www.youtube.com/embed/TNsyyvCizhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="p-4 col-lg-6 col-12" width="30%" height="415" src="https://www.youtube.com/embed/qF1Xu2ImGC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
        </div>
    );
};

export default Training;