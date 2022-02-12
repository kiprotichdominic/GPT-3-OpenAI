import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css'

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title='What is GPT-3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos rem iure. Tempore quibusdam fugit, perferendis neque incidunt eum et.' />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination
                </h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh thought.' />
                <Feature title='Knowledgebase' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos rem iure. Tempore.' />
                <Feature title='Education' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos rem iure. Tempore.' />
            </div>
        </div>
    );
};

export default WhatGPT3;
