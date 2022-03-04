# HELLO WORLD NodeJS Application

## Prerequesites
To run this stack, you'll need minikube and kubectl installed on your machine.

## Setup
1. To setup the stack, run `./setup.sh`. You'll be asked for your sudo password to open the minikube tunnel.
2. Grab a coffee or observe the deployment using `kc get pods -n hello-dev -w` once the manifests have been applied.
3. It's ready when `kc get deploy hello -n hello-dev` says that the replica is ready.

## Call the web pages
You can call the web pages with:
`curl localhost:80 -H 'Host: hello.prod.example.com'` for the prod version and
`curl localhost:80 -H 'Host: hello.dev.example.com'` for the dev version.

If you prefer to see it in a browser, you'll need to add entries to your host file:
`
sudo sh -c 'echo "127.0.0.1 hello.dev.example.com" >> /etc/hosts'
sudo sh -c 'echo "127.0.0.1 hello.prod.example.com" >> /etc/hosts'
`

## Limitations
1. There are password in plain texts in the repository. That's obviously a bad idea ;)
2. If we upgrade the docker image, the seed script would be run again. We'd need a less trivial approach in a real app.