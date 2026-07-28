# Multi-stage Production Dockerfile for Backend API
FROM node:20-alpine AS builder

WORKDIR /app

# Copy root workspace configs
COPY package*.json tsconfig.json ./
COPY packages/shared-types ./packages/shared-types
COPY apps/api ./apps/api

# Install dependencies and build
RUN npm ci
RUN npm run build --workspace=packages/shared-types
RUN npm run build --workspace=apps/api

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/packages/shared-types ./packages/shared-types
COPY --from=builder /app/apps/api ./apps/api
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 4000

CMD ["node", "apps/api/dist/main.js"]
