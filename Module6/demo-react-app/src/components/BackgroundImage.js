import React from 'react'

function BackgroundImage(children, emoji ='angry', overlay = 'white') {
    return (
        <div className={'BackgroundImage componentBox BackgroundImage-' + emoji + 'overlay overlay-' + overlay}>
            {children} {/* everything in between the opening <FancyBorder> and closing </FancyBorder> tags on lines 15-19 */}
        </div>
    );
}

export default BackgroundImage