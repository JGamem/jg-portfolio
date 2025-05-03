// src/design/tokens.ts
export const tokens = {
    colors: {
        brand: {
            primary: 'var(--color-brand-primary)',
            secondary: 'var(--color-brand-secondary)',
            accent: 'var(--color-brand-accent)',
        },
        ui: {
            background: 'var(--color-ui-background)',
            foreground: 'var(--color-ui-foreground)',
            card: 'var(--color-ui-card)',
            border: 'var(--color-ui-border)',
        },
        text: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-secondary)',
            tertiary: 'var(--color-text-tertiary)',
            inverse: 'var(--color-text-inverse)',
        },
    },
    spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
    },
    typography: {
        fontSizes: {
            xs: 'var(--font-size-xs)',
            sm: 'var(--font-size-sm)',
            md: 'var(--font-size-md)',
            lg: 'var(--font-size-lg)',
            xl: 'var(--font-size-xl)',
            '2xl': 'var(--font-size-2xl)',
            '3xl': 'var(--font-size-3xl)',
        },
        fontWeights: {
            light: 'var(--font-weight-light)',
            normal: 'var(--font-weight-normal)',
            medium: 'var(--font-weight-medium)',
            semibold: 'var(--font-weight-semibold)',
            bold: 'var(--font-weight-bold)',
        },
        lineHeights: {
            tight: 'var(--line-height-tight)',
            normal: 'var(--line-height-normal)',
            relaxed: 'var(--line-height-relaxed)',
        },
    },
    radii: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)',
    },
    shadows: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
    },
    zIndices: {
        below: 'var(--z-below)',
        base: 'var(--z-base)',
        above: 'var(--z-above)',
        modal: 'var(--z-modal)',
        toast: 'var(--z-toast)',
    },
    transitions: {
        fast: 'var(--transition-fast)',
        normal: 'var(--transition-normal)',
        slow: 'var(--transition-slow)',
    },
};