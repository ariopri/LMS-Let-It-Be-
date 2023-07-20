FROM golang:1.20.6-alpine
WORKDIR /app
COPY . .
RUN go build -o main .
CMD [ "./main" ]