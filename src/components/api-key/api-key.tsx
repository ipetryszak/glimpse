import * as React from 'react';
import {useEffect, useState} from 'react';
import styles from './api-key.module.scss';
import {VideoPlatforms} from "../../app/video-platforms";

export interface ApiKeyProps {
}

const ApiKey: React.FC< ApiKeyProps > = ( ) => {
    const [platform, setPlatform] = useState(VideoPlatforms.YouTube);
    const [keyValue, setKeyValue] = useState();

    useEffect(() => {

    },[platform]);

    return (
        <div className={styles.container}>
            <div>
                <p className={platform === VideoPlatforms.YouTube ? styles.active : '' }
                   onClick={() => setPlatform(VideoPlatforms.YouTube)}>YouTube</p>

                <p className={platform === VideoPlatforms.Vimeo ? styles.active : '' }
                   onClick={ () => setPlatform(VideoPlatforms.Vimeo)}>Vimeo</p>
            </div>
            <div>
                <input
                    aria-label="api key input"
                    type="text"
                    name="api key"
                    placeholder="Key"
                    autoComplete="off"
                />
            </div>
        </div>
    )
};

export default ApiKey;
