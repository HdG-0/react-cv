FROM node:lts as dependencies
WORKDIR /react-cv
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /react-cv
COPY . .
COPY --from=dependencies /react-cv/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /react-cv
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /react-cv/public ./public
COPY --from=builder /react-cv/.next ./.next
COPY --from=builder /react-cv/node_modules ./node_modules
COPY --from=builder /react-cv/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]

# FROM node:alpine
# WORKDIR /app
# COPY . .
# RUN yarn install 
# CMD ["yarn", "dev"]
# EXPOSE 3000