import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            // ...
        },
        breakpoints: {
            // sm: "640px",
            // md: "768px",
            sm: "960px",
            md: "1025px",
            lg: "1163px",
            xl: "1280px",
            xxl: "1366px",
            xxxl: "1536px",
            xxxxl: "1921px",
            xxxxxl: "2581px",
        },
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // ...
            },
        }),
    ],
    rules: [
        [/^m-([\.\d]+)$/, ([, d]) => ({ margin: `${parseFloat(d) / 4}rem` })],
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})