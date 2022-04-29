import React from 'react';

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {["home", "about", "work", "skills", "testimonial", "contact"].map((item, index) => (
                <a key={`a-${index}`} className="app__navigation-dot" href={`#${item}`} style={active === item ? { backgroundColor: '#313bac' } : {}} ></a>
            ))}
        </div>
    );
}

export default NavigationDots;
