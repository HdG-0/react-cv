# docker tag local-image:tagname new-repo:tagname
# docker push new-repo:tagname

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

COPY --from=builder /react-cv/public ./public
COPY --from=builder /react-cv/.next ./.next
COPY --from=builder /react-cv/node_modules ./node_modules
COPY --from=builder /react-cv/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
