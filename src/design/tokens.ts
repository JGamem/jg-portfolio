// src/design/tokens.ts
export const tokens = {
    colors: {
        brand: {
            primary: {
                50: 'var(--color-brand-primary-50)',
                100: 'var(--color-brand-primary-100)',
                200: 'var(--color-brand-primary-200)',
                300: 'var(--color-brand-primary-300)',
                400: 'var(--color-brand-primary-400)',
                500: 'var(--color-brand-primary-500)',
                600: 'var(--color-brand-primary-600)',
                700: 'var(--color-brand-primary-700)',
                800: 'var(--color-brand-primary-800)',
                900: 'var(--color-brand-primary-900)',
            },
            secondary: {
                50: 'var(--color-brand-secondary-50)',
                100: 'var(--color-brand-secondary-100)',
                200: 'var(--color-brand-secondary-200)',
                300: 'var(--color-brand-secondary-300)',
                400: 'var(--color-brand-secondary-400)',
                500: 'var(--color-brand-secondary-500)',
                600: 'var(--color-brand-secondary-600)',
                700: 'var(--color-brand-secondary-700)',
                800: 'var(--color-brand-secondary-800)',
                900: 'var(--color-brand-secondary-900)',
            },
            accent: {
                50: 'var(--color-brand-accent-50)',
                100: 'var(--color-brand-accent-100)',
                200: 'var(--color-brand-accent-200)',
                300: 'var(--color-brand-accent-300)',
                400: 'var(--color-brand-accent-400)',
                500: 'var(--color-brand-accent-500)',
                600: 'var(--color-brand-accent-600)',
                700: 'var(--color-brand-accent-700)',
                800: 'var(--color-brand-accent-800)',
                900: 'var(--color-brand-accent-900)',
            },
        },
        surface: {
            background: {
                primary: 'var(--color-surface-background-primary)',
                secondary: 'var(--color-surface-background-secondary)',
                tertiary: 'var(--color-surface-background-tertiary)',
            },
            foreground: {
                primary: 'var(--color-surface-foreground-primary)',
                secondary: 'var(--color-surface-foreground-secondary)',
                tertiary: 'var(--color-surface-foreground-tertiary)',
            },
            border: {
                subtle: 'var(--color-surface-border-subtle)',
                default: 'var(--color-surface-border-default)',
                strong: 'var(--color-surface-border-strong)',
            },
        },
        text: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-secondary)',
            tertiary: 'var(--color-text-tertiary)',
            disabled: 'var(--color-text-disabled)',
            inverse: {
                primary: 'var(--color-text-inverse-primary)',
                secondary: 'var(--color-text-inverse-secondary)',
            },
            brand: 'var(--color-text-brand)',
        },
    },
    spacing: {
        component: {
            xs: 'var(--spacing-component-xs)',
            sm: 'var(--spacing-component-sm)',
            md: 'var(--spacing-component-md)',
            lg: 'var(--spacing-component-lg)',
            xl: 'var(--spacing-component-xl)',
        },
        layout: {
            xs: 'var(--spacing-layout-xs)',
            sm: 'var(--spacing-layout-sm)',
            md: 'var(--spacing-layout-md)',
            lg: 'var(--spacing-layout-lg)',
            xl: 'var(--spacing-layout-xl)',
        },
        inset: {
            xs: 'var(--spacing-inset-xs)',
            sm: 'var(--spacing-inset-sm)',
            md: 'var(--spacing-inset-md)',
            lg: 'var(--spacing-inset-lg)',
            xl: 'var(--spacing-inset-xl)',
        },
    },
    typography: {
        fontFamily: {
            primary: 'var(--font-family-primary)',
            secondary: 'var(--font-family-secondary)',
            mono: 'var(--font-family-mono)',
        },
        fontSize: {
            '2xs': {
                size: 'var(--font-size-2xs)',
                lineHeight: 'var(--line-height-2xs)',
            },
            xs: {
                size: 'var(--font-size-xs)',
                lineHeight: 'var(--line-height-xs)',
            },
            sm: {
                size: 'var(--font-size-sm)',
                lineHeight: 'var(--line-height-sm)',
            },
            md: {
                size: 'var(--font-size-md)',
                lineHeight: 'var(--line-height-md)',
            },
            lg: {
                size: 'var(--font-size-lg)',
                lineHeight: 'var(--line-height-lg)',
            },
            xl: {
                size: 'var(--font-size-xl)',
                lineHeight: 'var(--line-height-xl)',
            },
            '2xl': {
                size: 'var(--font-size-2xl)',
                lineHeight: 'var(--line-height-2xl)',
            },
            '3xl': {
                size: 'var(--font-size-3xl)',
                lineHeight: 'var(--line-height-3xl)',
            },
        },
        fontWeight: {
            regular: 'var(--font-weight-regular)',
            medium: 'var(--font-weight-medium)',
            semibold: 'var(--font-weight-semibold)',
            bold: 'var(--font-weight-bold)',
        },
        textStyles: {
            display: {
                lg: {
                    fontSize: 'var(--text-display-lg-size)',
                    lineHeight: 'var(--text-display-lg-line-height)',
                    fontWeight: 'var(--text-display-lg-font-weight)',
                    letterSpacing: 'var(--text-display-lg-letter-spacing)',
                },
                md: {
                    fontSize: 'var(--text-display-md-size)',
                    lineHeight: 'var(--text-display-md-line-height)',
                    fontWeight: 'var(--text-display-md-font-weight)',
                    letterSpacing: 'var(--text-display-md-letter-spacing)',
                },
                sm: {
                    fontSize: 'var(--text-display-sm-size)',
                    lineHeight: 'var(--text-display-sm-line-height)',
                    fontWeight: 'var(--text-display-sm-font-weight)',
                    letterSpacing: 'var(--text-display-sm-letter-spacing)',
                },
            },
            heading: {
                h1: {
                    fontSize: 'var(--text-heading-h1-size)',
                    lineHeight: 'var(--text-heading-h1-line-height)',
                    fontWeight: 'var(--text-heading-h1-font-weight)',
                    letterSpacing: 'var(--text-heading-h1-letter-spacing)',
                },
                h2: {
                    fontSize: 'var(--text-heading-h2-size)',
                    lineHeight: 'var(--text-heading-h2-line-height)',
                    fontWeight: 'var(--text-heading-h2-font-weight)',
                    letterSpacing: 'var(--text-heading-h2-letter-spacing)',
                },
                h3: {
                    fontSize: 'var(--text-heading-h3-size)',
                    lineHeight: 'var(--text-heading-h3-line-height)',
                    fontWeight: 'var(--text-heading-h3-font-weight)',
                    letterSpacing: 'var(--text-heading-h3-letter-spacing)',
                },
                h4: {
                    fontSize: 'var(--text-heading-h4-size)',
                    lineHeight: 'var(--text-heading-h4-line-height)',
                    fontWeight: 'var(--text-heading-h4-font-weight)',
                    letterSpacing: 'var(--text-heading-h4-letter-spacing)',
                },
            },
            body: {
                lg: {
                    fontSize: 'var(--text-body-lg-size)',
                    lineHeight: 'var(--text-body-lg-line-height)',
                    fontWeight: 'var(--text-body-lg-font-weight)',
                    letterSpacing: 'var(--text-body-lg-letter-spacing)',
                },
                md: {
                    fontSize: 'var(--text-body-md-size)',
                    lineHeight: 'var(--text-body-md-line-height)',
                    fontWeight: 'var(--text-body-md-font-weight)',
                    letterSpacing: 'var(--text-body-md-letter-spacing)',
                },
                sm: {
                    fontSize: 'var(--text-body-sm-size)',
                    lineHeight: 'var(--text-body-sm-line-height)',
                    fontWeight: 'var(--text-body-sm-font-weight)',
                    letterSpacing: 'var(--text-body-sm-letter-spacing)',
                },
            },
        },
    },
    elevation: {
        0: 'var(--elevation-0)',
        1: 'var(--elevation-1)',
        2: 'var(--elevation-2)',
        3: 'var(--elevation-3)',
        4: 'var(--elevation-4)',
    },
    motion: {
        duration: {
            instant: 'var(--motion-duration-instant)',
            fast: 'var(--motion-duration-fast)',
            normal: 'var(--motion-duration-normal)',
            slow: 'var(--motion-duration-slow)',
            slower: 'var(--motion-duration-slower)',
        },
        easing: {
            standard: 'var(--motion-easing-standard)',
            entrance: 'var(--motion-easing-entrance)',
            exit: 'var(--motion-easing-exit)',
            emphasized: 'var(--motion-easing-emphasized)',
        },
    },
    border: {
        width: {
            none: '0',
            thin: 'var(--border-width-thin)',
            thick: 'var(--border-width-thick)',
            thicker: 'var(--border-width-thicker)',
        },
        radius: {
            none: '0',
            sm: 'var(--border-radius-sm)',
            md: 'var(--border-radius-md)',
            lg: 'var(--border-radius-lg)',
            xl: 'var(--border-radius-xl)',
            pill: 'var(--border-radius-pill)',
            circular: 'var(--border-radius-circular)',
        },
    },
    zIndex: {
        hide: 'var(--z-index-hide)',
        base: 'var(--z-index-base)',
        dropdown: 'var(--z-index-dropdown)',
        sticky: 'var(--z-index-sticky)',
        fixed: 'var(--z-index-fixed)',
        modal: 'var(--z-index-modal)',
        popover: 'var(--z-index-popover)',
        tooltip: 'var(--z-index-tooltip)',
        toast: 'var(--z-index-toast)',
    },
};