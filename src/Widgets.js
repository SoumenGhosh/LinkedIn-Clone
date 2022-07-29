import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleleft">                
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />   
            </div>
            {newsArticle('Soumen Ghosh is back', 'Top News are floating in air')}
            {newsArticle('Corona virus is gone.', 'New weak variant is found in BD')} 
            {newsArticle('Bangladesh cricket', 'BD Cricket men team will play with Zimbabwe')}       
            {newsArticle('Dollar Price rises', '125 BDT cross USD rate at local market Bangladesh')}
        </div>        
    )
}

export default Widgets