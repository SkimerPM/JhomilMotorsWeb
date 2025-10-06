// Custom colors for light and dark themes in Tailwind CSS
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Colores para modo claro
                "blue-primary": "#1D428A",
                "red-primary": "#7E021A",
                "background-light": "#F4F3F2",
                "surface-light": "#F0F5FF",
                "on-background-light": "#0D224B",
                "on-surface-light": "#333333",
                "accent-light": "#84AEFF",
                // Colores para modo oscuro
                "blue-primary-dark": "#90B4FF",
                "red-primary-dark": "#FF6B6B",
                "background-dark": "#121212",
                "surface-dark": "#1E1E1E",
                "on-background-dark": "#EAEAEA",
                "on-surface-dark": "#CCCCCC",
                "accent-dark": "#5C8DFF",
            },
            boxShadow: {
                // ----------------------------------------------------
                // --- MODO CLARO (usando background-light: #F4F3F2) ---
                // ----------------------------------------------------

                // Base de sombras claras (solo si las necesitas solas)
                'neumo-dark': '6px 6px 12px #d0cfce', // Sombra oscura
                'neumo-light': '-6px -6px 12px #ffffff', // Sombra clara

                // Sombra ELEVADA (para elementos que sobresalen)
                'neumo-elevate': '6px 6px 12px #d0cfce, -6px -6px 12px #ffffff',

                // Sombra INCRUSTADA (para el efecto "presionado")
                'neumo-depress': 'inset 5px 5px 10px #d0cfce, inset -5px -5px 10px #ffffff',

                // ----------------------------------------------------
                // 🚨 AÑADIDO: MODO OSCURO (usando background-dark: #121212) 🚨
                // ----------------------------------------------------

                // Base de sombras oscuras (solo si las necesitas solas)
                'neumo-dark-d': '6px 6px 12px #090909', // Sombra oscura para DARK
                'neumo-light-d': '-6px -6px 12px #1b1b1b', // Sombra clara para DARK

                // Sombra ELEVADA para DARK
                'neumo-elevate-d': '6px 6px 12px #090909, -6px -6px 12px #1b1b1b',

                // Sombra INCRUSTADA para DARK
                'neumo-depress-d': 'inset 5px 5px 10px #090909, inset -5px -5px 10px #1b1b1b',
            },
        },
    },
};
