import React from 'react';
import { Link } from 'react-router-dom';

const Histogram: React.FC = () => {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <h1 className="display-1">Menu</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>General</h2>
                        <div className="d-flex flex-wrap">
                            <div className="p-2 flex-fill bd-highlight">
                                <Link to="/normal" className="btn btn-primary">Normal</Link>
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                <Link to="/grayscale" className="btn btn-primary">Grayscale</Link>
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                <Link to="/zoomin" className="btn btn-primary">Zoom In</Link>
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                <Link to="/zoomout" className="btn btn-primary">Zoom Out</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2>Shifts</h2>
                        <div className="d-flex flex-wrap">
                            <div className="p-2 flex-fill bd-highlight">
                                <Link to="/move_left" className="btn btn-primary">Move Left</Link>
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                <Link to="/move_right" className="btn btn-primary">Move Right</Link>
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                <Link to="/move_up" className="btn btn-primary">Move Up</Link>
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                <Link to="/move_down" className="btn btn-primary">Move Down</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2>Lighting</h2>
                        <div className="d-flex flex-wrap">
                            <div className="p-2 flex-fill bd-highlight">
                                <Link to="/brightness_multiplication" className="btn btn-primary">Bright (*)</Link>
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                <Link to="/brightness_division" className="btn btn-primary">Dark (/)</Link>
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                <Link to="/brightness_addition" className="btn btn-primary">Bright (+)</Link>
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                <Link to="/brightness_substraction" className="btn btn-primary">Dark (-)</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2>Image Analysis</h2>
                        <div className="p-2 flex-fill bd-highlight">
                            <Link to="/histogram_rgb" className="btn btn-primary">Histogram</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="row">
                            {/* Add condition to display different images based on file_paths */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Histogram;
