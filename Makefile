.DEFAULT_GOAL := install

CONTAINER_NAME = wuhan-web
IMAGE_NAME = wuhan-web-fe

install: 
	npm install

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run --name $(CONTAINER_NAME) -p 3000:3000 -d $(IMAGE_NAME)
	
start: build run

stop:
	docker stop $$(docker ps -a -q -f name=$(CONTAINER_NAME))
	docker rm $$(docker ps -a -q -f name=$(CONTAINER_NAME))