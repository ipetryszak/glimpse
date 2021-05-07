import React, {InputHTMLAttributes} from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import ApiKey from "./api-key";
import {API_KEYS_LS, getKeysFromLS} from "../../app/utils";
import {IKey} from "../../models/key";

describe('ApiKey Component', () => {

    it('should render correctly', async () => {
        render( <ApiKey /> );
        const yt = await screen.findByText(/YouTube/i);
        const vi = await screen.findByText(/Vimeo/i);

        expect(yt).toBeInTheDocument();
        expect(vi).toBeInTheDocument();
    });

    it('should contain input key', async () => {
        const key = 'vimeoKeyTest123';
        render( <ApiKey /> );

        const vi = await screen.findByText(/Vimeo/i);
        const keyInput: any = await screen.findByLabelText('api key input');

        vi.click();

        fireEvent.change(keyInput, { target: { value: key } })

        expect(keyInput.value).toBe(key);
        const keysLS = getKeysFromLS();
        expect(keysLS.Vimeo).toBe(key);
    });

    it('should contain key from LS', async () => {
        const keys = {
            YouTube: 'youtubeKey',
            Vimeo: 'vimeoKey'
        }
        window.localStorage.setItem(API_KEYS_LS, JSON.stringify(keys));

        render( <ApiKey /> );

        const vi = await screen.findByText(/Vimeo/i);
        const keyInput: any = await screen.findByLabelText('api key input');

        vi.click();

        expect(keyInput.value).toBe(keys.Vimeo);
    });

});
