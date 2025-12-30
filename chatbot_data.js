/**
 * BASE DE CONOCIMIENTO DE JARBIS AI
 * 
 * INSTRUCCIONES PARA "ENTRENAR" AL BOT:
 * 1. Copia y pega el bloque entre llaves { ... },
 * 2. Cambia las "palabras_clave" (lo que el usuario podría escribir).
 * 3. Cambia la "respuesta" (lo que el bot debe responder).
 */

const JARBIS_DATA = [
    // SALUDOS
    {
        palabras_clave: ["hola", "buenos dias", "buenas tardes", "hey", "saludos", "hi"],
        respuesta: "¡Hola! Soy Jarbis, tu asistente virtual. ¿En qué puedo ayudarte hoy?"
    },
    {
        palabras_clave: ["quien eres", "como te llamas", "nombre", "tu identidad"],
        respuesta: "Soy Jarbis AI, la inteligencia artificial de XGEOSPACE diseñada para ayudarte con información sobre nuestros servicios y proyectos."
    },
    {
        palabras_clave: ["gracias", "te agradezco", "chas gracias", "ok gracias"],
        respuesta: "¡De nada! Es un placer ayudarte. ¿Tienes alguna otra consulta?"
    },

    // --- INFORMACIÓN DE LA TESIS (User Provided) ---
    {
        palabras_clave: ["funcion geovisor", "para que sirve el geovisor", "utilidad geovisor"],
        respuesta: "El <strong>geovisor</strong> facilita el análisis visual de datos espaciales para gestión ambiental y la selección de áreas idóneas para piscigranjas."
    },
    {
        palabras_clave: ["datos dashboard", "que datos usa", "geojson", "utm 18s"],
        respuesta: "El dashboard utiliza <strong>Datos GeoJSON</strong> de piscigranjas en proyeccion UTM 18S, los cuales son transformados a Lat/Lon para ser visualizados en mapas interactivos con Leaflet."
    },
    {
        palabras_clave: ["estados conservacion", "colores piscigranjas", "significado colores", "bueno regular malo"],
        respuesta: "Se muestran tres estados de conservación:<br>🟢 <strong>Bueno</strong> (Verde)<br>🟡 <strong>Regular</strong> (Amarillo)<br>🔴 <strong>Malo</strong> (Rojo)"
    },
    {
        palabras_clave: ["capas mapa", "que mapas hay", "mapa oscuro", "satelite"],
        respuesta: "La plataforma incluye capas de: <strong>Mapa Oscuro</strong>, <strong>Satélite (Esri)</strong> y <strong>Mapa Claro</strong>. Cuenta con control de capas y minimapa."
    },
    {
        palabras_clave: ["precipitacion", "datos lluvia", "senamhi", "idesep"],
        respuesta: "Los datos de precipitación provienen del <strong>Catálogo de metadatos del SENAMHI (IDESEP)</strong>, consumidos vía servicio WMS para análisis hidrológico."
    },
    {
        palabras_clave: ["bibliotecas", "librerias r", "tecnologias"],
        respuesta: "El dashboard usa las librerías: `flexdashboard`, `leaflet`, `sf`, `dplyr`, `plotly` y `htmltools` para la visualización geoespacial interactiva."
    },
    {
        palabras_clave: ["crs", "sistema coordenadas", "proyeccion"],
        respuesta: "El CRS original es <strong>EPSG:32718 (UTM zone 18S)</strong>, el cual es transformado a <strong>EPSG:4326</strong> para su uso en Leaflet."
    },
    {
        palabras_clave: ["registro detallado", "tabla datos", "que muestra la tabla"],
        respuesta: "La tabla muestra los códigos, estados de conservación y valores P de las primeras 100 piscigranjas registradas."
    },
    {
        palabras_clave: ["publicacion", "donde ver", "url", "xgeospace"],
        respuesta: "La plataforma final está publicada en <strong>XGEOSPACE (2025)</strong>, un dominio web interactivo para servicios SIG."
    },

    // SERVICIOS
    {
        palabras_clave: ["servicios", "que hacen", "que ofrecen", "a que se dedican"],
        respuesta: "Ofrecemos servicios de:<br>1. Desarrollo de Geovisores Web.<br>2. Procesamiento de Imágenes Satelitales.<br>3. Implementación de Infraestructuras de Datos Espaciales (IDE).<br>4. Consultoría GIS."
    },
    {
        palabras_clave: ["contacto", "telefono", "email", "correo", "direccion", "ubicacion"],
        respuesta: "Puedes contactarnos al teléfono <b>+51 904 013 678</b>, al correo <b>aiquipafelix@gmail.com</b> o visitarnos en Av. De la Poesía Nº 351, San Borja, Lima."
    },
    {
        palabras_clave: ["precio", "costo", "cuanto cuesta", "cotizacion"],
        respuesta: "Los costos varían según la complejidad del proyecto. Por favor, ve a la sección de <a href='contacto.html'>Contacto</a> para solicitar una cotización formal."
    },

    // AGREGAR AQUÍ TUS NUEVAS PREGUNTAS Y RESPUESTAS
    /* 
    {
        palabras_clave: ["pregunta ejemplo 1", "pregunta ejemplo 2"],
        respuesta: "Aquí va la respuesta que quieres que dé el bot."
    },
    */
];
