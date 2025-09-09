FROM oven/bun:latest

USER root

# RUN id -u app &>/dev/null || useradd -ms /bin/sh -u 1001 app

RUN useradd -ms /bin/sh -u 1001 app

USER app

# Install dependencies
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install

# Copy source files into application directory
COPY --chown=app:app . /app
