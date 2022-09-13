import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/js/user/home.js',
                'resources/js/user/navbar.js',
                'resources/js/user/home-slider.js'

                    
            ],
            refresh: true,
        }),
    ],
});
