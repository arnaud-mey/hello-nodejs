#!/usr/bin/env bash
minikube start
minikube addons enable ingress
eval $(minikube docker-env) #we want to use Minikube's docker registry
docker build . -t hello:v1
kubectl apply -k deploy/overlays/dev
kubectl apply -k deploy/overlays/production
minikube tunnel
