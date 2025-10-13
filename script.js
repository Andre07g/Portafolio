document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    const body = document.body;
    
    // Función para aplicar o quitar el modo claro y guardar la preferencia
    const toggleLightMode = (isLight) => {
        if (isLight) {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    };

    // 1. Cargar el tema guardado al inicio (si existe)
    const savedTheme = localStorage.getItem('theme');
    
    // Si el tema guardado es 'light', activa el modo claro
    if (savedTheme === 'light') {
        checkbox.checked = true; // Marca visualmente el switch
        toggleLightMode(true);
    } else if (savedTheme === 'dark') {
        // Si el tema guardado es 'dark', asegúrate de que el switch esté apagado
        checkbox.checked = false;
        toggleLightMode(false);
    }
    // Si no hay tema guardado, se mantiene el Dark Mode por defecto (la clase no existe)

    // 2. Escuchar el evento de cambio del switch
    checkbox.addEventListener('change', () => {
        // El valor de checkbox.checked es el estado futuro
        toggleLightMode(checkbox.checked);
    });
});