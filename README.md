# Note App

A modern Vue.js note-taking application built with Vite and Bun.

## Features

- 📝 Create, edit, and delete notes
- 🎨 Modern and responsive UI
- ⚡ Fast development with Vite
- 🚀 Powered by Bun for lightning-fast package management
- 📱 Mobile-friendly design
- 🔧 ESLint and Prettier for code quality

## Tech Stack

- **Frontend**: Vue.js 3
- **Build Tool**: Vite
- **Package Manager**: Bun
- **Linting**: ESLint with @antfu/eslint-config
- **Formatting**: Prettier
- **Containerization**: Docker

## Prerequisites

- [Bun](https://bun.sh/) installed on your system
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

## Getting Started

### Development

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd note-app
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Fix ESLint issues
- `bun run format` - Check Prettier formatting
- `bun run format:fix` - Fix Prettier formatting

## Docker Deployment

### Build and Run with Docker

1. Build the Docker image:

   ```bash
   docker build -t note-app .
   ```

2. Run the container:

   ```bash
   docker run -p 80:80 note-app
   ```

3. Open your browser and navigate to `http://localhost`

### Docker Compose (Optional)

You can also use Docker Compose for easier management:

```yaml
version: '3.8'
services:
  note-app:
    build: .
    ports:
      - '80:80'
    restart: unless-stopped
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vue.js](https://vuejs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Bun](https://bun.sh/) for the fast JavaScript runtime
- [@antfu/eslint-config](https://github.com/antfu/eslint-config) for the ESLint configuration
