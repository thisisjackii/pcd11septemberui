import React from 'react';

function Uploaded() {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <h1 className="display-1">Menu</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Umum</h2>
                        {/* Add your buttons and forms */}
                    </div>
                    <div className="col-md-4">
                        <h2>Pergeseran</h2>
                        {/* Add your buttons and forms */}
                    </div>
                    <div className="col-md-4">
                        <h2>Penerangan</h2>
                        {/* Add your buttons and forms */}
                    </div>
                    {/* Additional content */}
                </div>
                <div className="container-fluid">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>After</h3>
                                    {/* Add your image */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Uploaded;
