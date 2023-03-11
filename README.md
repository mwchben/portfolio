## portfolio-static-site
Sample Portfolio Webpage for docker deployment

## docker101
using `kebectl` to deploy/...

## Steps

### 1

create `dockerfile` and `.dockerignore`

### 2

build docker image with `~# docker build -t the_app`

-t => to name a tag in te name:tag format

### 3

check docker image with `~#docker images` and run `~# docker run -p {PORT}:3000 -d the_app`

-d => run container in background and print containerID

--name => assign ame to the container

-P => publish all exposed ports to random ports

-p => publish a container's port(s) to the host 

### 4

get container ID and log status

`~# docker ps -a` and `~# docker logs {container_ID}

### 5

test port with `~# docker port containerID`




