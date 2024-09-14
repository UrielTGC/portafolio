// Función para obtener la IP del usuario
        function obtenerIP() {
            fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                let ip = data.ip;
                obtenerLocalizacion(ip);
            });
        }

        // Función para obtener la localización del usuario mediante la IP
        function obtenerLocalizacion(ip) {
            fetch(`https://ipinfo.io/${ip}/json?token=YOUR_TOKEN_HERE`)
            .then(response => response.json())
            .then(data => {
                let infoVisita = {
                    ip: data.ip,
                    ciudad: data.city,
                    region: data.region,
                    pais: data.country
                };
                enviarDatos(infoVisita);
            });
        }

        // Función para enviar los datos usando un formulario oculto
        function enviarDatos(infoVisita) {
            // Rellenar los campos ocultos del formulario
            document.getElementById('ip').value = infoVisita.ip;
            document.getElementById('ciudad').value = infoVisita.ciudad;
            document.getElementById('region').value = infoVisita.region;
            document.getElementById('pais').value = infoVisita.pais;
            
            // Enviar el formulario automáticamente
            document.getElementById('form').submit();
        }

        // Ejecuta la función al cargar la página
        window.onload = obtenerIP;