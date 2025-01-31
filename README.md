# lkmx-software-engineer

## Requisitos
Antes de iniciar, asegúrate de tener instaladas las siguientes dependencias en tu sistema:

- [Node.js](https://nodejs.org/) v18
- [npm](https://www.npmjs.com/) v10.2.4
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Tecnologías utilizadas
Este proyecto está desarrollado con las siguientes tecnologías:

- [Next.js](https://nextjs.org/) - Framework de React para aplicaciones web
- [Node.js](https://nodejs.org/) - Entorno de ejecución de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS para estilos modernos y responsivos
- [ApexCharts.js](https://apexcharts.com/) - Librería de gráficos interactivos

## Instalación y ejecución
Para clonar y ejecutar este proyecto en tu entorno local, sigue estos pasos:

### Clonar el repositorio
Ejecuta el siguiente comando en tu terminal:

```sh
git clone https://github.com/littleJmer/lkmx-software-engineer.git
cd lkmx-software-engineer
```

### Iniciar la aplicación
Una vez dentro del directorio del proyecto, ejecuta el siguiente script:

```sh
sh init.sh
```

Este script iniciará los contenedores de PostgreSQL y Next.js utilizando Docker Compose. Una vez los contenedores esten inicializados podras accedar al sistema atravez de la siguiente url.

```sh
http://localhost:3000
```

## Endpoints de interes

Muestra la salud del servicio

```sh
http://localhost:3000/api/health
```

## Problemas enfrentados y lecciones aprendidas
Despues de estar trabajando mucho tiempo en el backend, volver al frontend me parece gratificante y mas con Next.js la cual es mi primier acercamiento. Me sorprendio saber que Next.js permite el desarrollo de sistemas en una arquitectura monolitica por otro lado me causa bastante conflicto el enrutamiento en base al directorio, por ultimo durante el desarrollo de este proyecto, me encontré con varios desafíos:

- Debido a mi limitado conocimiento de Next.js, no pude generar el build para producción correctamente, por lo que el contenedor de Docker utiliza un ambiente de desarrollo, lo cual no es la mejor práctica.
- Tuve dificultades para determinar dónde colocar la instrucción para inicializar la conexión a la base de datos. Como resultado, existe un bug que impide la conexión si se ejecuta una petición a la API inmediatamente después de que el contenedor se haya iniciado en frío.
- El tiempo fue un factor limitante, lo que me impidió realizar al menos una prueba unitaria y una prueba de integración.

## Alternativas de despliegue
Para el despliegue a producción tenemos varias alternativas y combinaciones de herramientas como puede ser Cloud Formation, CodePipeline, Jenkins, Github Actions, Kubernets, etc. No he usado Google Cloud, pero sí Amazon AWS, por lo que propongo lo siguiente:

1) Contar con GitHub Actions en el repositorio, lo que nos permitirá realizar CI y CD de forma gratuita y sencilla. Utilizaríamos un workflow de GitHub Actions para construir la imagen de Docker de Next.js y subirla al servicio de ECR de AWS.
2) El servicio estaría corriendo en ECS de AWS, lo que nos brindaría escalabilidad y la posibilidad de aprovechar otros servicios como load balancers y la creación de múltiples instancias del servicio bajo demanda.

Otra opción puede ser utilizar una instancia EC2 de AWS y desplegar la infraestructura utilizando Docker Compose de manera nativa.

## Contribuciones
Si deseas contribuir al proyecto, por favor abre un issue o envía un pull request con tus cambios.

## Licencia
Este proyecto está bajo la licencia [MIT](LICENSE).

