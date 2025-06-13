import { useState } from 'react';
import pow from '../assets/imgs/pow.png';
import './comicPow.css';

export default function ButtonWithEffect({ t }) {
    const [burst, setBurst] = useState(false);

    const handleClick = () => {
        setBurst(true);
        setTimeout(() => setBurst(false), 900);
        // Add your real click logic here if needed
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button className="cta-button" onClick={handleClick}>
                {t('buttonLabel')}
            </button>
            {burst && (
                <img
                    src={pow}
                    alt="POW burst"
                    className="burst"
                />
            )}
        </div>
    );
}
