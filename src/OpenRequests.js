import React from "react";
import "./App.css";
import { requestData } from "./data";

export const OpenRequests = () => {
    return (

        <>
            <section class="section" className="request-container">
                {/* FOR EACH REQUEST */}
                    {requestData.map((data, key) => {
                        return (
                            <div className="box" key={key}>
                                <div className="columns">
                                    <div className="column">
                                        <div className="has-text-grey-lighter is-uppercase">
                                            Start time
                                        </div>
                                        {data.startTime} hrs
                                    </div>
                                    <div className="column">
                                        <div className="has-text-grey-lighter is-uppercase">
                                            Client
                                        </div>
                                        {data.name}
                                    </div>
                                    <div className="column">
                                        <button className="button is-link has-background-elanza">View details
                                            of {key}</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                {/* END FOR EACH */}

            </section>
        </>
    );
};