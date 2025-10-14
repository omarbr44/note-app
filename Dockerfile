FROM oven/bun:1 AS base
WORKDIR /src

FROM base AS deps
COPY package.json bun.locklock ./
RUN bun install --frozen-lockfile

FROM deps AS build
COPY . .
RUN bun run build

FROM nginx:alpine AS prod
COPY --from=build /src/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
