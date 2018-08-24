#!/bin/bash
sleep 600
echo 'hello'
su - root -c 'git clone https://github.com/SaifRehman/facial-recognition.git'
su - root -c "cd facial-recognition && git pull && export KUBECONFIG=/bin/kube-config-mel01-mycluster.yml && kubectl delete deployments angular && kubectl apply -f service-deployment.yml"